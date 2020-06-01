/* 旋转数组
 *
 */


var arr = [2, 4, 3, 5]


function rotate (arr) {

    let arrlength = parseInt(arr.length / 2)
    var temp;
    for (let i = 0; i < arrlength; i++) {
        temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
    }
    return arr;
}

console.log(rotate(arr))