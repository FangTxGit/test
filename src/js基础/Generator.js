function* Generator() {
    console.log('in');
    yield setTimeout(() => {
        console.log(1);
    }, 2000);
    yield setTimeout(() => { console.log(2) }, 1000)
    console.log('out');
}

let g = Generator()
g.next()

g.next()
g.next()