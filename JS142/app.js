let btns=document.querySelectorAll("button");
console.dir(btns);

// btn.onclick = function () {
//     alert("Button was clicked!");
// }
function sayHello() {
    alert("hello!");
};

for(let btn of btns)
{
    btn.onclick=sayHello;
    btn.onmouseenter=function () {
        console.log("You entered a button.");
    }
};

