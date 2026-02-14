// let h1=document.querySelector("h1");

// function ChangeColor(color,delay,nextColorChange) {
//     setTimeout(() => {
//         h1.style.color=color;
//         if(nextColorChange)
//         {
//             nextColorChange();
//         }
//     },delay);
// }

// ChangeColor("red",1000,() => {
//     ChangeColor("orange",1000 , () => {
//         ChangeColor("green",1000, () => {
//             ChangeColor("yellow",1000, () => {
//                 ChangeColor("blue",1000)
//             })
//         });
//     });
// });

function saveDb(data,success,failure) {
    let internetSpeed=Math.floor(Math.random()*10)+1;
    if(internetSpeed>4)
    {
        success(data);
    }
    else
    {
        failure();
    }
}
saveDb("Apna College",(data) => {
    console.log("Your data was saved : ",data);
}, () => {
    console.log("Weak Connection. data not saved.");
});