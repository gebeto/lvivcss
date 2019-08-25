import { getLocalState, setLocalState } from "./utils.js";

let defferedPrompt;

const handleBanner = (state) => {
	const banner = document.querySelector('#installBanner');
	const isInstalled = window.matchMedia('(display-mode: standalone)').matches;

	if (isInstalled || state.hasOwnProperty('installDismissed') && state.installDismissed) {
		banner.remove();
	} else {
		banner.style.display = 'flex';
		
		window.addEventListener('beforeinstallprompt', prompt => defferedPrompt = prompt);
		document.querySelector('#install').addEventListener('click', () => defferedPrompt.prompt());

		document.querySelector('#dismiss').addEventListener('click', () => {
			setLocalState({...state, installDismissed: true });
			banner.remove();
		});
	}
}

handleBanner(getLocalState());