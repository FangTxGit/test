// 调用repeatedFun(''helloworld)
// 会alert10次 helloworld 每次相隔5秒

function repeat (func, times, wait) {
    var timer = null
    return function (temp) {
        timer = setInterval(() => {
            times--;
            if (times === 0) {
                clearInterval(timer)
            }
            func(temp)
        }, wait);

    }
}

var repeatedFun = repeat(alert, 10, 1000)

repeatedFun('helloworld')

