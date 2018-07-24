(function () {
    /**
     * 生成网页水印
     * 通过canvas 生成图片
     * 通过全局遮盖一个div实现
     */
    function watermark(text) {
        var container = document.body,
            width = '200px',
            height = '150px',
            textAlign = 'center',
            textBaseline = 'middle',
            font = "20px microsoft yahei",
            fillStyle = 'rgba(184, 184, 184, 0.8)',
            content = text || '请勿外传',
            rotate = 30,
            zIndex = 1000;
        var canvas = document.createElement('canvas');
        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);
        var ctx = canvas.getContext("2d");
        ctx.textAlign = textAlign;
        ctx.textBaseline = textBaseline;
        ctx.font = font;
        ctx.fillStyle = fillStyle;
        ctx.rotate(Math.PI / 180 * rotate);
        ctx.fillText(content, parseFloat(width) / 2, parseFloat(height) / 2);
        var base64Url = canvas.toDataURL();//用作水印的图片url
        var watermarkDiv = document.createElement("div");//用作水印的div遮罩层
        var styleList = [];
        styleList.push('position:absolute');
        styleList.push('top:0');
        styleList.push('left:0');
        styleList.push('bottom:0');
        styleList.push('right:0');
        styleList.push('right:0');
        styleList.push('z-index:' + zIndex);
        styleList.push('pointer-events:none');
        styleList.push('background-repeat:repeat');
        styleList.push('background-image:url(' + base64Url + ')');
        watermarkDiv.setAttribute('style', styleList.join(';'));
        container.style.position = 'relative';
        container.insertBefore(watermarkDiv, container.firstChild);
    }
    if (typeof module != 'undefined' && module.exports) {  //CMD
        module.exports = watermark;
    } else if (typeof define == 'function' && define.amd) { // AMD
        define(function () {
            return watermark;
        });
    } else {
        window.watermark = watermark;
    }
})();
// 调用
watermark('QQMusicFE')