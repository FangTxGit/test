var num = 10;
var obj = {
    num: 20
}
obj.fn = (function (num) {
    this.num = num * 3;
    num++;
    return function (n) {
        this.num += n
        num++;
        console.log(num)
    }
})(obj.num)
//this.num 65 num 22
var fn = obj.fn
fn(5)    // 
obj.fn(10)
console.log(num, obj.num)

//22