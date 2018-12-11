#### 这个模块时干什么用的？
> 用于父组件将 action creator 传递个子组件，并且子组件没有接收到 store 和 dispatch。     
> 通过bindActionCreators创建的方法，直接调用dispatch(action)(隐式调用）      
> 实际使用中，都会使用 react-redux ,bindActionCreators此时并没有多少用处

#### 源码如下，也很简单
```javascript 1.8
/**
 * 将 dispatch 绑定到 action 上
 * @param actionCreator action 函数
 * @param dispatch dispatch 函数
 * @returns {Function} 返回一个可以直接调用 dispatch 的函数
 */
function bindActionCreator(actionCreator, dispatch) {
  // 返回一个可以直接调用的 dispatch 函数
  return function() {
    // 调用 dispatch 函数，执行 actionCreator
    return dispatch(actionCreator.apply(this, arguments))
  }
}
/**
 * 把 action creators 转成拥有同名 keys 的对象，但使用 dispatch 把每个 action creator 包围起来，这样可以直接调用它们。
 * 一般情况下你可以直接在 Store 实例上调用 dispatch。如果你在 React 中使用 Redux，react-redux 会提供 dispatch 函数让你直接调用它 。
 * 惟一使用 bindActionCreators 的场景是当你需要把 action creator 往下传到一个组件上，却不想让这个组件觉察到 Redux 的存在，而且不希望把 Redux store 或 dispatch 传给它
 * 该方法支持你可以传入一个函数作为第一个参数，它会返回一个函数。
 * 该方法也支持你传入一个函数对象作为第一个参数，会返回一个函数对象。
 */
function bindActionCreators(actionCreators, dispatch) {
  // 判断 actionCreators 是一个函数
  if (typeof actionCreators === 'function') {
    // 调用 bindActionCreator ， 返回包装后的 actionCreators , 包装后 actionCreators 可以直接 dispatch
    return bindActionCreator(actionCreators, dispatch);
  }

  // 如果传入的是个对象
  // 获取 actionCreators 所有的 key
  const keys = Object.keys(actionCreators);
  // 用来保存新 转换后的 actionCreators
  const boundActionCreators = {};
  // 遍历 所有的 actionCreators keys
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    // 获取当前的 actionCreator
    const actionCreator = actionCreators[key];
    // 当前的 actionCreator 是一个函数
    if (typeof actionCreator === 'function') {
      // 调用 bindActionCreator ， 返回包装后的 actionCreators , 包装后 actionCreators 可以直接 dispatch
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  // 返回经过 dispatch 包装过后的 actionCreators
  return boundActionCreators;
}
```