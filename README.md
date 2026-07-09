# Site de Valéa

Site vitrine statique (HTML/CSS/JS) pour le serveur Minecraft **Valéa**.

## Publier sur GitHub Pages

1. Va sur ton dépôt : https://github.com/MrTheLopin/Miencraft-Valea
2. Mets **tous** les fichiers et dossiers de ce dossier (`index.html`, `mods.html`, `style.css`, `mods.js`, `status.js`, `contact.js`, `assets/`, `.github/`, ce `README.md`) à la racine du dépôt.
   - En ligne de commande (voir plus bas) c'est plus simple pour que le dossier `.github` soit bien inclus (l'upload web cache parfois les dossiers commençant par un point).
3. Dans le dépôt, va dans **Settings > Pages**.
4. Sous **Build and deployment > Source**, choisis **Deploy from a branch**.
5. Sous **Branch**, choisis `main` et le dossier `/ (root)`, puis **Save**.
6. Le site sera en ligne à : **https://MrTheLopin.github.io/Miencraft-Valea/**

### Publier en ligne de commande (Windows / Git Bash)
```bash
cd chemin/vers/valea-site
git init
git remote add origin https://github.com/MrTheLopin/Miencraft-Valea.git
git add .
git commit -m "Site Valéa"
git branch -M main
git push -u origin main
```

## ⚙️ Étape indispensable : ajouter le secret Discord

Les 2 GitHub Actions (statut serveur + annonce de mise à jour) ont besoin d'un webhook, mais **sans l'exposer publiquement**. Il faut donc l'ajouter comme secret :

1. Sur ton dépôt GitHub, va dans **Settings > Secrets and variables > Actions**
2. Clique **New repository secret**
3. Nom : `DISCORD_LOGS_WEBHOOK`
4. Valeur : colle l'URL de ton webhook "Logs"
5. **Add secret**

Sans ce secret, les deux Actions ci-dessous ne pourront pas envoyer de message (elles ne planteront pas, mais Discord ne recevra rien).

## Les 4 fonctionnalités ajoutées

### 1. Formulaire de contact/suggestion (bas de la page d'accueil)
Envoie directement un message dans Discord (embed avec pseudo, type de message, contenu).
- Fichier : `contact.js`
- ⚠️ **Important** : l'URL du webhook "Contact" est écrite en clair dans `contact.js`, car un site 100% statique ne peut pas la cacher — n'importe qui inspectant le code source peut la voir et l'utiliser pour spammer ce salon Discord.
  - Un honeypot (champ caché) et un délai minimum de 3s filtrent les bots simples, mais pas un humain déterminé.
  - Si ça arrive : dans Discord, supprime le webhook et recrée-en un nouveau (Paramètres du salon > Intégrations > Webhooks), puis remplace l'URL dans `contact.js` (ligne `CONTACT_WEBHOOK_URL`).
  - C'est pour ça que je t'avais conseillé un salon dédié et séparé du salon "Logs" : en cas de souci, seul ce salon-là est concerné.

### 2. Statut serveur automatique
- Fichier : `.github/workflows/server-status.yml`
- Vérifie le serveur toutes les 10 minutes (via l'API publique mcsrvstat.us) et poste dans le salon "Logs" seulement si le statut **change** (en ligne ↔ hors ligne) — pas de spam à chaque vérification.
- Tu peux le tester manuellement : onglet **Actions** de ton dépôt > **Statut du serveur Valéa** > **Run workflow**.
- Nécessite le secret `DISCORD_LOGS_WEBHOOK` (voir ci-dessus).

### 3. Annonce de mise à jour du site
- Fichier : `.github/workflows/deploy-announce.yml`
- À chaque `git push` sur `main`, poste un message dans "Logs" avec le message du commit.
- Nécessite le même secret `DISCORD_LOGS_WEBHOOK`.

### 4. Compteur de joueurs en direct
- Fichier : `status.js`
- Affiche un badge sous l'image d'accueil ("X/Y joueurs en ligne" ou "Serveur hors ligne"), mis à jour toutes les 60 secondes.
- Utilise l'API publique gratuite `api.mcsrvstat.us`, aucune clé requise.

## Modifier le contenu

- **Texte de présentation** : dans `index.html`, section `<section class="intro">`.
- **Liens Discord / modpack** : dans `index.html`, section `<section class="steps">`.
- **Couleurs** : tout en haut de `style.css`, dans le bloc `:root { ... }`.
- **Catégories de mods** : dans `mods.js`, objets `CATEGORIES` et `MODS`.
