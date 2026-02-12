let num=prompt("Enter any number");
function Sum(num)
{
    let i=1;
    let sum=0;
    while(i<=num)
    {
        sum+=i;
        i++;
    }
    return sum;
}
console.log(Sum(num));