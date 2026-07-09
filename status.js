// Affiche le statut du serveur (en ligne / hors ligne + joueurs connectés)
// en interrogeant une API publique de statut Minecraft (aucune clé requise).

const SERVER_ADDRESS = 'KimoMinecraft.kinetichosting.gg';
const STATUS_API = `https://api.mcsrvstat.us/3/${SERVER_ADDRESS}`;

const dotEl = document.getElementById('status-dot');
const textEl = document.getElementById('status-text');
const badgeEl = document.getElementById('status-badge');

async function loadServerStatus() {
  if (!dotEl || !textEl) return;
  try {
    const res = await fetch(STATUS_API);
    if (!res.ok) throw new Error('Réponse API invalide');
    const data = await res.json();

    if (data.online) {
      const online = data.players?.online ?? 0;
      const max = data.players?.max ?? '?';
      dotEl.className = 'status-dot online';
      textEl.textContent = `${online}/${max} joueurs en ligne`;
      badgeEl.classList.remove('offline');
      badgeEl.classList.add('online');
    } else {
      dotEl.className = 'status-dot offline';
      textEl.textContent = 'Serveur hors ligne';
      badgeEl.classList.remove('online');
      badgeEl.classList.add('offline');
    }
  } catch (err) {
    dotEl.className = 'status-dot unknown';
    textEl.textContent = 'Statut indisponible pour le moment';
  }
}

loadServerStatus();
// Rafraîchit toutes les 60 secondes
setInterval(loadServerStatus, 60000);
