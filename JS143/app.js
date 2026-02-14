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
    // btn.onclick=sayHello;
    // btn.onclick=sayName;
    // btn.addEventListener("click",sayHello);
    // btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick", function () {
        console.log("You double clicked me!");
    });
};

function sayName() {
    alert("Apna College");
};