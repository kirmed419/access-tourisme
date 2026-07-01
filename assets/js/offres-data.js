/* ==========================================================================
   ACCESS TOURISME — CATALOGUE DES OFFRES (VOYAGES)
   --------------------------------------------------------------------------
   👉 POUR AJOUTER UN VOYAGE : copiez un bloc { ... } existant, collez-le,
      puis modifiez les valeurs. Gardez bien la virgule entre chaque bloc.

   👉 POUR MODIFIER UN PRIX / UNE DESTINATION : changez simplement le texte.

   👉 POUR LA PHOTO : placez votre image dans le dossier
      assets/img/destinations/  puis indiquez son chemin dans "image".

   --------------------------------------------------------------------------
   MODÈLE D'UNE OFFRE (signification de chaque champ) :

     id:         identifiant unique en minuscules, sans espace (ex: 'istanbul')
     destination:nom court affiché sur la carte (ex: 'Istanbul')
     pays:       pays / région
     categorie:  UNE seule parmi : 'Algérie' | 'Omra / Hajj' | 'Europe' |
                 'Asie' | 'International'   (sert pour les filtres)
     image:      chemin de la photo
     duree:      texte libre (ex: '7 jours / 6 nuits')
     prix:       PRIX À PARTIR DE, en chiffres uniquement (DZD), ex: 140000
     voyageurs:  type de séjour (ex: 'Groupe accompagné', 'Séjour individuel')
     resume:     phrase courte (carte de présentation)
     description:paragraphe d'introduction (page de l'offre)
     inclus:     liste de ce qui est compris
     nonInclus:  liste de ce qui n'est pas compris
     programme:  programme jour par jour (optionnel, peut rester vide [])
     infos:      { periode, visa, aPrevoir } — infos pratiques
     populaire:  true pour l'afficher sur la page d'accueil, sinon false
   ========================================================================== */

const OFFRES = [

  /* -------------------------- INTERNATIONAL --------------------------- */
  {
    id: 'antalya-istanbul',
    destination: 'Antalya & Istanbul',
    pays: 'Turquie',
    categorie: 'International',
    image: 'assets/img/destinations/antalya.jpg',
    duree: '10 jours / 9 nuits',
    prix: 359000,
    voyageurs: 'Séjour en formule tout compris',
    resume: 'La Méditerranée turque et la magie du Bosphore réunies dans un seul voyage, en formule tout compris.',
    description: "Six nuits de farniente au Selectum Belek Resort 5★ en formule Ultra All Inclusive, pieds dans l'eau, puis trois nuits à la découverte d'Istanbul depuis l'Hôtel Martinez 4★. Le meilleur des deux Turquie : la détente balnéaire d'Antalya et l'effervescence culturelle du Bosphore. Tarif à partir de 359 000 DA par personne en chambre triple (369 000 DA en chambre double).",
    inclus: [
      'Vol international Turkish Airlines Alger ⇄ Antalya',
      'Vol intérieur Turkish Airlines Antalya ⇄ Istanbul',
      '6 nuits au Selectum Belek Resort 5★ en Ultra All Inclusive',
      '3 nuits à l’Hôtel Martinez 4★ à Istanbul, petit-déjeuner inclus',
      'Tous les transferts aéroport / hôtel / aéroport',
      'Excursions à Antalya : vieille ville, chutes de Lara, MarkAntalya',
      'Excursions à Istanbul : Ortaköy, Taksim, Marché Égyptien',
      'Assistance de l’agence durant tout le séjour'
    ],
    nonInclus: [
      'Excursions en option (safari, rafting, croisière en bateau pirate)',
      'Visa (selon nationalité)',
      'Dépenses personnelles'
    ],
    programme: [
      { jour: 'Jours 1–6', titre: 'Farniente à Antalya', detail: 'Installation au Selectum Belek Resort 5★ (Ultra All Inclusive) : plage privée, 4 piscines dont 2 avec toboggans, à 5 minutes du parc Land of Legends. Excursions : vieille ville d’Antalya, chutes de Lara, MarkAntalya.' },
      { jour: 'Jours 7–9', titre: 'Découverte d’Istanbul', detail: 'Vol intérieur vers Istanbul et installation à l’Hôtel Martinez 4★. Visite d’Ortaköy, de la place Taksim et du Marché Égyptien, avec le Bazar aux épices.' },
      { jour: 'Jour 10', titre: 'Retour', detail: 'Transfert vers l’aéroport et vol retour vers Alger.' }
    ],
    infos: {
      periode: 'Départs du 25 juillet au 3 septembre 2026',
      visa: 'Formalités variables selon nationalité — l’agence vous accompagne dans les démarches',
      aPrevoir: 'Maillot de bain, tenue légère, crème solaire'
    },
    populaire: true
  },
  {
    id: 'istanbul',
    destination: 'Istanbul',
    pays: 'Turquie',
    categorie: 'International',
    image: 'assets/img/destinations/istanbul.jpg',
    duree: '8 jours / 7 nuits',
    prix: 155000,
    voyageurs: 'Groupe accompagné',
    resume: 'Plus de 22 excursions incluses pour découvrir Istanbul sous toutes ses coutures, avec une excursion rafting offerte.',
    description: "Séjour à l'Hôtel Martinez 4★, en plein cœur d'Istanbul, avec petit-déjeuner buffet quotidien. Ce programme se distingue par la richesse de ses visites : plus de 22 excursions sont incluses dans le prix, des grands classiques (Mosquée Bleue, Sainte-Sophie, croisière sur le Bosphore) aux quartiers plus secrets comme Balat, jusqu'à une excursion rafting offerte par l'agence à Maşukiye & Sapanca.",
    inclus: [
      'Billet d’avion avec Turkish Airlines',
      '7 nuits à l’Hôtel Martinez 4★ avec petit-déjeuner buffet',
      'Plus de 22 excursions touristiques incluses',
      'Tous les transferts',
      'Guide accompagnateur',
      'Traitement du dossier de visa et rendez-vous visa offerts'
    ],
    nonInclus: [
      'Frais de visa (exemption possible pour les moins de 15 ans et plus de 50 ans)',
      'Entrées de certains sites (Sainte-Sophie, Aquarium Florya)',
      'Dépenses personnelles'
    ],
    programme: [
      { jour: 'Jour 1', titre: 'Arrivée à Istanbul', detail: 'Accueil et installation à l’Hôtel Martinez, au cœur de la ville.' },
      { jour: 'Jours 2–3', titre: 'Sites emblématiques', detail: 'Mosquée Bleue, Sainte-Sophie, quartier de Balat, Tour de Galata et Tour de la Jeune Fille.' },
      { jour: 'Jour 4', titre: 'Îles des Princes', detail: 'Journée complète en bateau privé avec déjeuner inclus.' },
      { jour: 'Jours 5–6', titre: 'Bosphore & shopping', detail: 'Croisière sur le Bosphore, Ortaköy, place Taksim, Marché Égyptien et centres commerciaux.' },
      { jour: 'Jour 7', titre: 'Excursion rafting offerte', detail: 'Journée à Maşukiye & Sapanca avec rafting et déjeuner buffet à volonté.' },
      { jour: 'Jour 8', titre: 'Retour', detail: 'Transfert vers l’aéroport et vol retour vers Alger.' }
    ],
    infos: {
      periode: 'Départs chaque semaine de juillet à octobre 2026',
      visa: 'Dossier et rendez-vous visa pris en charge par l’agence (frais de visa non inclus)',
      aPrevoir: 'Foulard pour les mosquées, chaussures confortables'
    },
    populaire: true
  },
  {
    id: 'sharm-el-sheikh',
    destination: 'Sharm El Sheikh',
    pays: 'Égypte — Mer Rouge',
    categorie: 'International',
    image: 'assets/img/destinations/sharm-el-sheikh.jpg',
    duree: '7, 8 ou 9 nuits au choix',
    prix: 195000,
    voyageurs: 'Séjour en famille',
    resume: 'Vol direct sans démarche de visa vers les eaux turquoise de la mer Rouge, en formule tout compris.',
    description: "Une formule pensée pour des vacances balnéaires sans complications : vol direct avec Air Algérie, aucune démarche de visa et un large choix d'hôtels 4 et 5 étoiles en formule All Inclusive Soft. Idéal en famille pour profiter du soleil, des fonds marins parmi les plus beaux au monde et d'un bord de mer aménagé, sans se soucier de l'organisation.",
    inclus: [
      'Vol direct avec Air Algérie',
      'Aucune démarche de visa',
      'Hébergement en formule All Inclusive Soft',
      'Large choix d’hôtels 4★ et 5★ (Amwaj Oyoun, TUI Magic Life Red Sea, Jaz Mirabel Beach, Pickalbatros Laguna Vista, Pickalbatros Royal Moderna, Steigenberger Alcazar)',
      'Transferts aéroport / hôtel / aéroport',
      'Excursions : Old Market et Soho Square'
    ],
    nonInclus: [
      'Excursions facultatives',
      'Boissons premium (selon hôtel)',
      'Dépenses personnelles'
    ],
    programme: [],
    infos: {
      periode: 'Départs de fin juillet à début septembre 2026',
      visa: 'Aucun visa nécessaire',
      aPrevoir: 'Maillot de bain, masque et tuba, protection solaire'
    },
    populaire: true
  },
  {
    id: 'sharm-caire',
    destination: 'Sharm El Sheikh & Le Caire',
    pays: 'Égypte',
    categorie: 'International',
    image: 'assets/img/destinations/egypte.jpg',
    duree: '10 jours / 9 nuits',
    prix: 259900,
    voyageurs: 'Groupe accompagné',
    resume: 'Les plages de la mer Rouge et les trésors du Caire réunis dans un seul voyage inoubliable.',
    description: "Ce circuit combine le meilleur des deux Égypte : 7 nuits de détente à Sharm El Sheikh dans l'hôtel 4 ou 5 étoiles de votre choix, puis 2 nuits au Caire à l'Hyatt Regency 5★ pour un programme culturel intense — pyramides de Gizeh, Khan El Khalili, dîner-croisière sur le Nil et musée national de la civilisation égyptienne. Vols avec EgyptAir inclus.",
    inclus: [
      'Vols avec EgyptAir',
      '7 nuits à Sharm El Sheikh (hôtel 4★ ou 5★ au choix parmi Hollywood Aquapark, DoubleTree by Hilton, Magic Life Redsina, Pickalbatros)',
      '2 nuits au Caire à l’Hyatt Regency Cairo 5★ avec petit-déjeuner',
      'Visite des pyramides de Gizeh',
      'Découverte de Khan El Khalili avec déjeuner égyptien',
      'Soirée croisière sur le Nil avec dîner',
      'Visite du Musée National de la Civilisation Égyptienne (NMEC)',
      'Excursions à Sharm : Old Market et vieille ville'
    ],
    nonInclus: [
      'Visa Égypte',
      'Boissons et dépenses personnelles',
      'Excursions facultatives non listées'
    ],
    programme: [
      { jour: 'Jours 1–7', titre: 'Sharm El Sheikh', detail: 'Détente en bord de mer Rouge dans l’hôtel 4★ ou 5★ choisi. Excursions au Old Market et dans la vieille ville de Sharm.' },
      { jour: 'Jours 8–9', titre: 'Le Caire', detail: 'Transfert au Caire, installation à l’Hyatt Regency 5★. Visite des pyramides de Gizeh, de Khan El Khalili et croisière-dîner sur le Nil.' },
      { jour: 'Jour 10', titre: 'Retour', detail: 'Visite du musée NMEC puis transfert vers l’aéroport et vol retour.' }
    ],
    infos: {
      periode: 'Départs de juillet à septembre 2026',
      visa: 'Visa requis — démarches assurées par l’agence',
      aPrevoir: 'Tenue légère, chaussures de marche pour les visites du Caire'
    },
    populaire: false
  },
  {
    id: 'tunisie',
    destination: 'Tunisie — Sousse',
    pays: 'Tunisie',
    categorie: 'International',
    image: 'assets/img/destinations/tunisie.jpg',
    duree: '7 jours / 6 nuits',
    prix: 46000,
    voyageurs: 'Voyage organisé en bus',
    resume: 'Direction Sousse en bus climatisé au départ d’Alger ou de Sétif, avec un large choix d’hôtels selon votre budget.',
    description: "Un voyage tout confort en bus climatisé moderne, accompagné par un représentant de l'agence du départ jusqu'au retour. Plus de dix hôtels au choix à Sousse, de 3 à 5 étoiles, en demi-pension ou en formule tout compris, pour un séjour balnéaire adapté à toutes les envies et tous les budgets. Tarifs variables selon l'hôtel et la formule choisie — à partir de 46 000 DA par personne.",
    inclus: [
      'Transport aller-retour en bus climatisé moderne',
      'Accompagnateur de l’agence pendant tout le trajet',
      '6 nuits d’hébergement selon l’hôtel choisi',
      'Demi-pension ou formule tout compris selon l’hôtel',
      'Excursions gratuites : Mall de Sousse, Bled El Arbi, Marina Yasmine Hammamet'
    ],
    nonInclus: [
      'Excursions en option (croisière en bateau pirate, Carthage Land, jet-ski, Sidi Bou Saïd)',
      'Boissons hors formule',
      'Dépenses personnelles'
    ],
    programme: [],
    infos: {
      periode: '9 départs entre le 2 juillet et le 1er septembre 2026, au départ d’Alger et de Sétif (arrêts à Béjaïa, Bordj Bou Arréridj, Constantine, Skikda, Annaba, El Tarf)',
      visa: 'Aucun visa — carte d’identité ou passeport en cours de validité',
      aPrevoir: 'Maillot de bain, tenue légère — un acompte suffit pour réserver, le solde se règle le jour du départ'
    },
    populaire: false
  },

  /* ------------------------------- ASIE ------------------------------- */
  {
    id: 'malaisie-kl-langkawi',
    destination: 'Kuala Lumpur & Langkawi',
    pays: 'Malaisie',
    categorie: 'Asie',
    image: 'assets/img/destinations/malaisie.jpg',
    duree: '11 jours / 9 nuits',
    prix: 366000,
    voyageurs: 'Séjour VIP en hôtels 5★',
    resume: 'La ville futuriste de Kuala Lumpur et les plages paradisiaques de Langkawi, en hôtels 5 étoiles.',
    description: "Un séjour VIP entre deux visages de la Malaisie : cinq à six nuits à Kuala Lumpur au Wyndham Suites KLCC 5★, au pied des Tours Petronas, puis quatre nuits de détente à Langkawi dans un hôtel 5★ en bord de mer. Vol direct avec Air Algérie ou Qatar Airways, petit-déjeuner inclus et guides francophones pour toutes les excursions.",
    inclus: [
      'Billet d’avion international (Air Algérie ou Qatar Airways)',
      'Vol intérieur Kuala Lumpur ⇄ Langkawi',
      'Hébergement en hôtels 5★ avec petit-déjeuner',
      'Tous les transferts',
      'Guides francophones et assistance',
      'City tour de Kuala Lumpur et excursion Island Hopping à Langkawi'
    ],
    nonInclus: [
      'Déjeuners et dîners',
      'Entrées des parcs et activités optionnelles',
      'Dépenses personnelles'
    ],
    programme: [
      { jour: 'Jours 1–5', titre: 'Kuala Lumpur', detail: 'Installation au Wyndham Suites KLCC 5★. City tour (Palais Royal, Mosquée Nationale, Tours Jumelles Petronas), Batu Caves, Putrajaya et Genting Highlands.' },
      { jour: 'Jours 6–9', titre: 'Langkawi', detail: 'Transfert à Langkawi et installation en hôtel 5★ (The Riyaz Lavanya ou Pelangi Beach Resort). Excursion Island Hopping et détente sur les plus belles plages de Malaisie.' },
      { jour: 'Jours 10–11', titre: 'Retour', detail: 'Transfert vers l’aéroport et vol retour vers Alger.' }
    ],
    infos: {
      periode: 'Départs en août 2026',
      visa: 'Formalités simplifiées — l’agence vous accompagne dans les démarches',
      aPrevoir: 'Vêtements légers, maillot de bain, adaptateur électrique'
    },
    populaire: true
  }

];

/* Ne rien modifier en dessous de cette ligne. */
window.OFFRES = OFFRES;
