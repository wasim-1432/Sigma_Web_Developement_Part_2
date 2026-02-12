let arr=["Apple","Mango","Banana","Pineapple"];
function concatString(arr)
{
    let s="";
    for(let i=0;i<arr.length;i++)
    {
        s+=arr[i];
        s+=" ";
    }
    return s;
}
console.log(concatString(arr));