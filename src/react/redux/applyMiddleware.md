#### 源码在此

```javascript 1.8
function applyMiddleware(...middlewares) {
  return createStore => (...args) => {
    //生成 store
    const store = createStore(...args);
    let dispatch = () => {
      throw new Error(
        `Dispatching while constructing your middleware is not allowed. ` +
          `Other middleware would not be applied to this dispatch.`
      )
    };
    //构建参数 ({dispatch, getState}) 传递给中间件
    const middlewareAPI = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args)
    };
    //将每个中间件传入参数 middlewareApi 并保存在 chain中 （利用闭包，让每个middleware拥有同一份dispatch和getState的引用）
    /* chain 中保存着此种函数的集合
     next => action => {
        let result = next(action)
        return result
     }
     */
    const chain = middlewares.map(middleware => middleware(middlewareAPI));

    //compose：参考：https://github.com/chenqf/technical-summary/blob/master/src/react/redux/compose.md
    //生成新的 dispatch 方法 （store.dispatch 作为 next 参数传入）
    dispatch = compose(...chain)(store.dispatch);

    //返回 store 中的属性方法以及改写后的 dispatch 方法
    return {
      ...store,
      dispatch
    }
  }
}
```