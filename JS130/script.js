let arr=[1,2,3,4,5,6];
function Square(arr) {
    return arr.map((el) => {
        return el*el;
    })
}
console.log(Square(arr));

function Sum(arr) {
    return arr.reduce((s,el) => {
        return s+el;
    })
}
console.log(Sum(arr));

function Average(arr) {
    let s=Sum(arr);
    return s/arr.length;
}
console.log(Average(arr));