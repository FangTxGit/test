/* 节流函数 一次执行之后 只有大于执行周期后才会执行第二次
 * 通常用于 onsroll
 */


function throttle (fn, wait) {
    var lastTime = 0
    return function () {
        var time = Date.now()
        if (time - lastTime > wait) {
            fn.call(this, arguments)
            lastTime = time
        }
    }
}
window.onload = function () {
    document.body.onscroll = throttle(function () { console.log(11) }, 500)
}
