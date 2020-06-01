// 在字符串中查找子字符串 并且返回索引 没有查到 返回 -1

let str = 'ajshf1h2781jdh'
let char = 'd'
let reg = new RegExp(char)
let index = str.search(reg)

console.log(index)