### 主要用途
> 统一异步和同步 action 的调用方式，把异步过程放到 action 级别解决

### 源码如下，非常简单
```javascript 1.8
function createThunkMiddleware(extraArgument) {
  //实际 redux-thunk 中间件的内容
  return ({ dispatch, getState }) => next => action => {
    // 当 action 是 function 时，执行action，并阻断代码的运行，不会真正触发 dispatch
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }
    // action 非 function 时 正常执行下一中间件，不做处理
    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
export default thunk;
```