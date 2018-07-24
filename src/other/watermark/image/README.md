
![avatar](https://raw.githubusercontent.com/chenqf/technical-summary/master/src/other/watermark/image/C.png)
```javascript 1.8
/**
 * 在图片底部增加水印
 * 下载图片后，将图片充满canvas，并添加水印
 * 将canvas转换为base64的url地址
 */
function watermark(url,text,callback) {
    var imageUrl = url || '',
        textAlign = 'center',
        textBaseline = 'middle',
        font = "20px Microsoft Yahei",
        fillStyle = 'rgba(184, 184, 184, 0.9)',
        content = text || '请勿外传',
        cb = callback || Function.prototype,
        textX = 100,
        textY = 30;
    var img = new Image();

    img.crossOrigin = 'anonymous';
    img.onload = function () {
        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        ctx.textAlign = textAlign;
        ctx.textBaseline = textBaseline;
        ctx.font = font;
        ctx.fillStyle = fillStyle;
        ctx.fillText(content, img.width - textX, img.height - textY);
        var base64Url = canvas.toDataURL();
        cb(base64Url);
    };
    img.src = imageUrl;
}
```
```javascript 1.8
// 调用
var url = 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=944aee0ebafd5266b3263446ca71fc4e/024f78f0f736afc36cb0dd80bf19ebc4b6451292.jpg';
watermark(url,'终身偶像',function (base64Url) {
    document.querySelector('#demo').src = base64Url;
});
```