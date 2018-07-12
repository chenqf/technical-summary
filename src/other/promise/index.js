/**
 * 判断是否是thenable类型
 */
function isThenable(value) {
    return value && (typeof value === 'object' || typeof value === 'function') && typeof value.then === 'function';
}

/**
 * 控制状态变更为 resolved
 */
function resolve(value) {
    if(value instanceof this.constructor){
        value.then(
            (data)=>{
                resolve.call(this,data);
            },
            (reason)=>{
                reject.call(this,reason);
            }
        )
    }else if(isThenable(value)){
        new this.constructor(value.then).then(
            (data)=>{
                resolve.call(this,data);
            },
            (reason)=>{
                reject.call(this,reason);
            }
        )
    }else{
        this.over = true;
        this.state = 'resolved';
        this.value = value;
        for(let i = 0,len = this.thenList.length; i < len; i++){
            exec.call(this,this.thenList[i]);
        }
        this.thenList = [];
    }

}
/**
 * 控制状态变更为 rejected
 */
function reject(reason) {
    this.over = true;
    this.state = 'rejected';
    this.value = reason;
    for(let i = 0,len = this.thenList.length; i < len; i++){
        exec.call(this,this.thenList[i]);
    }
    this.thenList = [];
}
/**
 * promise 状态不为 pendding 时 执行注册的 then
 */
function exec(item) {
    let state = this.state,
        value = this.value,
        ret, // then 返回的promise的终值
        callback; // then 函数的参数
    if(state === 'resolved'){
        callback = item.onResolve
    }else if(state === 'rejected'){
        callback = item.onReject;
    }
    // 若缺少通过 then 注册的接收终值函数，终值向下传递
    if(!callback){
        ret = value;
        state === 'resolved' ? item.resolve(ret) : item.reject(ret);
    }else{
        setTimeout(()=>{
            try{
                ret = callback(value);
                item.resolve(ret);
            }catch(e){
                item.reject(e);
            }
        },0);
    }
}


class Promise{
    constructor(fn){
        this.state = 'pendding'; // 状态 pendding resolved rejected
        this.value = null; // 终值或拒因
        this.over = false;
        this.thenList = [];
        try{
            fn(
                (value)=>{
                    if(!this.over){
                        resolve.call(this,value);
                    }
                },
                (reason)=>{
                    if(!this.over){
                        reject.call(this,reason);
                    }
                }
            )
        }catch(e){
            reject.call(this,e);
        }
    }
    then(onResolve,onReject){
        return new this.constructor((resolve,reject)=>{
            let item = {onResolve,onReject,resolve,reject};
            if(this.state === 'pendding'){
                this.thenList.push(item)
            }else{
                exec.call(this,item)
            }
        })
    }
    catch(fn){
        return this.then(null,fn)
    }
    /**
     * ES2018 引入
     * 回调函数的操作，与状态无关
     * @param fn 回调参数不接收任何参数
     * @returns {*} 返回promise对象，状态及终值与之前一致
     */
    finally(fn){
        return this.then(
            (data)=>{
                fn();
                return data;
            },
            (error)=>{
                fn();
                throw error;
            }
        )
    }
    /**
     * 对 then 方法的封装
     * 用在链式调用的最后一步
     * 用于捕获异常，在全局中提示出来
     * @param onResolve
     * @param onReject
     * @returns {*|Promise.<T>}
     */
    done(onResolve,onReject){
        return this.then(onResolve,onReject).catch((error)=>{
            setTimeout(()=>{
                throw error;
            },0);
        })
    }
    static resolve(value){
        if(value instanceof Promise){
            return value;
        }else if(isThenable(value)){
            return new Promise(value.then);
        }else{
            return new Promise((resolve,reject)=>{
                resolve(value)
            })
        }
    }
    static reject(reason){
        return new Promise((resolve,reject)=>{
            reject(reason);
        })
    }
    static all(list = []){
        return new Promise((resolve,reject)=>{
            let array = [];
            let len = list.length;
            if(!len){
                return Promise.resolve([]);
            }
            list.forEach((i,index)=>{
                Promise.resolve(i).then(
                    (data)=>{
                        array.push({
                            data,
                            index
                        });
                        if(len === array.length){
                           resolve(
                               array.reduce((init,cur)=>{
                                   init[cur.index] = cur.data;
                                   return init;
                               },[])
                           )
                        }
                    },
                    (error)=>{
                        reject(error);
                    }
                )
            });
        })

    }
    static race(list = []){
        if(!list.length){
            return Promise.resolve([]);
        }
        return new Promise((resolve,reject)=>{
            list.forEach((i)=>{
                Promise.resolve(i).then(
                    (data)=>{
                        resolve(data)
                    },
                    (reason)=>{
                        reject(reason)
                    }
                )
            });
        })

    }
}
