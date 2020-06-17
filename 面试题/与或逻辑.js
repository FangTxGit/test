var foo = 'hello';
(function (foo) {
    console.log(foo);
    var foo = foo || 'world';
    console.log(foo);
})(foo);
console.log(foo); 
