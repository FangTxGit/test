var app = require('express')()
var socket = require('socket.io')

app.get('/', function (req, res) {
    res.send('hehe')
})
app.listen(3000, function () {
    console.log('链接已经创建完成')
})