---
ct: 2019/08/08
---

# 浏览器渲染过程k

## 渲染首屏

1. 分别解析HTML和CSS文件，成文档对象模型（DOM）与 样式表对象模型（CSSOM）
2. 合并 DOM 与 CSSOM 成为渲染树（Render Tree）
3. 计算样式（style）
4. 计算每个节点的精确位置（Layout）
5. 根据精确位置将渲染树绘制到图层上（Paint）
6. 渲染引擎合成所有图层使人眼可见（Composite Layers）

简单版本：

1. 处理 HTML 标记并构建 DOM 树。
2. 处理 CSS 标记并构建 CSSOM 树。
3. 将 DOM 与 CSSOM 合并成一个渲染树。
4. 根据渲染树来布局，以计算每个节点的几何信息。
5. 将各个节点绘制到屏幕上。

## JS改变DOM

1. 计算样式
2. 计算节点的精确位置（非几何变化，跳过）
3. 绘制图层
4. 渲染引擎合成图层

## 疑问

Style 和 Layout 的区别是什么

JS 修改 DOM 需要重新计算 Render Tree 么

Rendering 和 Painting 的区别


https://zhuanlan.zhihu.com/p/29418126

