/* ==========================================================================
   ACCESS TOURISME — CONFIGURATION DE L'AGENCE
   --------------------------------------------------------------------------
   👉 C'EST LE FICHIER LE PLUS IMPORTANT À MODIFIER.
      Vous pouvez changer ici toutes vos informations de contact
      SANS toucher au reste du site.

   ❗ LE NUMÉRO WHATSAPP (le plus important) :
      Remplacez 213XXXXXXXXX par votre vrai numéro, au format international
      SANS le "+", SANS espaces, SANS le "0" du début.

      Exemple : si votre numéro est 0550 12 34 56
                écrivez : '213550123456'
                (213 = indicatif de l'Algérie, puis le numéro sans le 0)
   ========================================================================== */

const SITE_CONFIG = {

  /* --- Numéro WhatsApp qui recevra les réservations --- */
  whatsapp: '213775209443',

  /* --- Coordonnées affichées sur le site --- */
  telephone: '+213 5XX XX XX XX',          // numéro affiché (peut contenir des espaces)
  email: 'contact@accesstourisme.dz',
  adresse: '12, Rue Didouche Mourad, Alger-Centre',
  ville: 'Alger, Algérie',
  horaires: 'Samedi – Jeudi : 9h00 – 18h00  ·  Vendredi : fermé',

  /* --- Réseaux sociaux (mettez '#' pour masquer un lien) --- */
  social: {
    facebook:  'https://facebook.com',
    instagram: 'https://instagram.com',
    tiktok:    'https://tiktok.com'
  },

  /* --- Carte (Contact) : coordonnées du bureau pour la carte OpenStreetMap --- */
  carte: {
    // Coordonnées d'Alger-Centre (modifiez avec celles de votre agence)
    lat: 36.7679,
    lng: 3.0589,
    zoom: 15
  }
};

/* Ne rien modifier en dessous de cette ligne. */
window.SITE_CONFIG = SITE_CONFIG;
