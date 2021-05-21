const target = { a: 1, b: 2 }
let proxy = new Proxy(target, {
    get(target, property, receiver) {
        console.log(target, property, receiver);
        return target[property]
    },
    set(target, property, value) {
        console.log(target, property, value);
        target[property] = value
    }
})

proxy.a = 123
console.log(proxy.a);