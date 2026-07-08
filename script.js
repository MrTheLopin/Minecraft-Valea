# Site de Valéa

Site vitrine statique (HTML/CSS/JS) pour le serveur Minecraft **Valéa**.

## Publier sur GitHub Pages

1. Va sur ton dépôt : https://github.com/MrTheLopin/Miencraft-Valea
2. Mets tous les fichiers de ce dossier (`index.html`, `style.css`, `script.js`, `assets/hero.png`, ce `README.md`) à la racine du dépôt.
   - Sur github.com : clique **Add file > Upload files**, glisse les fichiers, puis **Commit changes**.
   - Ou en ligne de commande depuis ce dossier :
     ```bash
     git init
     git remote add origin https://github.com/MrTheLopin/Miencraft-Valea.git
     git add .
     git commit -m "Site Valéa"
     git branch -M main
     git push -u origin main
     ```
3. Dans le dépôt, va dans **Settings > Pages**.
4. Sous **Build and deployment > Source**, choisis **Deploy from a branch**.
5. Sous **Branch**, choisis `main` et le dossier `/ (root)`, puis **Save**.
6. Après 1 à 2 minutes, le site sera en ligne à cette adresse :
   **https://MrTheLopin.github.io/Miencraft-Valea/**

## Modifier le contenu

- **Texte de présentation** : dans `index.html`, section `<section class="intro">`.
- **Adresse IP** : dans `index.html`, l'élément `<code id="server-ip">`.
- **Liens Discord / modpack** : dans `index.html`, section `<section class="steps">`.
- **Couleurs** : tout en haut de `style.css`, dans le bloc `:root { ... }`.

## Autres idées de texte de présentation

Trois variantes si tu veux changer le paragraphe d'intro :

1. *Bienvenue sur Valéa, un serveur moddé où le temps ralentit. Ici on construit sans pression, on explore en douceur et on partage de bons moments entre ami·e·s. Pose ton sac, on t'attendait.* (utilisée actuellement)
2. *Valéa, c'est un serveur Minecraft moddé pensé pour souffler. Pas de compétition, pas de stress : juste des builds mignons, une communauté chaleureuse et des événements sans prise de tête.*
3. *Sur Valéa, chaque connexion ressemble à une balade au coin du feu. Un monde moddé à explorer tranquillement, une communauté bienveillante, et l'envie simple de passer un bon moment ensemble.*
