function *getCount() {
    yield 10
    yield 20

} 
let val = getCount()
console.log(val.next().value);
console.log(val.next().value);
console.log(val.next().value);
