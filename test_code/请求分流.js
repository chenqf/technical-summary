//请求分流,有n个请求需要发送,同时只可发送num条

const shunt = (list, num = 3) => {
    let sendingList = [];
    let waitIngList = [...list];
    const dp = () => {
        while (sendingList.length < num && waitIngList.length) {
            let cur = waitIngList.pop();
            ajax(cur.url).then((data) => {
                sendingList.splice(sendingList.indexOf(cur), 1);
                dp();
                cur.callback && cur.callback(data);
            })
        }
    }
}


const list = [{
        url: 'url1',
        callback: () => {}
    },
    {
        url: 'url1',
        callback: () => {}
    },
    {
        url: 'url1',
        callback: () => {}
    },
    {
        url: 'url1',
        callback: () => {}
    },
    {
        url: 'url1',
        callback: () => {}
    },
    {
        url: 'url1',
        callback: () => {}
    },
    {
        url: 'url1',
        callback: () => {}
    }
]