const images = document.querySelectorAll('[data-image]');
for (const image of images) {
	const url = image.getAttribute('data-image');
	image.style.backgroundImage = `url('assets/images/${url}.jpg')`;
}