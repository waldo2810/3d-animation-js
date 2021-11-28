//!Grab the things that will move
const card = document.querySelector(".card");
const container = document.querySelector(".container");
const sneaker = document.querySelector(".sneaker img");
const title = document.querySelector("h1");
const description = document.querySelector("h3");
const sizes = document.querySelector(".sizes");
const purchase = document.querySelector(".purchase button");

//!Make them move
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//!Turning back to normal
//Animate in
container.addEventListener("mouseenter", e => {
    card.style.transition = "none";
    sneaker.style.transform = "translateZ(100px) rotateZ(30deg)";
    title.style.transform = "translateZ(100px)";
    description.style.transform = "translateZ(100px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(100px)";
});
//Animate out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    title.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});