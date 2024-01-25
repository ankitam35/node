let a = 40;
let b = 0;

let asyncPromise = new Promise((resolve) => {
    setTimeout(() => {
        b = 10;
        resolve(b);
    }, 2000)
});

asyncPromise.then((res) => {
    console.log(a + res);
})

console.log(a + b);
