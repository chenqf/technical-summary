# 左宽固定右宽自适应

## DOM结构

```html
 <div class="box">
    <div class="box-left"></div>
    <div class="box-right"></div>
 </div>
```

## float + margin

```css
.box {
    height: 200px;
}
.box > div {
    height: 100%;
}
.box-left {
    width: 200px;
    float: left;
    background-color: blue;
}
.box-right {
    margin-left: 200px;
    background-color: red;
}
```

## 利用calc计算

```css
.box {
    height: 200px;
}
.box > div {
    height: 100%;
}
.box-left {
    width: 200px;
    float: left;
    background-color: blue;
}
.box-right {
    width: calc(100% - 200px);
    float: right;
    background-color: red;
}
```

## flex

```css
.box {
    height: 200px;
    display: flex;
}

.box > div {
    height: 100%;
}

.box-left {
    width: 200px;
    background-color: blue;
}

.box-right {
    flex: 1; // 设置flex-grow属性为1，默认为0
    overflow: hidden;
    background-color: red;
}
```