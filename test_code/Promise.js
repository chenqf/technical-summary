const STATE = {
    PENDING: 0,
    SUCCESS: 1,
    ERROR: 2
}

const toResolve = function (value) {
    if (value instanceof Promise || isThenAble(value)) {
        value.then(
            (data) => {
                resolve.call(this, data);
            },
            (reason) => {
                reject.call(this, reason);
            }
        )
    } else {
        this.value = value;
        this.state = STATE.SUCCESS;
        this.over = true;
        this.thenList.forEach(item => {
            exec.call(this, item);
        })
        this.thenList = [];
    }
}

const toReject = function (e) {
    this.over = true;
    this.state = STATE.ERROR;
    this.value = e;
    this.thenList.forEach(item => {
        exec.call(this, item);
    })
    this.thenList = [];
}


const isThenAble = function (x) {
    return typeof x === 'object' && typeof x.then === 'function'
}

const exec = function (item) {
    const {
        resolve,
        reject,
        onResolve,
        onReject
    } = item;

    let callback = null;
    if (this.state === STATE.SUCCESS) {
        callback = onResolve;
    } else if (this.state === STATE.ERROR) {
        callback = onReject;
    }
    //没有回调,终值和拒因向下传递
    if (!callback) {
        this.state === STATE.SUCCESS ? resolve(this.value) : reject(this.value);
    } else {
        setTimeout(() => {
            try {
                let res = callback(this.value);
                resolve(res);
            } catch (e) {
                reject(e);
            }

        });
    }
}

class Promise {
    constructor(fn) {
        this.state = STATE.PENDING;
        this.value = null;
        this.over = false;
        this.thenList = [];
        try {
            fn(value => {
                if (!this.over) {
                    toResolve.call(this, value)
                }
            }, reason => {
                if (!this.over) {
                    toReject.call(this, reason)
                }
            })
        } catch (e) {
            toReject.call(this, e);
        }
    }
    then(onResolve, onReject) {
        return new Promise((resolve, reject) => {
            let item = {
                resolve,
                reject,
                onResolve,
                onReject
            }
            if (this.state === STATE.PENDING) {
                this.thenList.push(item);
            } else {
                exec.call(this, item)
            }
        })

    }
    catch (onReject) {
        return this.then(null, onReject);
    } finally(fn) {
        return this.then(data => {
            fn();
            return data;
        }, reason => {
            fn();
            throw reason;
        })
    }
    static all(array) {
        let len = array.length;
        let result = [];
        return new Promise((resolve, reject) => {
            array.forEach((item, index) => {
                Promise.resolve(item).then(data => {
                    len--;
                    result[index] = data;
                    if (len === 0) {
                        resolve(result);
                    }
                }, reason => {
                    reject(reason)
                })
            })
        })
    }
    static race(array) {
        return new Promise((resolve, reject) => {
            array.forEach((item, index) => {
                Promise.resolve(item).then(data => {
                    resolve(result);
                }, reason => {
                    reject(reason)
                })
            })
        })
    }
    static resolve(value) {
        if (value instanceof Promise) {
            return value;
        } else if (isThenAble(value)) {
            return new Promise(value.then);
        } else {
            return new Promise((resolve, reject) => {
                resolve(value)
            })
        }
    }
    static reject(reason) {
        return new Promise((resolve, reject) => {
            reject(reason)
        })
    }
}