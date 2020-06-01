/* 快速排序
 *  从数组中间取一个值  在将该值从数组中去除，循环数组 比中间值小的 放左边  比中间值大的放右边  反复递归 最后拼一起
 */

var arr = [12, 22, 1, 8, 16, 16, 17, 1, 24]
function quick (arr) {
    let middelIndex = arr.length % 2 === 0 ? parseInt((arr.length / 2)) - 1 : parseInt(arr.length / 2)

    let middelNumber = arr.splice(middelIndex, 1)[0]
    let leftarr = []
    let rightarr = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element > middelNumber) {
            rightarr.push(element)
        } else {
            leftarr.push(element)
        }
    }
    if (leftarr.length > 0) {
        leftarr = quick(leftarr)
    }
    if (rightarr.length > 0) {
        rightarr = quick(rightarr)
    }
    return leftarr.concat(middelNumber).concat(rightarr)
}

console.log(quick(arr))