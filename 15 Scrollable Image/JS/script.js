const card = document.querySelectorAll('#_card');
window.addEventListener('scroll', animatedCards);

function animatedCards() {
	const checkingBottom = (window.innerHeight / 4) * (100 / 25);
	const checkingTop =
		window.innerHeight - (window.innerHeight / 4) * (100 / 25);

	card.forEach((singleCard, index) => {
		const cardTop = singleCard.getBoundingClientRect().top;
		const cardBottom = singleCard.getBoundingClientRect().bottom;

		if (cardTop < checkingBottom) {
			singleCard.classList.add('active');
		} else {
			singleCard.classList.remove('active');
		}

		if (cardBottom > checkingTop) {
			singleCard.classList.remove('shrinked');
		} else {
			singleCard.classList.add('shrinked');
		}
	});
}
