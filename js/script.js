let burger = document.querySelector(".burger-menu");
let menu = document.querySelector(".nav-menu");
let bars = document.querySelector(".fa-bars");
let cross = document.querySelector(".fa-xmark");





function burgerMenu(){

    menu.classList.toggle("active");
    bars.classList.toggle("active");
    cross.classList.toggle("active");
}

let dropDown = document.querySelector(".dropdown");
let aboutMenu = document.querySelector(".about");

function drop(){

    dropDown.classList.toggle("drop");

    console.log(22);
}




