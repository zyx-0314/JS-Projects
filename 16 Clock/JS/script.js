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
    const currentDate = new Date();
    time.innerHTML = currentDate.toLocaleTimeString();
}, 1000);

function toggleClasses(elements, className) {
    elements.forEach((element) => {
        element.classList.toggle(className);
    });
}

card.addEventListener("mouseenter", () => {
    toggleClasses([month, day, sideButton], "hovering");
});

card.addEventListener("mouseleave", () => {
    toggleClasses([month, day, sideButton], "hovering");
});

sideButton.addEventListener("click", () => {
    toggleClasses(allElement, "dark");
});

sideButton.addEventListener("mouseenter", () => {
    sideButton.classList.toggle("hovering");
});

sideButton.addEventListener("mouseleave", () => {
    sideButton.classList.toggle("hovering");
});
