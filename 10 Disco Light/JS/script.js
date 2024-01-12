const lights = document.querySelectorAll('.light');
const body = document.body;

let active = 0;

setInterval(() => {
	lights[active].classList.remove('active');
	active++;
	if (active >= lights.length) {
		active = 0;
	}
	lights[active].classList.add('active');
	body.style.backgroundColor = getComputedStyle(lights[active]).backgroundColor;
}, 850);
