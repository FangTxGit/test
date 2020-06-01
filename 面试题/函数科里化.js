/* 科里化函数（预先处理的思想 利用闭包）
 *
 */
//  add(1) 1
//  add(1,2) 3
//  add(1)(2,3) 6
//  add(1,2)(3) 6
//  add(1,2,3) 6

function add (...args) {
    var fn = function (...arg_fn) {
        return add(...args.concat(arg_fn));
    }
    fn.toString = function () {
        return args.reduce((a, b) => a + b);
    }
    return fn;
}
process(add(1)(1, 2, 3, 4, 5)(1, 1, 2))


