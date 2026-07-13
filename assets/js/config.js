/* ==========================================================================
   ACCESS TOURISME — CONFIGURATION DE L'AGENCE
   --------------------------------------------------------------------------
   👉 C'EST LE FICHIER LE PLUS IMPORTANT À MODIFIER.
      Vous pouvez changer ici toutes vos informations de contact
      SANS toucher au reste du site.

   ❗ LE NUMÉRO WHATSAPP PRINCIPAL :
      Il est au format international, SANS le "+", SANS espaces,
      SANS le "0" du début.

      Exemple : si votre numéro est 0550 12 34 56
                écrivez : '213550123456'
                (213 = indicatif de l'Algérie, puis le numéro sans le 0)
   ========================================================================== */

const SITE_CONFIG = {

  /* --- Numéro WhatsApp qui recevra les réservations --- */
  whatsapp: '213561632626',

  /* --- Coordonnées principales (compatibilité + formulaires) --- */
  telephone: '0561 63 26 26',
  email: 'contact@accesstourisme.dz',
  adresse: 'En face du ministère de la Solidarité, Birkhadem',
  ville: 'Alger, Algérie',
  horaires: 'Samedi – Jeudi : 9h00 – 18h00  ·  Vendredi : fermé',

  /* --- Nos deux agences et leurs lignes directes / WhatsApp --- */
  agences: [
    {
      nom: 'Agence d’Alger',
      adresse: 'En face du ministère de la Solidarité, Birkhadem',
      ville: 'Alger',
      telephones: [
        { affiche: '0561 63 27 27', international: '213561632727' },
        { affiche: '0561 63 28 28', international: '213561632828' }
      ]
    },
    {
      nom: 'Agence de Sétif',
      adresse: 'Les Immeubles des Italiens',
      ville: 'Sétif',
      telephones: [
        { affiche: '0561 63 24 24', international: '213561632424' },
        { affiche: '0561 63 25 25', international: '213561632525' }
      ]
    }
  ],

  /* --- Réseaux sociaux (mettez '#' pour masquer un lien) --- */
  social: {
    facebook:  'https://www.facebook.com/profile.php?id=100010098932574',
    instagram: '#',
    tiktok:    '#'
  },

  /* --- Carte (Contact) : coordonnées du bureau pour la carte OpenStreetMap --- */
  carte: {
    // Coordonnées de Birkhadem (modifiez avec celles exactes de votre agence)
    lat: 36.7139,
    lng: 3.0553,
    zoom: 15
  }
};

/* Ne rien modifier en dessous de cette ligne. */
window.SITE_CONFIG = SITE_CONFIG;
