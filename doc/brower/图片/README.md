---
ct: 2019/08/09
---
# 图片优化

`渲染`：图片加载不阻塞页面渲染。

## 渐进式图片

允许在加载照片的时候，如果网速比较慢的话，先显示一个类似模糊有点小马赛克的质量比较差的照片，然后慢慢的变为清晰的照片：

![](./1.gif)

`优点`：一开始就决定了大小，不需要从上至下加载，不会造成多次回流

`缺点`：需要消耗更多的CPU去多次计算渲染

## 非渐进式图片

渐进式的图片(Baseline JPEG)则会老老实实地从头到尾去加载：

![](./2.gif)

`优点`：消耗更少的CPU

`缺点`：需要从上至下加载，会造成多次回流

## CSS渐变背景

网速慢，图片还没加载完，会有一段空白时间。

在空白时间内，使用css渐变色背景来填充。

![](./3.gif)

[在线转换的地址](https://tools.w3clubs.com/gip/)

## 响应式图片

普通屏和高清屏使用不同大小的图片

背景图片，使用`css`的`@media`进行媒体查询

```css
.bg {
    background-image: url("bg.png");
    width: 100px;
    height: 100px;
    background-size: 100% 100%;
}
@media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2){
    .bg {
        background-image: url("bg@2x.png") // 尺寸为200 * 200的图
    }
}
```

img标签，使用H5中的`srcset`来达到效果

```html
 <img width="320"  src="bg@2x.png" srcset="bg.png 1x;bg@2x.png 2x"/>
```

当设备像素密度，也就是dpr(devicePixelRatio)为1时，使用bg.png，为2时使用二倍图bg@2x.png，依此类推，你可以根据需要设置多种精度下要加载的图片，如果没有命中，浏览器会选择最邻近的一个精度对应的图片进行加载。


