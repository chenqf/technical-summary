// 高层次不依赖于低层次     依赖于抽象
// 抽象不依赖于实现     具体实现依赖于抽象
// 面向接口编程     非面向实现编程


class App {
    constructor(options) {
        this.options = options;
        this.init();
    }
    static modules = [];
    static use(module) {
        App.modules.push(module);
    }
    init() {
        this.initModules();
        //自身初始化
        this.options.initReady(this);
    }
    initModules() {
        // 每个依赖的模块都需要实现init接口
        App.modules.forEach(module => module.init(this))
    }
}

const moduleA = {
    init(app) {
        console.log(app);
    }
}
const moduleB = {
    init(app) {
        console.log(app);
    }
}

//注入依赖
App.use(moduleA);
App.use(moduleB);

new App({
    moduleA: 1,
    moduleB: 2,
    initReady(app) {
        console.log('-----')
    }
})