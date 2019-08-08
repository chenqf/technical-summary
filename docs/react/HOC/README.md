---
ct: 2019/08/08
---
# 高阶组件

好处：遵循`单一职责`

## 属性代理

```javascript
function withNewFunctionality(WrappedComponent) {
    return class NewFunctionality extends Component {
        render() {
            const newProp = 'Value';
            const propsProxy = {
                ...this.props,
                // 修改现有属性:
                ownProp: this.props.ownProp + ' was modified',
                // 增加新属性:
                newProp
            };
            return <WrappedComponent {...propsProxy} />;
        }
    }
}
const MyNewComponent = withNewFunctionality(MyComponent);
```

## 渲染劫持

```javascript
function withModifiedChildren(WrappedComponent) {
    return class ModifiedChildren extends WrappedComponent {
        render() {
            const rootElement = super.render();
            const newChildren = [
                ...rootElement.props.children,
                // 插入一个元素
                <div>New child</div>
            ];
            return cloneElement(
                rootElement,
                rootElement.props,
                newChildren
            );
        }
    }
}
const MyNewComponent = withModifiedChildren(MyComponent);
```

