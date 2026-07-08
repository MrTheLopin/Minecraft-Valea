const copyBtn = document.getElementById('copy-btn');
const ipEl = document.getElementById('server-ip');

if (copyBtn && ipEl) {
  copyBtn.addEventListener('click', async () => {
    const ip = ipEl.textContent.trim();
    try {
      await navigator.clipboard.writeText(ip);
    } catch (err) {
      // Fallback for older browsers
      const temp = document.createElement('textarea');
      temp.value = ip;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      document.body.removeChild(temp);
    }
    const original = copyBtn.textContent;
    copyBtn.textContent = 'Copié ✓';
    setTimeout(() => { copyBtn.textContent = original; }, 1800);
  });
}
