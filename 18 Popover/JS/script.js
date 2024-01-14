const popover = document.getElementById("_popover");
const container = document.getElementById("_container");
const btn = document.getElementById("_btn");

const btn2 = document.getElementById("_btn2");
const container2 = document.getElementById("_container2");
const popover2 = document.getElementById("_popover2");

btn.addEventListener("click", () => {
    popover.classList.toggle("active");
    container.classList.toggle("active");
});

btn2.addEventListener("mouseenter", () => {
    popover2.classList.toggle("active");
    container2.classList.toggle("active");
});

btn2.addEventListener("mouseleave", () => {
    popover2.classList.toggle("active");
    container2.classList.toggle("active");
});
