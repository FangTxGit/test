/*  将 5/21/2020 格式转换成 2020/5/21
 *
 */

function DataChange (dateStr) {
    return dateStr.replace(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/, (content, $1, $2, $3) => {
        return `${$3}/${$1}/${$2}`
    })
}
console.log(DataChange('5/21/2020'))