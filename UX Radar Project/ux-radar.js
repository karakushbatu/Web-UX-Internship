(function () {
  // Create the UX Radar Panel
  const panel = document.createElement('div');
  panel.id = 'ux-radar-panel';
  panel.innerHTML = `
    <strong>UX Radar</strong><br>
    Scroll: 0%<br>
    Last Click: -
  `;
  document.body.appendChild(panel);

  // Update scroll percentage in the panel
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);
    const scrollLine = `Scroll: ${scrollPercent}%`;

    panel.innerHTML = panel.innerHTML.replace(/Scroll: .*?%/, scrollLine);
    console.log(`[UXRadar] Scroll: ${scrollPercent}%`);
  });

  // Update last clicked element info in the panel
  document.addEventListener('click', (e) => {
    const target = e.target;
    const tagName = target.tagName;
    const className = target.className || 'no-class';
    const id = target.id || 'no-id';

    const clickInfo = `Last Click: &lt;${tagName}&gt; #${id} .${className}`;
    panel.innerHTML = panel.innerHTML.replace(/Last Click: .*/, clickInfo);

    console.log(`[UXRadar] Clicked → <${tagName}>.id=${id} .class=${className}`);
  });
})();
