
> 使用 line-height 和 fill-available 让块状表现的元素垂直居中
```html
<div class="box1">
    <p class="content">
        width:fill-available可以让元素的宽度表现为默认的block水平元素的尺寸表现。<br>
        但这里实际上是display:inline-block水平的，<br>
        于是，我们可以保证宽度满尺寸自适应的同时使用line-height实现近似的垂直居中效果。
    </p>
</div>
```
```css
.box1{
        /* 行高控制垂直居中 */
        line-height: 200px;
        background: grey;
    }
    .box1 .content{

        vertical-align: middle;  /* 元素内联，响应行高和vertical-align控制 */
        display: inline-block;

        /* 宽度如块状元素般表现 */
        width: -webkit-fill-available;
        width: -moz-fill-available;
        width: -moz-available;    /* FireFox目前这个生效 */
        width: fill-available;

        line-height: 25px;
        padding :0 10px;
        background: #be1212;
        color: white;
        font-size: 14px;
    }
```


