let div=document.querySelector("div");
let ul=document.querySelector("ul");
let lis=document.querySelectorAll("li");

div.addEventListener("click", function () {
    console.log("Clicked was div");
});

ul.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("Clicked was ul");
});

for(let li of lis)
{
    li.addEventListener("click", function (event) {
        event.stopPropagation();
        console.log("Clicked was li");
    });
}