
# 监听浏览器FPS

```javascript
let FPS = (function(){
    let request = function(){
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (callback) {
                return window.setTimeout(callback, 1000 / 60);
            }
        );
    }();
    let cancel = function(){
        return (
            window.cancelAnimationFrame || 
            window.webkitCancelAnimationFrame || 
            function(num){
                window.clearTimeout(num)
            }
        )
    }();


    // 请求ID，用于停止
    let requestId = null;
    // 上一秒的时间
    let lastTime = null;
    // 上一帧的时间
    let lastFrameTime = null;
    // 函数执行了多少次
    let frame = 0;
    // 函数共执行了多少次
    let allFrame = 0;
    // 开始时间
    let startTime = 0;

    let initParams = function(){
        lastTime = Date.now();
        lastFrameTime = Date.now();
        frame = 0;
        allFrame = 0;
        startTime = Date.now();
    }

    let loop = function(){
        let now = Date.now();
        frame ++;
        lastFrameTime = now;
        if(now >= 1000 + lastTime){
            print(frame,now - lastTime)
            cancel(requestId);
            frame = 0;
            lastTime = now;
        }
        requestId = request(loop)
    }

    let loopAllFrame = function(){
        allFrame ++;
        requestId = request(loopAllFrame)
    }

    let print = function(size,time){
        let fps = ~~(size/time * 1000);
        console.log('fps:',fps);
    }

    return {
        start:()=>{
            if(requestId){
                return ;
            } 
            initParams();
            loopAllFrame();
        },
        end:()=>{
            cancel(requestId);
            requestId = null;
            print(allFrame,Date.now() - startTime);
        },
        go:()=>{
            if(requestId){
                return ;
            }
            initParams();
            loop();
        },
        stop:()=>{
            cancel(requestId);
            requestId = null;
        }
    }
}())
```