// Envoie le formulaire de contact/suggestion directement dans un salon Discord
// via un webhook. Aucun serveur requis : l'appel part du navigateur du visiteur.
//
// ⚠️ Cette URL est visible dans le code source du site (c'est le cas pour tout
// site 100% statique). Le honeypot + le délai minimum ci-dessous filtrent les
// bots basiques, mais n'empêchent pas un humain malveillant de spammer le
// salon s'il inspecte le code. Si ça devient un problème, régénère le webhook
// dans Discord (ça invalide l'ancienne URL) et envisage un petit relais côté
// serveur (ex: Cloudflare Worker) pour cacher l'URL.
const CONTACT_WEBHOOK_URL = 'https://discordapp.com/api/webhooks/1524903153659543714/EbfuFQHD7RCQxe28PAB85K_oLymYzqow98s2h8lpnki2fGDVMVpNtRGNbhSNqobHC0Bi';

const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('contact-submit');
const statusEl = document.getElementById('contact-status');

const pageLoadedAt = Date.now();
const TYPE_EMOJI = { Question: '💬', Suggestion: '💡', Bug: '🐛' };

function setStatus(message, isError) {
  if (!statusEl) return;
  statusEl.textContent = message;
  statusEl.className = 'contact-status' + (isError ? ' is-error' : ' is-success');
}

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const honeypot = form.website.value.trim();
    const elapsed = Date.now() - pageLoadedAt;

    // Filtre anti-bot simple : champ caché rempli, ou envoi en moins de 3s
    if (honeypot !== '' || elapsed < 3000) {
      setStatus('Message envoyé ✓', false);
      form.reset();
      return;
    }

    const name = form.name.value.trim();
    const type = form.type.value;
    const message = form.message.value.trim();

    if (!name || !message) return;

    submitBtn.disabled = true;
    setStatus('Envoi en cours…', false);

    const payload = {
      embeds: [{
        title: `${TYPE_EMOJI[type] || '✉️'} ${type} — via le site`,
        description: message.slice(0, 1000),
        color: 15637171, // rose
        fields: [{ name: 'De la part de', value: name, inline: true }],
        timestamp: new Date().toISOString()
      }]
    };

    try {
      const res = await fetch(CONTACT_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Discord a refusé le message');
      setStatus('Merci ! Ton message a bien été envoyé ✓', false);
      form.reset();
    } catch (err) {
      setStatus("Oups, l'envoi a échoué. Réessaie ou passe par le Discord directement.", true);
    } finally {
      submitBtn.disabled = false;
    }
  });
}
