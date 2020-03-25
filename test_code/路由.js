// hash

// 1.没有hash添加hash
if (!location.hash) {
    location.hash = '/'
}

// 2.监听hashchange
window.addEventListener('hashchange', function () {}) // 根据hash触发回调


// history

history.pushState(data, title, url)
history.replaceState(data, title, url)

// 前进后退时 触发 popstate
window.addEventListener('popstate', function () {}) // 根据pathname触发回调

//封装函数,用于js跳转url,使用pushState replaceState 方法,并触发对应的回调

//全局拦截a连接,实现调用pushState 和 replaceState 的方法  e.preventDefault()