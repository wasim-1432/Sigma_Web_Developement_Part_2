const square=(a) => {
    return a*a;
}
console.log(square(3));

let id=setInterval( () => {
    console.log("Hello World!");
},2000);

setTimeout( () => {
    clearInterval(id);
},10000);