

# 常用DOM操作


## 属性

+ `element.nodeType` ：元素类型
  + 标签：1
  + 文本：3
  + 注释：8
  + document: 9
+ `element.nodeName/element.tagName`: 标签名
  + 文本返回：#text
  + document返回：#document
+ `element.parentNode` : 获取节点的父元素
  + `document` 为顶层元素，故 `document.parentNode === null`
+ `element.childNodes` : 子元素列表
  + 类数组对象
+ `element.previousSibling` : 获取元素的前一个兄弟节点
  + 若`element`为第一个元素，返回`null`
+ `element.nextSibling` : 获取元素的下一个兄弟节点
  + 若`element`为最后一个元素，返回`null`
+ `element.firstChild` : 获取第一个子元素
+ `element.lastChild` : 获取最后一个子元素

+ `element.setTextContent` : 设置文本内容



## 方法

