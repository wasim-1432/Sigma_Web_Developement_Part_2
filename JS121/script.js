let arr=[1,2,4,55,33,77,34];
let max=-1;
// for(let i=0;i<arr.length;i++)
// {
//     if(max<arr[i])
//     {
//         max=arr[i];
//     }
// }
// console.log(max);

let ans=arr.reduce((max,el) => {
    if(max<el)
    {
        return el;
    }
    else
    {
        return max;
    }
});
console.log(ans);