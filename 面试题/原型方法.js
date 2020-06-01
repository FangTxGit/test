// 实现(5).add(3).minus(2) === 6
(function () {
    function add (num) {
        return this + num
    }
    function minus (num) {
        return this - num
    }
    Number.prototype.add = add
    Number.prototype.minus = minus
}())

console.log((5).add(3).minus(2))