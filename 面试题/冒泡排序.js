/* 冒泡排序
 * 前一个和后一个比 如果前一个比后一个大 就交换2个的位置
 * 最外层循环是length-1 因为自身不用循环
 * 内部循环的是length-1-i 因为经过i次循环后 最后面的元素已经是按照顺序排列过的了 所以不需要在重复排序
 */

var ary = [12, 8, 24, 16, 1]
function bubble (ary) {
    let count = 0;
    let temp = null
    for (let i = 0; i < ary.length - 1; i++) {
        for (let j = 0; j < ary.length - 1 - i; j++) {

            if (ary[j] > ary[j + 1]) {
                console.log(ary)
                ++count;
                temp = ary[j]
                ary[j] = ary[j + 1]
                ary[j + 1] = temp
            }
        }

    }
    console.log(count)
    return ary
}
console.log(bubble(ary))
