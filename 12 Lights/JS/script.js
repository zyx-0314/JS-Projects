const container = document.getElementById('_container');

let greenColorCode = [
	// 10 different level of lightness of green
	'#00FF00',
	'#00EE00',
	'#00DD00',
	'#00CC00',
	'#00BB00',
	'#00AA00',
	'#009900',
	'#008800',
	'#007700',
	'#006600',
];

const numberOfSquares = 99;

for (let index = 0; index < numberOfSquares; index++) {
	const activity = document.createElement('div');
	activity.classList.add('activity');

	activity.addEventListener('mouseover', () => {
		addColor(activity);
	});

	activity.addEventListener('mouseout', () => {
		addColor(activity);
	});
	container.appendChild(activity);
}

function addColor(activity) {
	const color = greenColors();
	activity.style.backgroundColor = color;
	activity.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function greenColors() {
	return greenColorCode[Math.floor(Math.random() * greenColorCode.length)];
}
