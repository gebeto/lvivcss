const classList = document.body.classList;
const onModalTriggerClick = mode => () => document.body.classList.toggle('noscroll', mode);
const addOnClick = (items, mode) => {
	for (const item of items) {
		item.addEventListener('click', onModalTriggerClick(mode));
	}
};

addOnClick(document.querySelectorAll('.card-expand-action'), true);
addOnClick(document.querySelectorAll('.card-collapse-action'), false);
