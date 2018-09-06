(() => {
  const target = document.getElementById('footer');
  const width = 100 / 30;
  for (let i = 0; i < 30; i++) {
    const element = document.createElement('div');
    element.className = 'rect';
    // element.style.animationDelay = `${(i / 25) * 3000}ms`;
    element.style.animationDelay = `${Math.random() * 3000}ms`;
    element.style.width = `${width}%`;
    element.style.left = `${i * width}%`;
    target.appendChild(element);
  }
})();