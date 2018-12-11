
### 很简单，源码在此

```javascript 1.8
/**
 * 随着应用变得复杂，需要对 reducer 函数 进行拆分，拆分后的每一块独立负责管理 state 的一部分。
 * combineReducers 辅助函数的作用是，把一个由多个不同 reducer 函数作为 value 的 object，
 * 合并成一个最终的 reducer 函数，然后就可以对这个 reducer   *调用 createStore。
 * 合并后的 reducer 可以调用各个子 reducer，并把它们的结果合并成一个 state 对象。
 * state 对象的结构由传入的多个 reducer 的 key 决定
 */
function combineReducers(reducers) {
  //把 reducers 对象中可以枚举的属性转换成一个数组
  const reducerKeys = Object.keys(reducers);
  //声明接受最终 reducers 对象
  const finalReducers = {};
  //循环遍历 reducers key
  for (let i = 0; i < reducerKeys.length; i++) {
    const key = reducerKeys[i];
    //判断当前 reducer 是一个函数
    if (typeof reducers[key] === 'function') {
      //赋值给 finalReducers 对象
      finalReducers[key] = reducers[key]
    }
  }
  //把 finalReducers 对象中可枚举的属性转换成一个数组
  const finalReducerKeys = Object.keys(finalReducers);

  //返回结合起来的 Reducer
  return function combination(state = {}, action) {
    //标识state是否发生变化
    let hasChanged = false;
    const nextState = {};
    //循环遍历 finalReducerKeys ,执行所有的 reducer, 所以大家一定不要有相同的 action.type ,否则你的状态一定会混乱的
    for (let i = 0; i < finalReducerKeys.length; i++) {
      //获取当前的 key
      const key = finalReducerKeys[i];
      //获取当前 reducer
      const reducer = finalReducers[key];
      //获取当前 key 的 state
      const previousStateForKey = state[key];
      //执行分支下的 reducer ，获取分之下state
      const nextStateForKey = reducer(previousStateForKey, action);
      //将分支下的state进行赋值
      nextState[key] = nextStateForKey;
      //若state发生变化，设置为true
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey
    }
    //若发生变化，返回新state，否则返回旧state
    return hasChanged ? nextState : state
  }
}
```