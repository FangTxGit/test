/* 两个数组的交集
 *
 */


var a = [1, 2, 3, 4]
var b = [3, 4, 5, 6]

function intersection (a, b) {
    var c = []
    for (let index = 0; index < a.length; index++) {
        const element = a[index];
        if (b.includes(element)) {
            c.push(element)
        }

    }
    return c
}
function intersection2 (a, b) {

    return a.filter(item => b.includes(item))
}
console.log(intersection2(a, b))