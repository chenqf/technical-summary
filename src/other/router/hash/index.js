

/**
 *  思路如下
 *  url hash 变更，不会触发页面刷新
 *  注册 hash 对应的回调函数
 *  监听 hash 变更，触发回调函数
 */

class Router{
    constructor(){
        this.routers = {};
        this.init();
    }
    route(path,fn = Function.prototype){
        this.routers[path] = fn;
    }
    load(){
        let hash = location.hash.slice(1),
            currentUrl = hash || '/',
            handler = this.routers[currentUrl] || Function.prototype;
        handler();
    }
    init(){
        window.addEventListener('hashchange',this.load.bind(this));
        window.addEventListener('load',this.load.bind(this));
    }
}