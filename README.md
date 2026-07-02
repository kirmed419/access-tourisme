# Access Tourisme — Site web

Site vitrine de l'agence de voyages **Access Tourisme**. Les visiteurs parcourent
les offres et réservent en remplissant un court formulaire qui ouvre **WhatsApp**
avec leur demande déjà rédigée. Aucun paiement en ligne, aucune base de données :
tout est confirmé par votre équipe sur WhatsApp.

Le site est en **HTML / CSS / JavaScript simple**, sans logiciel à installer et
sans étape de « compilation ». Il fonctionne sur n'importe quel hébergement.

---

## 🚀 Les 3 choses les plus utiles (pour les non-techniciens)

### 1. ⭐ Changer le numéro WhatsApp (le plus important)

Ouvrez **`assets/js/config.js`** et modifiez la ligne `whatsapp` avec votre
numéro :

```js
whatsapp: '213XXXXXXXXX',   // ← remplacez par votre numéro
```

> **Format :** indicatif du pays **sans le `+`**, **sans espaces**, et **sans le `0`** du début.
> Exemple : le numéro `0550 12 34 56` s'écrit **`213550123456`**
> (`213` = Algérie, puis le numéro sans son `0`).

Dans ce même fichier, vous pouvez aussi changer le **téléphone affiché**,
l'**e-mail**, l'**adresse**, les **horaires**, les **réseaux sociaux** et la
position de la **carte**.

---

### 2. ➕ Ajouter ou modifier un voyage

Tout le catalogue se trouve dans **`assets/js/offres-data.js`**.

Pour **ajouter** un voyage : copiez un bloc `{ ... }` existant, collez-le juste
en dessous (gardez bien la **virgule** entre les blocs), puis modifiez les textes :

```js
{
  id: 'mon-voyage',              // identifiant unique, sans espace ni accent
  destination: 'Rome',           // nom affiché sur la carte
  pays: 'Italie',
  categorie: 'Europe',           // Algérie | Omra / Hajj | Europe | Asie | International
  image: 'assets/img/destinations/rome.jpg',
  duree: '5 jours / 4 nuits',
  depart: 'Départs chaque samedi de juin à septembre 2026',
  prix: 195000,                  // en chiffres uniquement (dinars) — prix "à partir de"
  pricing: [                     // détail des tarifs (une seule ligne si un seul prix)
    { label: 'Chambre double (par personne)', prix: 195000 },
    { label: 'Chambre simple (par personne)', prix: 230000 }
  ],
  hotels: [                      // hôtels inclus dans le séjour
    { nom: 'Hôtel Colosseo', ville: 'Rome', etoiles: 4, formule: 'Petit-déjeuner inclus' }
  ],
  voyageurs: 'Séjour individuel',
  resume: 'Une phrase courte pour la carte.',
  description: 'Un paragraphe de présentation.',
  inclus:    ['Vol aller-retour', 'Hôtel 4*', 'Petit-déjeuner'],
  nonInclus: ['Repas non mentionnés', 'Dépenses personnelles'],
  programme: [],                 // laissez [] si pas de programme détaillé
  infos: { visa: '...', aPrevoir: '...' },
  populaire: true                // true = affiché sur la page d'accueil
}
```

Pour **modifier un prix ou un texte** : changez simplement la valeur, puis enregistrez.

#### Ajouter la photo d'un voyage
1. Placez votre image (format `.jpg`) dans le dossier **`assets/img/destinations/`**.
2. Indiquez son chemin dans le champ `image` (ex. `assets/img/destinations/rome.jpg`).
3. Idéalement une image large (1200 px) et légère (moins de 300 Ko) pour un chargement rapide.

---

### 3. ✏️ Modifier les textes des pages

- **Page d'accueil, À propos, Contact** : les textes sont directement dans les
  fichiers `index.html`, `apropos.html`, `contact.html`. Cherchez le texte à
  changer et remplacez-le (ne touchez pas aux balises `<...>`).
- **Coordonnées de l'agence** (téléphone, e-mail, adresse, horaires) : tout est
  centralisé dans **`assets/js/config.js`** — un seul endroit à modifier.

---

## 👀 Voir le site sur votre ordinateur

Le plus simple : **double-cliquez sur `index.html`** pour l'ouvrir dans votre navigateur.

> Pour que **tout** fonctionne parfaitement (la carte des contacts notamment),
> il est préférable de lancer un petit serveur local. Si Python est installé :
>
> ```bash
> # depuis le dossier du site
> python3 -m http.server 8000
> ```
> Puis ouvrez **http://localhost:8000** dans votre navigateur.

---

## 🌐 Mettre le site en ligne

C'est un site « statique » : il suffit de **téléverser tous les fichiers** chez un
hébergeur. Solutions gratuites et simples : **Netlify**, **Vercel**, **GitHub Pages**,
ou l'espace d'hébergement de votre fournisseur (via FTP).
Aucune configuration de serveur ni de base de données n'est nécessaire.

---

## 📁 Structure du projet

```
acess/
├── index.html              Page d'accueil
├── offres.html             Liste des offres (avec filtres)
├── offre.html              Modèle de page d'une offre (utilisé par toutes)
├── reservation.html        Formulaire de réservation → WhatsApp
├── apropos.html            À propos de l'agence
├── contact.html            Contact + carte + formulaire
├── logo.jpeg               Logo fourni (ne pas remplacer sans raison)
├── README.md               Ce fichier
└── assets/
    ├── css/style.css       Toute la mise en forme (couleurs, polices…)
    ├── js/
    │   ├── config.js       ⭐ Numéro WhatsApp + coordonnées de l'agence
    │   ├── offres-data.js  ⭐ Le catalogue des voyages
    │   ├── site.js         Le fonctionnement du site (à ne pas modifier)
    │   └── motion.js       Animations et carrousels (à ne pas modifier)
    └── img/
        ├── site/           Logo, favicon, photo d'accueil, photo « à propos »
        └── destinations/   Les photos des voyages
```

## 🎨 Identité visuelle
- **Or** `#F2A91D` · **Charbon** `#3C4448` · **Crème** `#FAF8F5` (couleurs du logo)
- Polices : **Fraunces** (titres) et **Manrope** (texte) — chargées automatiquement.
- Le favicon et les icônes sont générés à partir du cercle « AT » du logo.
- Le filigrane « carte du monde » des sections sombres est extrait du fond du logo.
- Carrousel du héros et des témoignages : bibliothèque **Swiper** (via CDN).
- Apparitions au défilement : bibliothèque **AOS** (via CDN).

---

> ℹ️ Pour changer le numéro WhatsApp, modifiez la ligne `whatsapp` dans
> `config.js` (voir section 1 ci-dessus).
