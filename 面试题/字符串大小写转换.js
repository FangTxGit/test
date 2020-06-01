// 将字符串的大小写转换
var str = 'jaskAdjfJFDKksldf还设酷热321'

str = str.replace(/[a-zA-Z]/g, function (content) {
    const charCode = content.charCodeAt()
    return charCode < 97 ? content.toLocaleLowerCase() : content.toLocaleUpperCase()
})

console.log(str)

