const template = document.getElementById('speakerCardTemplate').cloneNode(true);
async function getSpeakers() {
	const speakers = await ((await fetch('./speakers.json')).json());
	const buffer = document.createDocumentFragment();
	
	speakers.forEach(speaker => {
		const node = document.importNode(template.content, true);
		node.querySelector('[data-role="talkName"]').textContent = speaker.talkName;
		node.querySelector('[data-role="speakerName"]').textContent = speaker.speakerName;
		node.querySelector('[data-role="speakerBio"]').textContent = speaker.speakerBio;
		node.querySelector('[data-role="talkDescription"]').textContent = speaker.talkDescription;
		const img = node.querySelector('[data-role="speakerPhoto"]');
		img.src = `/assets/images/speakers/${speaker.image}.png`;
		img.alt = speaker.speakerName;
		buffer.appendChild(node);
	});

	document.getElementById('speakers').appendChild(buffer);
}
getSpeakers();