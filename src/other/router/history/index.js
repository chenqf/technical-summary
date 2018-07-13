

/**
 *  思路如下
 *  使用 history.pushState history.replaceState
 *  history 方法不会触发 popstate
 *  浏览器前进后退，会触发 popstate
 *  注册 url 对应的回调函数
 *  切换页面时，额外调用URL对象应的回调函数
 *  监听 popstate 变更，触发回调函数
 */

class Router{
    constructor(){
        this.routers = {};
        this.init();
    }
    load(){
        let url = location.pathname || '/';
        this.routers[url] && this.routers[url]();
    }
    changePage(url){
        history.pushState({},null,url);
        this.routers[url] && this.routers[url]();
    }
    replacePage(url){
        history.replaceState({},null,url);
        this.routers[url] && this.routers[url]();
    }
    route(path,fn = Function.prototype){
        this.routers[path] = fn;
    }
    init(){
        window.addEventListener('load',this.load.bind(this));
        window.addEventListener('popstate',this.load.bind(this));
    }
}