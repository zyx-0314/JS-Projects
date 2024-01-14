const month = document.getElementById("_month");
const day = document.getElementById("_day");
const sideButton = document.getElementById("_sideButton");
const card = document.getElementById("_card");

const time = document.getElementById("_time-element");

const allElement = document.querySelectorAll("*");

const date = new Date();
const dayOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

month.innerHTML = date.toLocaleString("default", {month: "long"});

day.innerHTML = date.getDate() + "th" + ", " + dayOfTheWeek[date.getDay()];

setInterval(() => {
    const date = new Date();
    time.innerHTML = date.toLocaleTimeString();
}, 1000);

card.addEventListener("mouseenter", (e) => {
    month.classList.toggle("hovering");
    day.classList.toggle("hovering");
    sideButton.classList.toggle("hovering");
});

card.addEventListener("mouseleave", (e) => {
    month.classList.toggle("hovering");
    day.classList.toggle("hovering");
    sideButton.classList.toggle("hovering");
});

sideButton.addEventListener("click", (e) => {
    allElement.forEach((element) => {
        element.classList.toggle("dark");
    });
});

sideButton.addEventListener("mouseenter", (e) => {
    sideButton.classList.toggle("hovering");
});

sideButton.addEventListener("mouseleave", (e) => {
    sideButton.classList.toggle("hovering");
});
