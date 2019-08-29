/* 
	Якщо вимкнути Javascript, то все, що станеться — не можна буде закрити
	перегляд одного спікера по ESC, і body матиме scrolling піл переглядом.
	От і все ¯\_(ツ)_/¯
 */

const bodyClassList = document.body.classList;

const onESCKey = ({ key }) => {
	if (key === 'Escape') {
		const checkbox = document.querySelector('input.modal-toggle:checked');
		if (!checkbox) {
			return;
		}
		checkbox.checked = false;
		checkbox.onchange({ target: checkbox });
	}
};

document.body.addEventListener('keydown', onESCKey);

const onchange = ({ target: { checked } }) => bodyClassList.toggle('noscroll', checked);

for (const checkbox of document.querySelectorAll('input.modal-toggle')) {
	checkbox.onchange = onchange;
}