let arr=[10,20,3,40];
// let ans=arr.some((el)=> {
//     return el%10!=0;
// });
// console.log(!ans);
let min=1000;

let ans=arr.reduce((min,el) => {
    if(min>el) {
        return el;
    }
    else
    {
        return min;
    }
});
console.log(ans);