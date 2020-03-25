// 高层次不依赖于低层次     依赖于抽象
// 抽象不依赖于实现     具体实现依赖于抽象
// 面向接口编程     非面向实现编程


class App {
    constructor(options) {
        this.options = options;
        this.init();
    }
    static modules = [];
    static use(...modules) {
        App.modules = [...App.modules, ...modules];
    }
    init() {
        this.initModules();
        this.options.initReady(this);
    }
    initModules() {
        App.modules.forEach(module => {
            module.init(this);
        })
    }
}

class A {
    constructor() {

    }
    init(app) {
        app.A = {
            config: app.options.configA
        };
    }
}

class B {
    constructor() {

    }
    init(app) {
        app.B = {
            config: app.options.configB
        };
    }
}

App.use(new A, new B);

new App({
    configA: {
        a: 1
    },
    configB: {
        b: 2
    },
    initReady(app) {
        console.log(app)
    }
})