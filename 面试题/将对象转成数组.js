// var obj = {
//     1: 'aaa',
//     5: 'bbb',
//     10: 'ccc'
// }
// 将对象转成['aaa', null.null, null, 'bbb', null, null, null, null, 'ccc']

var obj = {
    1: 'aaa',
    5: 'bbb',
    10: 'ccc'
}
let a = new Array(10).fill(null).map((item, index) => {
    return obj[index + 1] || null
})

console.log(a)