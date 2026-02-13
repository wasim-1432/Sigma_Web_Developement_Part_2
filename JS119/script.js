// let arr=[1,2,3,4,5];
// let even=arr.every((el) => {
//     return el>0;
// });
// console.log(even);

let arr=[1,3,5,7];
let ans=arr.some((el) => {
    return el%2==0;
});
console.log(ans);