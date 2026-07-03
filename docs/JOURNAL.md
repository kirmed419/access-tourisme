# Journal du projet — Access Tourisme

Historique de tout ce qui a été fait sur le site, du plus récent au plus ancien.
(Le détail technique de chaque changement est aussi dans l'historique Git.)

---

## 03/07/2026 — Nettoyage du code, documentation et retouches visuelles

- **Documentation** : création du dossier `docs/` avec ce journal et
  [ARCHITECTURE.md](ARCHITECTURE.md) (comment le site fonctionne).
- **Code allégé** :
  - Suppression des styles CSS jamais utilisés (`.btn-dark`, `.btn-outline`,
    `.btn-light`, `.trust__grid`, `.offers-grid--two`, `.hidden`, `.mt-2`,
    `.lead`, `.muted`, `.section--tight`).
  - Suppression de 7 icônes SVG inutilisées dans `site.js`
    (calendar, map, clockh, shield, wallet, headset, chat).
- **Performance** : ajout de `decoding="async"` sur les images chargées en
  différé (cartes d'offres, photos d'hôtels) pour un rendu plus fluide.
- **Retouches UI/UX** :
  - Fil d'Ariane de la page offre : séparateur « › » doré + libellé accessible.
  - Ombre portée sur les badges de catégorie (cartes et en-tête d'offre).
  - Léger soulèvement des filtres (chips) au survol.
  - Fond au survol des lignes du programme jour par jour.
  - Barre de réservation mobile : apparition en glissant depuis le bas.

## 03/07/2026 — Photo réelle pour Sousse (`9e30a72`)

- Remplacement de la photo générique de Sousse par une vraie photo de la
  marina de Port El Kantaoui (Tony Hisgett, CC BY 2.0, Wikimedia Commons).
- Image redimensionnée à 1200 px de large (~280 Ko) pour un chargement rapide.
- Crédit ajouté au README.
- Divers ajustements de mise en page (accueil, à propos, offres).

## 03/07/2026 — Photos réelles pour Djerba et l'Azerbaïdjan (`044d841`)

- Djerba : « Houmt Souk » par Philippe Heckel (CC BY 2.0).
- Azerbaïdjan : panorama de Bakou par Çələbi07 (CC BY-SA 4.0).
- Crédits ajoutés au README.

## 03/07/2026 — Catalogue réel (`ef7ab4b`)

- Remplacement des offres fictives par les vraies offres de l'agence
  (à partir des publications Facebook triées) : Sousse, Djerba, Azerbaïdjan,
  Malaisie, Sharm El Sheikh, Sharm & Le Caire.
- Vraies dates de départ, grilles tarifaires et listes d'hôtels.
- Emplacement réservé (skeleton) pour les photos d'offres manquantes.

## 01/07/2026 — Création du site (`5b44a3e`)

- Site statique HTML/CSS/JS, mobile-first, sans compilation ni base de données.
- Réservation via WhatsApp (formulaire → message pré-rempli) vers 213775209443.
- Carrousel héros (Swiper) + animations au défilement (AOS), via CDN.
- Identité visuelle dérivée du logo : or `#F2A91D`, charbon `#3C4448`,
  crème `#FAF8F5` ; polices Fraunces (titres) et Manrope (texte).
- Pages : accueil, offres (avec filtres), détail d'offre, réservation,
  à propos, contact (avec carte OpenStreetMap).
