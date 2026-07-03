# Architecture du site — Access Tourisme

Comment le site fonctionne, fichier par fichier. Pour les modifications
courantes (numéro WhatsApp, offres, textes), voir plutôt le [README](../README.md).

## Vue d'ensemble

Site **100 % statique** : 6 pages HTML qui partagent une seule feuille de style
et quatre fichiers JavaScript. Aucun serveur, aucune base de données — la seule
« action » du site est d'ouvrir WhatsApp avec un message pré-rempli.

```
Page HTML  ──►  config.js (coordonnées)  ─┐
           ──►  offres-data.js (catalogue) ─┤──►  site.js (rendu)  ──►  WhatsApp
           ──►  motion.js (animations)     ─┘
```

## Les données

| Fichier | Rôle |
|---|---|
| `assets/js/config.js` | Coordonnées de l'agence : numéro WhatsApp, téléphone, e-mail, adresse, horaires, réseaux sociaux, position de la carte. Exposé en global `SITE_CONFIG`. |
| `assets/js/offres-data.js` | Le catalogue : un tableau `OFFRES` d'objets (id, destination, prix, hôtels, programme…). Chaque champ est documenté en tête de fichier. |

Ces deux fichiers sont les **seuls à modifier** pour la vie courante du site.

## Le rendu (`assets/js/site.js`)

Un seul fichier, sans dépendance, organisé en sections :

1. **Icônes** : un dictionnaire `P` de tracés SVG + la fonction `icon(nom)`.
   Seules les icônes réellement utilisées sont conservées.
2. **Utilitaires** : `fmtPrice` (format « 70 000 DA »), `waLink` (lien
   `wa.me` avec message encodé), `esc` (échappement HTML), `param` (lecture
   des paramètres d'URL).
3. **En-tête / pied de page / bouton WhatsApp flottant** : construits en
   JavaScript et injectés dans `#site-header`, `#site-footer` — un seul
   endroit à modifier pour toutes les pages.
4. **Rendu par page** : le `<body data-page="…">` de chaque page déclenche la
   bonne fonction :
   - `home` → offres populaires (`populaire: true`, 6 max) ;
   - `offres` → liste complète + filtres catégorie/budget ;
   - `offre` → page détail, à partir de `?id=…` dans l'URL ;
   - `reservation` → formulaire avec menu des offres (`?offre=…` pré-sélectionne) ;
   - `contact` → coordonnées, carte OpenStreetMap, formulaire.
5. **Envoi WhatsApp** : `sendToWhatsApp(message)` affiche une confirmation
   puis redirige vers `wa.me` après 1,5 s.

## Animations (`assets/js/motion.js`)

Initialise deux bibliothèques CDN : **AOS** (apparitions au défilement) et
**Swiper** (carrousel du héros, page d'accueil seulement). Respecte la
préférence système « réduire les animations ».

## Styles (`assets/css/style.css`)

Un seul fichier, mobile-first, organisé en 20 sections numérotées
(variables, base, layout, boutons, en-tête, héros… jusqu'aux squelettes de
chargement). Les couleurs et rayons sont des variables CSS dans `:root`.

Points notables :

- **Squelettes** (`.skel`, `.img-pending`) : effet de balayage lumineux
  affiché pendant le chargement ou quand une photo n'est pas encore fournie
  (l'attribut `onerror` des images bascule sur le squelette au lieu d'une
  image cassée).
- **Responsive** : bascule du menu en mobile sous 880 px ; grilles 2 puis
  3 colonnes à 768 px / 980 px.
- **Accessibilité** : lien d'évitement, `:focus-visible` doré,
  `aria-current` sur la navigation, `prefers-reduced-motion` respecté.

## Performance

- Scripts en `defer`, polices préconnectées, images en `loading="lazy"` +
  `decoding="async"` (sauf le héros, en `fetchpriority="high"`).
- Photos de destinations : ~1200 px de large, moins de 300 Ko.
- Swiper n'est chargé que sur la page d'accueil (seule page avec carrousel).
