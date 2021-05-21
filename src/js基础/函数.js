var a = function abc() {
    console.log(1);
    // console.log(arguments.callee);
    arguments.callee()
}
a()


function c(arr, ...c) {
    console.log(c);
}

c('a', 1, 2, 3, 4, 5, 6, 7, 8, 9)