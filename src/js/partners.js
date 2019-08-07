const section = document.getElementById('sectionTmpl');
const figure = document.getElementById('figureTmpl');
const target = document.getElementById('main');

const partners = [{
	name: 'gold',
	title: 'Золоті',
	items: [{
		logo: 'coingaming',
		name: 'Coingaming'
	}]
}, {
	name: 'silver',
	title: 'Срібні',
	items: [{
		logo: 'newfire',
		name: 'Newfire Partners'
	}]
}, {
	name: 'bronze',
	title: 'Бронзові',
	items: [{
		logo: 'sigma',
		name: 'Sigma Software'
	}]
}, {
	name: 'info',
	title: 'Інформаційні',
	items: [{
		logo: 'vinnytsiajs',
		name: 'VinnytsiaJS'
	}]
}];

for (category of partners) {
	const sectionInstance = document.importNode(section.content, true);
	const sectionInstanceTarget = sectionInstance.querySelector('section');
	sectionInstance.querySelector('h3').textContent = category.title;
	for (item of category.items) {
		const figureInstance = document.importNode(figure.content, true);
		figureInstance.querySelector('figure').classList.add(category.name);
		figureInstance.querySelector('.partner-logo')
			.style.backgroundImage = `url(assets/images/partners/${item.logo}.png)`;
		figureInstance.querySelector('figcaption').textContent = item.name;
		sectionInstanceTarget.appendChild(figureInstance);
	}
	target.appendChild(sectionInstance);
}