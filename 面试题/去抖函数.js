// 一个频繁触发的操作，需要在规定时间内 只让最后一次生效 通常用于 键盘的keyup事件 搜索联想等
function debounce (fn, delay) {
    var timer = null
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.call(this)
        }, delay);
    }
}