const popover = document.getElementById("_popover");
const container = document.getElementById("_container");
const btn = document.getElementById("_btn");

const popover2 = document.getElementById("_popover2");
const container2 = document.getElementById("_container2");
const btn2 = document.getElementById("_btn2");

togglePopover(btn, popover, container);
togglePopover(btn2, popover2, container2);

function togglePopover(btn, popover, container) {
    btn.addEventListener("click", () => {
        popover.classList.toggle("active");
        container.classList.toggle("active");
    });

    btn.addEventListener("mouseenter", () => {
        popover.classList.add("active");
        container.classList.add("active");
    });

    btn.addEventListener("mouseleave", () => {
        popover.classList.remove("active");
        container.classList.remove("active");
    });
}
