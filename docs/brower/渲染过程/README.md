---
ct: 2019/08/08
---

# 浏览器渲染过程

## 渲染首屏

1. 分别解析HTML和CSS文件，成文档对象模型（DOM）与 样式表对象模型（CSSOM）
2. 合并 DOM 与 CSSOM 成为渲染树（Render Tree）
3. 计算样式（style）
4. 计算每个节点的精确位置（Layout）
5. 根据精确位置将渲染树绘制到图层上（Paint）
6. 渲染引擎合成所有图层使人眼可见（Composite Layers）

## JS改变DOM

1. 计算样式
2. 计算节点的精确位置（非几何变化，跳过）
3. 绘制图层
4. 渲染引擎合成图层

## 疑问

Style 和 Layout 的区别是什么

JS 修改 DOM 需要重新计算 Render Tree 么

Rendering 和 Painting 的区别

搭建一个 vue 模板

https://zhuanlan.zhihu.com/p/70752505