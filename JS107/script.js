// let arr=[1,2,3,2,7,55,66,33,44];
// let target=prompt("Enter any target number");
// function Targetted_Number(target)
// {
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]>target)
//         {
//             return arr[i];
//         }
//     }
// }
// console.log(Targetted_Number(target));

// function Required_Answer()
// {
//     let s="";
//     let str="abcdabcdefgggh"
//     for(let i=0;i<str.length;i++)
//     {
//         let found=false;
//         for(let j=0;j<s.length;j++)
//         {
//             if(str[i]==s[j])
//             {
//                 found=true;
//                 break;
//             }
//         }
//         if(found==false)
//         {
//             s+=str[i];
//         }
//     }
//     return s;
// }
// console.log(Required_Answer());

// let country=["Australia","Germany","United States of America"];
// function Largest_Country_Name(country)
// {
//     let ans=0;
//     let s;
//     for(let l=0;l<country.length;l++)
//     {
//         if(ans<country[l].length)
//         {
//             ans=country[l].length;
//             s=country[l];
//         }
//     }
//     return s;
// }
// console.log(Largest_Country_Name(country));

// let s=prompt("Enter any string");
// function Check_Vowels(ch)
// {
//     return ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u' || ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U';
// }
// function Count_Vowels(s) {
//     let count=0;
//     for(let i=0;i<s.length;i++)
//     {
//         if(Check_Vowels(s[i]))
//         {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(Count_Vowels(s));

let start=prompt("Enter start");
start=parseInt(start);
let end=prompt("Enter end");
end=parseInt(end);
function Number(start,end)
{
    let diff=end-start;
    return Math.floor(Math.random()*diff)+start;
}
console.log(Number(start,end));