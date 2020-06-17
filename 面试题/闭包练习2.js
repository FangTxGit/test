function fn (i) {
    return function (n) {
        console.log(n + (i++))
    }
}
var f = fn(10)
f(20) // 30
fn(20)(40) // 60
fn(30)(50) // 80
f(30) // 41