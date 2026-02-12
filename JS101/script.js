let num=prompt("Enter any number");
function Print_Table(num)
{
    let i=1;
    while(i<=10)
    {
        console.log(`${num} X ${i} = ${num*i}`);
        i++;
    }
}
Print_Table(num);