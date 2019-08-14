

class Event{
    constructor(){
        this._events = new Map();
    }
    on(key,callback){
        let handlers = this._events.get(key);
        if(!handlers){
            this._events.set(key,[callback]);
        }else{
            handlers.push(callback)
        }
    }
    emit(key,...args){
        let handlers = this._events.get(key) || [];
        for(let i = 0; i<handlers.length; i++){
            try{
                handlers[i].apply(this,args)
            }catch(e){

            }
        }
    }
    remove(key,callback){
        let handlers = this._events.get(key) || [];
        let index = handlers.indexOf(callback);
        if(index >=0){
            handlers.splice(index,1)
        }
        if(!handlers.length){
            this._events.delete(key)
        }
    }
}