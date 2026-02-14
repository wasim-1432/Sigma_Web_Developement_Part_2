let btn=document.querySelector("button");
btn.addEventListener("click",ChangeColor);

function ChangeColor() {
    console.dir(this.innerText);
    this.style.backgroundColor="blue";
}

let h1=document.querySelector("h1");
h1.addEventListener("click", ChangeColor);

let p=document.querySelector("p");
p.addEventListener("click", ChangeColor);

let h3=document.querySelector("h3");
h3.addEventListener("click", ChangeColor);