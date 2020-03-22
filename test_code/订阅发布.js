class EventBus {
    constructor() {
        this._events = new Map();
    }
    on(key, callback) {
        const handlers = this._events.get(key);
        if (handlers) {
            handlers.push(callback)
        } else {
            this._events.set(key, [callback]);
        }
    }
    emit(key) {
        const handlers = this._events.get(key) || [];
        handlers.forEach(callback => {
            callback();
        })
    }
    delete(key) {
        this._events.delete(key);
    }
}