### 仅使用css实现浏览器滚动时屏幕上端出现横向进度条

> 若使用js计算页面滚动距离,那么很好实现,没什么难度        
> 仅使用css的话,需要另辟蹊径 使用线性渐变来实现


```stylus
   body {
        background-image: linear-gradient(to right top, #ffcc00 50%, #eee 50%);
        background-size: 100% calc(100% - 100vh + 5px);
        background-repeat: no-repeat;
    }
    body::after {
        content: "";
        position: fixed;
        top: 5px;
        left: 0;
        bottom: 0;
        right: 0;
        background: #fff;
        z-index: -1;
    }
```



