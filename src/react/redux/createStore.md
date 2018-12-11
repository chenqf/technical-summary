## 内容整理
> 源码注释  
> 为什么会出现 currentListeners 和 nextListeners
> 为什么Reducer中不能进行dispatch操作？
> 为什么applyMiddleware中middlewareAPI中的dispathc要用闭包包裹？


#### 源码注释
```javascript 1.8
/**
 * 创建一个Redux store 用于存放应用所有的state。应用中有且只有一个store
 * @param reducer 是一个函数，接收两个参数，分别是当前state 和 要处理的action ,返回新的state树
 * @param preloadedState  初始化时的state ,在应用中，你可以把服务端传来经过处理后的 state 传给它。
 * 如果你使用 combineReducers 创建 reducer，它必须是一个普通对象，与传入的 keys 保持同样的结构。
 * 否则，你可以自由传入任何 reducer 可理解的内容
 * @param enhancer 是一个组合的高阶函数，返回一个强化过的 store creator .
 * 这与 middleware相似，它也允许你通过复合函数改变 store 接口
 * @returns 返回一个对象，给外部提供 dispatch, getState, subscribe, replaceReducer
 */
export default function createStore(reducer, preloadedState, enhancer) {
    // 判断 入参类型是否正确
    if (
        (typeof preloadedState === 'function' && typeof enhancer === 'function') ||
        (typeof enhancer === 'function' && typeof arguments[3] === 'function')
    ) {
        throw new Error(
            'It looks like you are passing several store enhancers to ' +
            'createStore(). This is not supported. Instead, compose them ' +
            'together to a single function'
        )
    }

    //没有初始state值，可将第二个参数 preloadedState 作为 enhancer
    if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
        enhancer = preloadedState
        preloadedState = undefined
    }

    //若存在 enhancer ,则 enhancer 必须为函数，且返回一个新强化过的 store creator
    if (typeof enhancer !== 'undefined') {
        if (typeof enhancer !== 'function') {
            throw new Error('Expected the enhancer to be a function.')
        }
        //返回一个新强化过的 store creator
        return enhancer(createStore)(reducer, preloadedState)
    }

    //判断 reducer 必须为函数
    if (typeof reducer !== 'function') {
        throw new Error('Expected the reducer to be a function.')
    }

    let currentReducer = reducer; // 设定 action 接收函数
    let currentState = preloadedState; // 设置默认 state
    let currentListeners = []; // 保存当前的 监听事件
    let nextListeners = currentListeners; // 监听事件的备份（ 文后，详细解释为何需要备份 ）
    let isDispatching = false; // 是否正在派发 action

    // 生成 订阅快照
    function ensureCanMutateNextListeners() {
        if (nextListeners === currentListeners) {
            nextListeners = currentListeners.slice()
        }
    }

    /**
     * 当前不可是 派发action中的状态
     * 返回当前的 state
     * @returns {*}
     */
    function getState() {
        if (isDispatching) {
            throw new Error(
                'You may not call store.getState() while the reducer is executing. ' +
                'The reducer has already received the state as an argument. ' +
                'Pass it down from the top reducer instead of reading it from the store.'
            )
        }

        return currentState
    }

    /**
     * 订阅函数，当 dispatch action 后，state发生变化，在listener中调用 store.getState() 获取最新state
     * 1. 订阅器（subscriptions） 在每次 dispatch() 调用之前都会保存一份快照。
     *    当你在正在调用监听器（listener）的时候订阅(subscribe)或者去掉订阅（unsubscribe），
     *    对当前的 dispatch() 不会有任何影响。但是对于下一次的 dispatch()，无论嵌套与否，
     *    都会使用订阅列表里最近的一次快照。
     *  2. 订阅器不应该关注所有 state 的变化，在订阅器被调用之前，往往由于嵌套的 dispatch()
     *    导致 state 发生多次的改变，我们应该保证所有的监听都注册在 dispath() 之前。
     * @param listener 要监听的函数
     * @returns {unsubscribe} 一个可以移除监听的函数
     */
    function subscribe(listener) {
        //判断 listener 不是一个函数
        if (typeof listener !== 'function') {
            throw new Error('Expected the listener to be a function.')
        }
        // 当前不可是 派发action中的状态
        if (isDispatching) {
            throw new Error(
                'You may not call store.subscribe() while the reducer is executing. ' +
                'If you would like to be notified after the store has been updated, subscribe from a ' +
                'component and invoke store.getState() in the callback to access the latest state. ' +
                'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.'
            )
        }

        let isSubscribed = true
        // 生成 订阅快照
        ensureCanMutateNextListeners()
        //添加一个订阅函数
        nextListeners.push(listener)
        //返回一个用于取消订阅的函数
        return function unsubscribe() {
            if (!isSubscribed) {
                return
            }

            if (isDispatching) {
                throw new Error(
                    'You may not unsubscribe from a store listener while the reducer is executing. ' +
                    'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.'
                )
            }

            isSubscribed = false

            ensureCanMutateNextListeners()
            const index = nextListeners.indexOf(listener)
            nextListeners.splice(index, 1)
        }
    }

    /**
     * dispath action。这是触发 state 变化的惟一途径。
     * @param action 一个普通(plain)的对象，对象当中必须有 type 属性
     * @returns {*}
     */
    function dispatch(action) {
        //必须是普通的 plain 对象
        if (!isPlainObject(action)) {
            throw new Error(
                'Actions must be plain objects. ' +
                'Use custom middleware for async actions.'
            )
        }
        // 必须有type 属性
        if (typeof action.type === 'undefined') {
            throw new Error(
                'Actions may not have an undefined "type" property. ' +
                'Have you misspelled a constant?'
            )
        }

        // 派发 action 过程中，不可再次派发
        if (isDispatching) {
            throw new Error('Reducers may not dispatch actions.')
        }

        try {
            isDispatching = true
            //执行当前 Reducer 函数返回新的 state
            currentState = currentReducer(currentState, action)
        } finally {
            isDispatching = false
        }
        //所有的的监听函数赋值给 listeners
        const listeners = (currentListeners = nextListeners)
        //遍历所有的监听函数并执行
        for (let i = 0; i < listeners.length; i++) {
            const listener = listeners[i]
            listener()
        }

        return action
    }

    /**
     * 替换计算 state 的 reducer。
     * 这是一个高级 API。
     * 只有在你需要实现代码分隔，而且需要立即加载一些 reducer 的时候才可能会用到它。
     * 在实现 Redux 热加载机制的时候也可能会用到。
     * @param nextReducer store 要用的下一个 reducer.
     */
    function replaceReducer(nextReducer) {
        //nextReducer 必须是一个函数
        if (typeof nextReducer !== 'function') {
            throw new Error('Expected the nextReducer to be a function.')
        }
        //当前传入的 nextReducer 赋值给 currentReducer
        currentReducer = nextReducer
        //重新触发dispath 用于更新 state
        dispatch({ type: ActionTypes.REPLACE })
    }

    /**
    * observable 预留接口
    */
    function observable() {
        //订阅方法赋值给变量 outerSubscribe
        const outerSubscribe = subscribe
        return {
          /**
           * 最小订阅方法
           * 观察者应该有 `next` 方法
           * 返回取消订阅函数
           */
          subscribe(observer) {
            //判断 observer 是一个对象
            if (typeof observer !== 'object' || observer === null) {
              throw new TypeError('Expected the observer to be an object.')
            }
            //获取observer的状态
            function observeState() {
              if (observer.next) {
                observer.next(getState())
              }
            }
            
            observeState();
            //返回一个取消订阅的方法
            const unsubscribe = outerSubscribe(observeState);
            return { unsubscribe }
          },
          //对象的私有属性，暂时不知道有什么用途
          [$$observable]() {
            return this
          }
        }
    }

    //reducer 返回其初始状态 
    //初始化 store 里的 state tree
    dispatch({ type: ActionTypes.INIT })
    //返回 store 暴漏出的接口
    return {
        dispatch, //唯一一个可以改变 state 的哈按时
        subscribe, //订阅一个状态改变后，要触发的监听函数 
        getState, // 获取 store 里的 state
        replaceReducer, //Redux热加载的时候可以替换 Reducer
        [$$observable]: observable //对象的私有属性，供内部使用
    }
}
```

#### 为什么会出现 currentListeners 和 nextListeners
> 看过源码后，会发现 createStore 为了保存store 的订阅者，不仅保存了当前订阅者的 currentListeners 而且也保存 nextListeners，其中一个重要的函数 ensureCanMutateNextListeners。
```javascript 1.8
// 生成 订阅快照
function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
        nextListeners = currentListeners.slice()
    }
}
```
> 这个函数的实质作用是生成一个currentListeners的快照nextListeners    
> 在订阅事件subscribe和取消订阅
```javascript 1.8
function subscribe(listener) {
    // 生成 订阅快照
    ensureCanMutateNextListeners()
    //添加一个订阅函数
    nextListeners.push(listener)
    //返回一个用于取消订阅的函数
    return function unsubscribe() {
        ensureCanMutateNextListeners()
        const index = nextListeners.indexOf(listener)
        nextListeners.splice(index, 1)
    }
}
```
>我们发现订阅和解除订阅都是在nextListeners做的操作，然后每次dispatch一个action都会做如下的操作:
```javascript 1.8
function dispatch(action) {
    currentState = currentReducer(currentState, action)
    //所有的的监听函数赋值给 listeners
    //相当于currentListeners = nextListeners const listeners = currentListeners
    const listeners = (currentListeners = nextListeners)
    for (let i = 0; i < listeners.length; i++) {
        const listener = listeners[i]
        listener()
    }
    return action
}
```
> 相当于currentListeners = nextListeners const listeners = currentListeners    
> 解释一下 订阅者(subscriptions)在每次dispatch()调用之前都是一份快照(snapshotted)。如果你在listener被调用期间，进行订阅或者退订，在本次的dispatch()过程中是不会生效的，然而在下一次的dispatch()调用中，无论dispatch是否是嵌套调用的，都将使用最近一次的快照订阅者列表   
> 疑问：JavaScript不是单线程的吗？怎么会出现上述所说的场景呢？   
> 例如
```javascript 1.8
const store = createStore(reducers.todos)
const unsubscribe1 = store.subscribe(() => {
    const unsubscribe2 = store.subscribe(()=>{})
})
```

#### 为什么Reducer中不能进行dispatch操作？
> 1.reducer作为计算下一次state的纯函数是不应该承担执行dispatch这样的操作    
> 2.在源码中已经对 dispatch 函数进行了限制，即使调用，也不会成功
```javascript 1.8
function dispatch(action) {
    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.')
    }
    try {
      isDispatching = true
      currentState = currentReducer(currentState, action)
    } finally {
      isDispatching = false
    }

    //...notice listener
}
```
#### 为什么applyMiddleware中middlewareAPI中的dispathc要用闭包包裹？





