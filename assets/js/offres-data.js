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

     id:         identifiant unique en minuscules, sans espace (ex: 'djerba')
     destination:nom court affiché sur la carte (ex: 'Djerba')
     pays:       pays / région
     categorie:  UNE seule parmi : 'Algérie' | 'Omra / Hajj' | 'Europe' |
                 'Asie' | 'International'   (sert pour les filtres)
     image:      chemin de la photo
     duree:      texte libre (ex: '7 jours / 6 nuits')
     depart:     texte libre décrivant les dates de départ
                 (ex: 'Départs du 25 juillet au 3 septembre 2026')
     prix:       PRIX À PARTIR DE, en chiffres uniquement (DZD), ex: 140000
                 (c'est ce prix qui sert aux filtres et à l'affichage carte)
     pricing:    détail des tarifs, liste de { label, prix } (DZD)
                 ex: [{ label: 'Chambre triple', prix: 359000 },
                      { label: 'Chambre double', prix: 369000 }]
                 (mettre une seule ligne si un seul tarif)
     hotels:     liste des hébergements, { nom, ville, etoiles, formule, image }
                 ex: [{ nom: 'Dar Djerba', ville: 'Djerba',
                        etoiles: 4, formule: 'Pension complète' }]
                 "image" est optionnel : tant qu'il n'est pas renseigné, un
                 emplacement réservé (skeleton) s'affiche à la place de la photo.
     voyageurs:  type de séjour (ex: 'Groupe accompagné', 'Séjour individuel')
     resume:     phrase courte (carte de présentation)
     description:paragraphe d'introduction (page de l'offre)
     inclus:     liste de ce qui est compris
     nonInclus:  liste de ce qui n'est pas compris
     programme:  programme jour par jour (optionnel, peut rester vide [])
     infos:      { visa, aPrevoir } — infos pratiques
     populaire:  true pour l'afficher sur la page d'accueil, sinon false
   ========================================================================== */

const OFFRES = [

  /* ----------------------------- TUNISIE ------------------------------ */
  {
    id: 'sousse-bus',
    destination: 'Tunisie — Sousse',
    pays: 'Tunisie',
    categorie: 'International',
    image: 'assets/img/destinations/tunisie.jpg',
    duree: '7 jours / 6 nuits',
    depart: '7 départs du 18 juillet au 1er septembre 2026 — au départ d’Alger et de Sétif (arrêts à Bouira, Bordj Bou Arréridj, Constantine, Skikda, Annaba, El Tarf)',
    prix: 70000,
    pricing: [
      { label: 'Adulte (selon hôtel et date), à partir de', prix: 70000 },
      { label: 'Enfant (âge selon hôtel), à partir de', prix: 45000 },
      { label: 'Chambre individuelle, à partir de', prix: 95000 }
    ],
    hotels: [
      { nom: 'Tree House', ville: 'Sousse', etoiles: 3, formule: 'Demi-pension' },
      { nom: 'Sol Palmeras', ville: 'Sousse', etoiles: 3, formule: 'Tout compris' },
      { nom: 'El Mouradi Club Selima', ville: 'Sousse', etoiles: 3, formule: 'Tout compris' },
      { nom: 'Marabout', ville: 'Sousse', etoiles: 3, formule: 'Tout compris' },
      { nom: 'Hannibal Palace', ville: 'Sousse', etoiles: 4, formule: 'Demi-pension · emplacement premium' },
      { nom: 'Orient Palace', ville: 'Sousse', etoiles: 4, formule: 'Tout compris' },
      { nom: 'El Mouradi Club Kantaoui', ville: 'Port El Kantaoui', etoiles: 4, formule: 'Tout compris' },
      { nom: 'Kanta Resort', ville: 'Sousse', etoiles: 4, formule: 'Demi-pension · emplacement premium' },
      { nom: 'Golf Residence', ville: 'Sousse', etoiles: 4, formule: 'Demi-pension · emplacement premium' },
      { nom: 'El Mouradi Palm Marina', ville: 'Port El Kantaoui', etoiles: 5, formule: 'Tout compris' }
    ],
    voyageurs: 'Voyage organisé en bus',
    resume: 'Sept départs d’été vers Sousse en bus climatisé, avec dix hôtels de 3 à 5 étoiles selon votre budget.',
    description: "Un voyage tout confort en bus moderne et climatisé, accompagné par un représentant de l’agence à l’aller comme au retour. Dix hôtels au choix à Sousse et Port El Kantaoui, du 3 étoiles économique au 5 étoiles tout compris, en demi-pension ou en formule tout compris selon l’établissement. Des sorties gratuites sont organisées pour les familles, les enfants et les groupes d’amis, et de nombreuses excursions optionnelles complètent le séjour. Tarifs adulte de 70 000 à 143 000 DA selon l’hôtel et la date.",
    inclus: [
      'Transport aller-retour en bus moderne et climatisé',
      'Accompagnateur de l’agence pendant tout le trajet',
      '6 nuits d’hébergement selon l’hôtel choisi',
      'Demi-pension ou formule tout compris selon l’hôtel',
      'Excursions gratuites : Mall de Sousse, Bled El Arbi, Marina Yasmine Hammamet'
    ],
    nonInclus: [
      'Excursions en option : croisière en bateau pirate, Carthage Land, jet-ski et parachute ascensionnel, Bizerte (Coco Beach), Sidi Bou Saïd et Tunis',
      'Boissons hors formule',
      'Dépenses personnelles'
    ],
    programme: [],
    infos: {
      visa: 'Aucun visa — carte d’identité ou passeport en cours de validité',
      aPrevoir: 'Un acompte de 10 000 DA suffit pour confirmer la réservation, le solde se règle le jour du départ. Enfant en bas âge sans siège : gratuit ; avec siège : 10 000 DA.'
    },
    populaire: true
  },
  {
    id: 'djerba',
    destination: 'Tunisie — Djerba',
    pays: 'Tunisie',
    categorie: 'International',
    image: 'assets/img/destinations/djerba.jpg',
    duree: '7 jours / 6 nuits',
    depart: '16 départs du 29 juin au 27 septembre 2026 — d’Alger, Bouira, Bordj Bou Arréridj, Sétif et Constantine',
    prix: 64500,
    pricing: [
      { label: 'Chambre triple (par personne), à partir de', prix: 64500 },
      { label: 'Chambre double (par personne), à partir de', prix: 68900 },
      { label: 'Enfant de 2 à 12 ans, à partir de', prix: 42500 }
    ],
    hotels: [
      { nom: 'Dar Djerba', ville: 'Djerba', etoiles: 4, formule: 'Pension complète' }
    ],
    voyageurs: 'Voyage organisé en bus',
    resume: 'L’île de Djerba en pension complète à l’hôtel Dar Djerba 4★, avec transport en autocar touristique.',
    description: "Découvrez l’île de Djerba le temps d’une semaine à l’hôtel Dar Djerba 4★ : pension complète, plage privée, piscines extérieures et couverte, animations quotidiennes pour petits et grands. Le transport se fait en autocar touristique confortable au départ de cinq villes. Les tarifs varient selon la période : en chambre triple, de 64 500 DA (septembre) à 90 900 DA (plein été) par personne. Réduction de 4 000 DA par personne si vous voyagez avec votre propre véhicule.",
    inclus: [
      'Transport aller-retour en autocar touristique',
      '6 nuits à l’hôtel Dar Djerba 4★',
      'Pension complète (petit-déjeuner, déjeuner, dîner)',
      'Accès à la plage privée',
      'Piscines extérieures et piscine couverte, Wi-Fi',
      'Animations quotidiennes, soirées et spectacles',
      'Excursions offertes : Houmt Souk et Midoun'
    ],
    nonInclus: [
      'Taxe de séjour : 3 dinars tunisiens par personne et par nuit, à régler à l’hôtel',
      'Excursions en option : parc des crocodiles, synagogue de la Ghriba, musée de Guellala, bateau pirate vers l’île aux Flamants',
      'Dépenses personnelles'
    ],
    programme: [],
    infos: {
      visa: 'Aucun visa — carte d’identité ou passeport en cours de validité',
      aPrevoir: 'Enfant de moins de 6 ans : gratuit (sans siège). Réduction de 4 000 DA par personne avec votre véhicule personnel.'
    },
    populaire: true
  },

  /* ------------------------------- ASIE ------------------------------- */
  {
    id: 'azerbaidjan',
    destination: 'Bakou & Gabala',
    pays: 'Azerbaïdjan',
    categorie: 'Asie',
    image: 'assets/img/destinations/azerbaidjan.jpg',
    duree: '8 jours / 7 nuits',
    depart: '6 départs du 1er juillet au 22 septembre 2026',
    prix: 217000,
    pricing: [
      { label: 'Prix par personne, à partir de', prix: 217000 }
    ],
    hotels: [
      { nom: 'Parkside Hotel', ville: 'Bakou', etoiles: 4, formule: 'Petit-déjeuner inclus' },
      { nom: 'Karvansaray Spa Hotel', ville: 'Gabala', etoiles: 4, formule: 'Petit-déjeuner inclus' }
    ],
    voyageurs: 'Circuit organisé',
    resume: 'Circuit entre Bakou la futuriste et les montagnes de Gabala, visa électronique et guide francophone inclus.',
    description: "Découvrez la magie de l’Azerbaïdjan, entre modernité, patrimoine historique et paysages naturels à couper le souffle. Cinq nuits à Bakou pour explorer la vieille ville, la Tour de la Vierge et la corniche de la mer Caspienne, puis deux nuits à Gabala au cœur des montagnes du Caucase : Shamakhi et la plus ancienne mosquée du pays (fondée en 743), Sheki et son palais historique, et les cascades de Khal-Khal. Vols Turkish Airlines et visa électronique inclus.",
    inclus: [
      'Vols avec Turkish Airlines',
      'Visa électronique',
      '5 nuits à Bakou au Parkside Hotel 4★ avec petit-déjeuner',
      '2 nuits à Gabala au Karvansaray Spa Hotel 4★ avec petit-déjeuner',
      'Tous les transferts',
      'Guide accompagnateur francophone et arabophone',
      'Visites à Bakou : vieille ville, Tour de la Vierge, Centre culturel Heydar Aliyev, corniche de la Caspienne, bazars traditionnels, Deniz Mall et Genclik Mall',
      'Excursions à Gabala : Shamakhi et sa mosquée de 743, Sheki et son palais, cascades de Khal-Khal'
    ],
    nonInclus: [
      'Déjeuners et dîners',
      'Excursions en option : Yanar Dag (la Montagne de Feu), temple du feu Ateshgah, musée de l’Automobile, Dalga Aqua Park, téléphérique de Tufandag, tyrolienne, VTT, journée Quba & Shahdag',
      'Dépenses personnelles'
    ],
    programme: [
      { jour: 'Jours 1–5', titre: 'Bakou, la capitale', detail: 'Vieille ville, Tour de la Vierge, Centre culturel Heydar Aliyev, promenade sur la corniche de la mer Caspienne, bazars traditionnels, shopping au Deniz Mall et au Genclik Mall, journée détente à la plage.' },
      { jour: 'Jours 6–7', titre: 'Gabala, nature et détente', detail: 'Région de Shamakhi et la plus ancienne mosquée du pays (fondée en 743), Sheki et son palais historique, cascades de Khal-Khal, balade dans la vieille ville de Sheki.' },
      { jour: 'Jour 8', titre: 'Retour', detail: 'Transfert vers l’aéroport de Bakou et vol retour vers Alger.' }
    ],
    infos: {
      visa: 'Visa électronique inclus dans le tarif',
      aPrevoir: 'Chaussures confortables, veste légère pour les soirées en montagne'
    },
    populaire: true
  },
  {
    id: 'malaisie-kl-langkawi',
    destination: 'Kuala Lumpur & Langkawi',
    pays: 'Malaisie',
    categorie: 'Asie',
    image: 'assets/img/destinations/malaisie.jpg',
    duree: '11 jours / 9 nuits',
    depart: '8 départs du 2 au 31 août 2026 (11 à 13 jours selon la date)',
    prix: 366000,
    pricing: [
      { label: 'Chambre triple (par personne)', prix: 366000 },
      { label: 'Chambre double (par personne)', prix: 369000 },
      { label: 'Chambre individuelle', prix: 485000 },
      { label: 'Enfant avec lit', prix: 355000 },
      { label: 'Enfant sans lit', prix: 249000 },
      { label: 'Bébé', prix: 52000 }
    ],
    hotels: [
      { nom: 'Wyndham Suites KLCC', ville: 'Kuala Lumpur', etoiles: 5, formule: 'Petit-déjeuner inclus' },
      { nom: 'The Riyaz Lavanya', ville: 'Langkawi', etoiles: 5, formule: 'Petit-déjeuner inclus (selon le départ)' },
      { nom: 'Pelangi Beach Resort', ville: 'Langkawi', etoiles: 5, formule: 'Petit-déjeuner inclus (selon le départ)' }
    ],
    voyageurs: 'Séjour VIP en hôtels 5★',
    resume: 'La ville futuriste de Kuala Lumpur et les plages paradisiaques de Langkawi, en hôtels 5 étoiles de luxe.',
    description: "Un séjour VIP entre deux visages de la Malaisie : cinq à six nuits à Kuala Lumpur au Wyndham Suites KLCC 5★, au pied des Tours Petronas, puis quatre nuits de détente à Langkawi au Riyaz Lavanya 5★ ou au Pelangi Beach Resort 5★ selon la date. Vol avec Air Algérie (direct) ou Qatar Airways, petit-déjeuner inclus, guide et assistance pendant tout le séjour, avec un riche programme d’excursions incluses.",
    inclus: [
      'Vol international (Air Algérie ou Qatar Airways selon le départ)',
      'Vol intérieur Kuala Lumpur ⇄ Langkawi',
      'Hébergement en hôtels 5★ avec petit-déjeuner',
      'Tous les transferts',
      'Guide et assistance',
      'Excursions à Kuala Lumpur : Bukit Bintang by night, Palais Royal, Masjid Negara, place de l’Indépendance, chocolaterie, temple chinois, Tours Jumelles Petronas, Batu Caves, Putrajaya, Genting Highlands et Chin Swee Temple',
      'Excursion Island Hopping à Langkawi'
    ],
    nonInclus: [
      'Déjeuners et dîners',
      'Entrées des parcs et activités optionnelles',
      'Dépenses personnelles'
    ],
    programme: [
      { jour: 'Jours 1–6', titre: 'Kuala Lumpur', detail: 'Installation au Wyndham Suites KLCC 5★. City tour (Palais Royal, Masjid Negara, place de l’Indépendance, Tours Petronas), Bukit Bintang by night, Batu Caves, Putrajaya, Genting Highlands et Chin Swee Temple.' },
      { jour: 'Jours 7–10', titre: 'Langkawi', detail: 'Vol intérieur vers Langkawi et installation au Riyaz Lavanya 5★ ou au Pelangi Beach Resort 5★. Excursion Island Hopping et détente sur les plus belles plages de Malaisie.' },
      { jour: 'Jour 11', titre: 'Retour', detail: 'Transfert vers l’aéroport et vol retour vers Alger.' }
    ],
    infos: {
      visa: 'Formalités simplifiées — l’agence vous accompagne dans les démarches',
      aPrevoir: 'Vêtements légers, maillot de bain, adaptateur électrique'
    },
    populaire: true
  },

  /* ------------------------------ ÉGYPTE ------------------------------ */
  {
    id: 'sharm-caire',
    destination: 'Sharm El Sheikh & Le Caire',
    pays: 'Égypte',
    categorie: 'International',
    image: 'assets/img/destinations/egypte.jpg',
    duree: '10 jours / 9 nuits',
    depart: '11 départs du 27 juillet au 12 septembre 2026',
    prix: 259900,
    pricing: [
      { label: 'Hollywood Aquapark 4★ (double, juillet)', prix: 259900 },
      { label: 'DoubleTree by Hilton 5★ (double, juillet)', prix: 295000 },
      { label: 'Magic Life Redsina 5★ (double, juillet)', prix: 335000 },
      { label: 'Magic Life Redsina 5★ (family room, juillet)', prix: 360000 }
    ],
    hotels: [
      { nom: 'Hollywood Aquapark', ville: 'Sharm El Sheikh', etoiles: 4, formule: 'Au choix' },
      { nom: 'DoubleTree by Hilton', ville: 'Sharm El Sheikh', etoiles: 5, formule: 'Au choix' },
      { nom: 'Magic Life Redsina', ville: 'Sharm El Sheikh', etoiles: 5, formule: 'Au choix' },
      { nom: 'Pickalbatros Luxury', ville: 'Sharm El Sheikh', etoiles: 5, formule: 'Au choix' },
      { nom: 'Pickalbatros Laguna Vista', ville: 'Sharm El Sheikh', etoiles: 5, formule: 'Au choix' },
      { nom: 'Pickalbatros Royal Moderna', ville: 'Sharm El Sheikh', etoiles: 5, formule: 'Au choix' },
      { nom: 'Hyatt Regency Cairo', ville: 'Le Caire', etoiles: 5, formule: 'Petit-déjeuner inclus' }
    ],
    voyageurs: 'Groupe accompagné',
    resume: 'Les plages de la mer Rouge et les trésors du Caire réunis dans un seul voyage inoubliable.',
    description: "Ce combiné réunit le meilleur des deux Égypte : 7 nuits de détente à Sharm El Sheikh dans l’hôtel 4 ou 5 étoiles de votre choix, puis 2 nuits au Caire à l’Hyatt Regency 5★ pour un programme culturel intense — pyramides de Gizeh, Khan El Khalili avec déjeuner égyptien, soirée en bateau sur le Nil avec dîner et musée national de la civilisation égyptienne. Vols avec EgyptAir. Paiement par banque possible.",
    inclus: [
      'Vols avec EgyptAir',
      '7 nuits à Sharm El Sheikh (hôtel 4★ ou 5★ au choix)',
      '2 nuits au Caire à l’Hyatt Regency Cairo 5★ avec petit-déjeuner',
      'Excursions à Sharm : Soho Square et vieille ville',
      'Visite des pyramides de Gizeh',
      'Découverte de Khan El Khalili avec déjeuner dans un restaurant égyptien',
      'Soirée en bateau sur le Nil avec dîner',
      'Visite du Musée National de la Civilisation Égyptienne (NMEC)'
    ],
    nonInclus: [
      'Visa Égypte',
      'Boissons et dépenses personnelles',
      'Excursions facultatives non listées'
    ],
    programme: [
      { jour: 'Jours 1–7', titre: 'Sharm El Sheikh', detail: 'Détente en bord de mer Rouge dans l’hôtel 4★ ou 5★ choisi. Excursions à Soho Square et dans la vieille ville de Sharm El Sheikh.' },
      { jour: 'Jours 8–9', titre: 'Le Caire', detail: 'Transfert au Caire, installation à l’Hyatt Regency 5★. Visite des pyramides de Gizeh, de Khan El Khalili avec déjeuner égyptien et soirée en bateau sur le Nil avec dîner.' },
      { jour: 'Jour 10', titre: 'Retour', detail: 'Visite du musée NMEC puis transfert vers l’aéroport et vol retour.' }
    ],
    infos: {
      visa: 'Visa requis — démarches assurées par l’agence',
      aPrevoir: 'Tenue légère, chaussures de marche pour les visites du Caire. Paiement par banque possible.'
    },
    populaire: false
  }

];

/* Ne rien modifier en dessous de cette ligne. */
window.OFFRES = OFFRES;
