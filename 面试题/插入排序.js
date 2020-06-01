/* 插入排序法
 * 类似于抓牌，先拿第一张牌放在手里， 从牌里面抓，然后和手里的牌比较 如果比手里的大 就排在后面 如果比手里的小 就换位置
 */
var ary = [12, 8, 24, 16, 1]
function insert (ary) {

    let temp = ''
    let tempary = []
    for (let i = 0; i < ary.length; i++) {
        temp = ary[i];
        // 第一次先将牌放入手中
        if (i === 0) { tempary.push(temp) }
        else {
            let index = -1
            const temparycount = tempary.length
            for (let j = temparycount; j > 0; j--) {
                if (temp < tempary[j - 1]) {
                    // splice(n,0,m) 输入插入元素n从1开始算 删除0个元素 插入的值是m
                    index = j
                }
            }
            if (index === -1) { tempary.push(temp) }
            else {
                tempary.splice(index - 1, 0, temp)
            }

        }

    }
    return tempary
}

console.log(insert(ary))