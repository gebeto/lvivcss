(async () => {
  const social = (items = {}) => Object.keys(items)
    .map(key => {
      return `<div class="social-button"><a href="${items[key]}" class="${key}" target="_blank"></a></div>`;
    }).join('');

  const t = (data) => `<div class="speaker">
  <div class="portrait">
    <img src="${data.img}" alt="${data.name}" class="speaker-photo">
    ${social(data.social)}
  </div>
  <p class="speaker-name">${data.name}</p>
  <div class="social-button"></div>
</div>
`;

  async function main() {
    const data = await (await fetch('../data/speakers.json')).json();
    return {
      exclusive: data.exclusive.filter(({ hidden }) => !hidden).map(item => t(item)).join(''),
      speakers: data.speakers.filter(({ hidden }) => !hidden).map(item => t(item)).join('')
    };
  };

  const markup = await main();

  document.getElementById('speakers').innerHTML = markup.speakers;
  document.getElementById('exclusive').innerHTML = markup.exclusive;
})();