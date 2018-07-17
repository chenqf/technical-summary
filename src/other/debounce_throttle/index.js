/**
 * 防抖函数，多次执行变为最后一次执行
 * 应用场景：
 * 实时搜索（keyup）
 * 拖拽（mousemove）
 */
function debounce(method,delay) {
    let timer = null;
    return function (...args) {
        let context = this;
        clearTimeout(timer);
        setTimeout(()=>{
            method.apply(context,args)
        },delay);

    }
}

/**
 *  多次执行，变为每隔一段时间执行
 * 应用场景：
 * 页面滚动（scroll）
 * 抢购疯狂点击 (mousedown)
 */
function throttle(method,delay) {
    let timer = null;
    return function (...args) {
        let now = Date.now();
        if(now - timer){
            method.apply(this,args)
            timer = now;
        }
    }
}