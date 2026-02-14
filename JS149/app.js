// let form=document.querySelector("form");
// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     // console.dir(form);
//     // let inp=document.querySelector("input");
//     // let user=form.elements[0];
//     // let pass=form.elements[1];

//     // console.log(user.value);
//     // console.log(pass.value);
//     // alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// });

// let user=document.querySelector("#user");
// user.addEventListener("change", function () {
//     console.log("Change Event.");
//     console.log("final Value =",user.value);
// });

// let user1=document.querySelector("#user");
// user.addEventListener("input", function () {
//     console.log("Input Event.");
//     console.log("final Value =",user.value);
// });

let inp=document.querySelector("#text");
let para=document.querySelector("p");
inp.addEventListener("input", function () {
    console.log(inp.value);
    para.innerText=inp.value;
});
