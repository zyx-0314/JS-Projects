const tabOne = document.getElementById("_react");
const tabTwo = document.getElementById("_angular");
const tabThree = document.getElementById("_vue");

const item = document.querySelectorAll("#_item");
const icon = document.getElementById("_big-icon");
const active = document.getElementById("_active");

const body = document.body;

// create const of tabOneBG base on colors of react
const tabOneBG = "linear-gradient(50deg, rgba(97,218,251,1) 0%, rgba(255, 255, 255, 1) 100%)";
const tabTwoBG = "radial-gradient(circle, rgba(255, 255, 255, 1) 0%, #fe436b 60%, #dd0031 100%)";

function setColors(tab, bgColor, iconClass, infoColor) {
    body.style.background = bgColor;
    icon.innerHTML = '<i class="fab ' + iconClass + '"></i>';
    for (let index = 0; index < item.length; index++) {
        item[index].style.color = infoColor;
    }
}

tabOne.addEventListener("click", () => {
    setColors(tabOne, tabOneBG, "fa-react", "#61dafb");
    tabOne.classList.add("tabOne");
    tabTwo.classList.remove("tabTwo");
    tabThree.classList.remove("tabThree");
});

tabTwo.addEventListener("click", () => {
    setColors(tabTwo, tabTwoBG, "fa-angular", "#dd0031");
    tabOne.classList.remove("tabOne");
    tabTwo.classList.add("tabTwo");
    tabThree.classList.remove("tabThree");
});

tabThree.addEventListener("click", () => {
    setColors(tabThree, "#41b883", "fa-vuejs", "#41b883");
    tabOne.classList.remove("tabOne");
    tabTwo.classList.remove("tabTwo");
    tabThree.classList.add("tabThree");
});
