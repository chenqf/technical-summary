let event = new Event();

//订阅
event.on('first-event', function(msg) {
    console.log(`订阅的消息是：${msg}`);
});

// 发送消息
event.emit('first-event', '消息')

// 移除消息
event.remove('first-event')