


class Observer{
    constructor(){
        this.events = new Map();
    }
    addListerEvent(key,fn = Function.prototype){
        if(!key){
            return false;
        }
        let handlers = this.events.get(key);
        if(handlers){
            handlers.push(fn);
        }else {
            this.events.set(key,[fn]);
        }
    }
    publish(key,...params){
        if(!key){
            return false;
        }
        let handlers = this.events.get(key) || [];
        handlers.forEach((i,index,array)=>{
            i.apply(this,params);
        });
    }
    remove(key,fn){
        if(fn){
            let handlers = this.events.get(key) || [];
            let index = handlers.indexOf(fn);
            index >=0 && handlers.splice(index,1);
        }else{
            this.events.delete(key);
        }
    }
}