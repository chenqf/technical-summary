# 浏览器指纹追踪

## 什么是指纹追踪

一般情况下，网站或者广告商都想要一种技术可以在网络上精确的定位到每一个个体，这样就可以通过收集这些个体的数据，然后加以分析之后更加精确的去推送广告和其他的一些活动。

场景1：

> 在网站上浏览了某个商品，了解了相关的商品信息，但并没有下单购买，甚至没有进行登录操作。过两天用同台电脑访问其他网站的时候却发现很多同类商品的广告。

场景2：

> 在某博客中你有多个小号（水军），这些小号的存在就是为了刷某个帖子的热度或者进行舆论引导，又或者纯粹进行流量交易，即便你在切换账号的时候清空了cookie、本地缓存，重开路由器甚至使用vpn来进行操作，你觉得自己足够小心，并尽可能提高水军的真实性，但是管理人员可能还是知道这是同一个人在操作，从而被打击。

点击[这里](https://fingerprintjs.com/demo)查看自己的浏览器指纹ID和基本信息。

## 基本指纹

+ 操作系统：navigator.platform
+ 用户代理（浏览器类型）：navigator.userAgent
+ 浏览器版本号：navigator.appVersion
+ 浏览器是否启动cookie：navigator.cookieEnabled
+ cpu等级：navigator.cpuClass
+ cpu虚拟核心数：navigator.hardwareConcurrency
+ 系统语言：navigator.language
+ 屏幕分辨率：window.screen
+ 浏览器插件：navigator.plugins
+ 时差区：new Date().getTimezoneOffset()
+ 颜色质量：window.screen.colorDepth

## Canvas指纹

从根本上来说，每一种浏览器都会使用不同的图像处理引擎，不同的导出选项，不同的压缩等级，所以每一台电脑绘制出的图形都会有些许不同，这些图案可以被用来给用户设备分配特定编号（指纹），也就是说可以用来识别不同用户。

简易实现如下：

```javascript
function getCanvasFingerprint () {
    let canvas = document.createElement('canvas');
    let context = canvas.getContext("2d");
    context.font = "18pt Arial";
    context.textBaseline = "top";
    let text = navigator.platform
        + navigator.userAgent
        + navigator.appVersion
        + navigator.cookieEnabled
        + navigator.cpuClass
        + navigator.hardwareConcurrency
        + navigator.language
        + window.screen
        + Array.from(navigator.plugins).map(i=>i.name + i.description + i.filename).join()
        + new Date().getTimezoneOffset()
        + window.screen.colorDepth
    context.fillText(text, 2, 2);
    return canvas.toDataURL("image/jpeg");
}
getCanvasFingerprint()
```

点击[这里](https://browserleaks.com/canvas)测试一下你Cavans指纹。

一个成熟的浏览器指纹库：[fingerprintjs2](https://github.com/Valve/fingerprintjs2)
