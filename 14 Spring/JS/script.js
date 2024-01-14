const layers = document.querySelectorAll("#layer");

document.addEventListener("mousemove", function (e) {
    layers.forEach((layer, i) => {
        const movement = layer.getAttribute("data-speed");
        let x = (window.innerWidth - e.pageX * movement) / 250;
        let y = (window.innerHeight - e.pageY * movement) / 250;

        layer.style.transform = `translateX(${-x}px) translateY(${-y}px)`;
    });
});
