import { getState, setState } from './utils.js';
const state = getState();

if (!state.speakers) {
	setState({...state, speakers: {} });
}

const onCheckedChange = id => ({ target }) => {
	const state = getState();
	state.speakers[id] = target.checked;
	setState(state);
};

for (const checkbox of document.querySelectorAll('[name=speakers]')) {
	const id = checkbox.dataset.id;
	checkbox.onchange = onCheckedChange(id);
	checkbox.checked = state.speakers[id];
}