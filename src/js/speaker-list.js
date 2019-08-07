const script = document.currentScript;
const template = document.getElementById('speakerCardTemplate').cloneNode(true);
const textContentKeys = ['speakerName', 'speakerBio', 'talkName', 'talkDescription'];

async function getSpeakers() {
	const speakers = await ((await fetch('../data/speakers.json')).json());
	const buffer = document.createDocumentFragment();

	speakers.forEach(speaker => {
		const node = document.importNode(template.content, true);

		for (key of textContentKeys) {
			node.querySelector(`[data-role="${key}"]`).textContent = speaker[key];
		}

		const img = node.querySelector('[data-role="speakerPhoto"]');

		img.src = `/assets/images/speakers/${speaker.image}.png`;
		img.alt = speaker.speakerName;

		buffer.appendChild(node);
	});

	document.getElementById('speakers').appendChild(buffer);
	document.head.removeChild(script);
}

getSpeakers();