const navigationItems = [{
	href: '/',
	title: 'Головна'
}, {
	href: '/speakers.html',
	title: 'Спікери'
}, {
	href: '/partners.html',
	title: 'Партнери'
}, {
	href: '/partnership.html',
	title: 'Партнерам'
}];

const nav = document.getElementById('navigation');
const path = window.location.pathname;

for (item of navigationItems) {
	const link = document.createElement('a');
	link.href = item.href;
	link.textContent = item.title;
	link.className = 'navigation-link';
	if (item.href === path) {
		link.classList.add('active');
	}
	nav.appendChild(link);
}

document.head.removeChild(document.currentScript);
