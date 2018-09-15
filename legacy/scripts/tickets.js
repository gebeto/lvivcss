(async () => {
  const benefits = (items = []) => items.map(item => {
    return `<li>${item}</li>`;
  }).join('');

  const t = (data) => `<section class="ticket">
  <header>${data.title}</header>
  
  <main>
    ${
      !data.base ? `<h2>supporter pack</h2><p>in addition to <b>Regular ticket</b> includes:</p>` : ''
    }
    <ul class="benefits">
      ${benefits(data.benefits)}
    </ul>
    <p class="price">${data.price}</p>
  </main>
  <aside style="background-color: ${data.color}"><a href="https://2event.com/en/events/1466074">Buy ticket</a></aside>
</section>
`;

  async function main() {
    const data = await (await fetch('../data/tickets.json')).json();
    return data.map(item => t(item)).join('');
  };

  const markup = await main();

  document.getElementById('tickets').innerHTML = markup;
})();