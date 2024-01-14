const card = document.querySelector("#_card");

function animatedCards() {
    const checkingBottom = (window.innerHeight / 4) * (100 / 25);
    const checkingTop = window.innerHeight - (window.innerHeight / 4) * (100 / 25);

    const cardTop = card.getBoundingClientRect().top;
    const cardBottom = card.getBoundingClientRect().bottom;

    if (cardTop < checkingBottom) {
        card.classList.add("active");
    } else {
        card.classList.remove("active");
    }

    if (cardBottom > checkingTop) {
        card.classList.remove("shrinked");
    } else {
        card.classList.add("shrinked");
    }
}
