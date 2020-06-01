let ws = new WebSocket('localhost:3000')

// 一旦服务器响应了WebSocket连接请求，open事件触发并建立一个连接
ws.onopen = () => {
    const { readyState } = ws
    if (+readyState === 1) {
        ws.send('已经链接触发了onopen')
    }
}
ws.onmessage = (e) => {
    console.log('接受到了消息:' + e)
}
ws.onreadyStateChange = () => {
    console.log('onreadyStateChange')
}
ws.close = () => {
    console.log('close')
}

ws.onerror = (e) => {
    console.log('WebSocket has been shut down in accident,the following is the error emssage,please ask for technological support!!')
}

document.body.onclick = function () {
    ws.send('我点击了一下')
}