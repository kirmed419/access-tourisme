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
     pricingGroups: tableaux tarifaires détaillés par hôtel / période (optionnel)
     departures: départs détaillés, avec date, statut, hôtel, compagnie ou prix
                 selon l'offre (optionnel)
     hotels:     liste des hébergements, { nom, ville, etoiles, formule, images }
                 ex: [{ nom: 'Dar Djerba', ville: 'Djerba',
                        etoiles: 4, formule: 'Pension complète' }]
                 "images" est une liste optionnelle de photos. Le champ "image"
                 reste accepté pour une seule photo. Sans photo, un emplacement
                 réservé (skeleton) s'affiche à la place de la galerie.
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
    depart: '9 départs du 2 juillet au 1er septembre 2026, dont 7 encore programmés à partir du 18 juillet — départs d’Alger et de Sétif, via Bouira, Bordj Bou Arréridj, Constantine, Skikda, Annaba et El Tarf',
    prix: 70000,
    pricing: [
      { label: 'Adulte — départs 3 à 9, à partir de', prix: 70000 },
      { label: 'Enfant — départs 3 à 9, à partir de', prix: 45000 },
      { label: 'Chambre individuelle — départs 3 à 9, à partir de', prix: 95000 }
    ],
    departures: [
      { date: '2 → 9 juillet 2026', statut: 'Complet' },
      { date: '10 → 17 juillet 2026', statut: 'Complet' },
      { date: '18 → 25 juillet 2026' },
      { date: '26 juillet → 2 août 2026' },
      { date: '1 → 8 août 2026' },
      { date: '7 → 14 août 2026' },
      { date: '13 → 20 août 2026' },
      { date: '19 → 26 août 2026' },
      { date: '25 août → 1er septembre 2026' }
    ],
    pricingGroups: [
      {
        title: 'Tree House Sousse 3★', note: 'Demi-pension · enfant de 6 à 12 ans',
        periods: [
          { label: 'Départ 1', note: '2 → 9 juillet · complet', tarifs: [
            { label: 'Adulte', prix: 46000 }, { label: 'Enfant', prix: 30000 },
            { label: 'Moins de 6 ans sans siège', texte: 'Gratuit' }, { label: 'Moins de 6 ans avec siège', prix: 10000 },
            { label: 'Chambre individuelle', prix: 63000 }
          ] },
          { label: 'Départs 2 à 9', note: 'Demi-pension', tarifs: [
            { label: 'Adulte', prix: 70000 }, { label: 'Enfant', prix: 45000 },
            { label: 'Moins de 6 ans sans siège', texte: 'Gratuit' }, { label: 'Moins de 6 ans avec siège', prix: 10000 },
            { label: 'Chambre individuelle', prix: 95000 }
          ] }
        ]
      },
      {
        title: 'Sol Palmeras Sousse 3★', note: 'Enfant de 6 à 12 ans',
        periods: [
          { label: 'Départs 1 et 2', note: 'Demi-pension · complets', tarifs: [
            { label: 'Adulte', prix: 50000 }, { label: 'Enfant', prix: 30000 },
            { label: 'Moins de 6 ans sans siège', texte: 'Gratuit' }, { label: 'Moins de 6 ans avec siège', prix: 10000 },
            { label: 'Chambre individuelle', prix: 65000 }
          ] },
          { label: 'Départs 3 à 9', note: 'Tout compris', tarifs: [
            { label: 'Adulte', prix: 70000 }, { label: 'Enfant', prix: 45000 },
            { label: 'Moins de 6 ans sans siège', texte: 'Gratuit' }, { label: 'Moins de 6 ans avec siège', prix: 10000 },
            { label: 'Chambre individuelle', prix: 95000 }
          ] }
        ]
      },
      {
        title: 'El Mouradi Club Selima 3★', note: 'Tout compris · enfant de 2 à 12 ans',
        periods: [
          { label: 'Départs 1 et 2', note: 'Complets', tarifs: [
            { label: 'Adulte', prix: 82000 }, { label: 'Enfant', prix: 52000 },
            { label: 'Moins de 2 ans sans siège', texte: 'Gratuit' }, { label: 'Moins de 2 ans avec siège', prix: 10000 },
            { label: 'Chambre individuelle', prix: 125000 }
          ] },
          { label: 'Départs 3 à 9', tarifs: [
            { label: 'Adulte', prix: 92000 }, { label: 'Enfant', prix: 58000 },
            { label: 'Moins de 2 ans sans siège', texte: 'Gratuit' }, { label: 'Moins de 2 ans avec siège', prix: 10000 },
            { label: 'Chambre individuelle', prix: 130000 }
          ] }
        ]
      },
      {
        title: 'Marabout Sousse 3★', note: 'Tout compris · enfant de 6 à 12 ans',
        periods: [
          { label: 'Départs 1 à 9', tarifs: [
            { label: 'Adulte', prix: 115000 }, { label: 'Enfant', prix: 65000 },
            { label: 'Moins de 6 ans sans siège', texte: 'Gratuit' }, { label: 'Chambre individuelle', prix: 140000 }
          ] }
        ]
      },
      {
        title: 'Hannibal Palace Sousse 4★', note: 'Demi-pension · enfant de 3 à 12 ans',
        periods: [
          { label: 'Départs 1 et 2', note: 'Complets', tarifs: [
            { label: 'Adulte', prix: 78000 }, { label: 'Enfant', prix: 43000 },
            { label: 'Moins de 3 ans sans siège', texte: 'Gratuit' }, { label: 'Chambre individuelle', prix: 100000 }
          ] },
          { label: 'Départs 3 à 9', tarifs: [
            { label: 'Adulte', prix: 90000 }, { label: 'Enfant', prix: 50000 },
            { label: 'Moins de 3 ans sans siège', texte: 'Gratuit' }, { label: 'Moins de 3 ans avec siège', prix: 10000 },
            { label: 'Chambre individuelle', prix: 120000 }
          ] }
        ]
      },
      {
        title: 'Orient Palace Sousse 4★', note: 'Enfant de 6 à 12 ans',
        periods: [
          { label: 'Départs 1 et 2', note: 'Demi-pension · complets', tarifs: [
            { label: 'Adulte', prix: 58000 }, { label: 'Enfant', prix: 34000 },
            { label: 'Moins de 6 ans sans siège', texte: 'Gratuit' }, { label: 'Moins de 6 ans avec siège', prix: 10000 },
            { label: 'Chambre individuelle', prix: 80000 }
          ] },
          { label: 'Départs 3 à 9', note: 'Tout compris', tarifs: [
            { label: 'Adulte', prix: 100000 }, { label: 'Enfant', prix: 60000 },
            { label: 'Moins de 6 ans sans siège', texte: 'Gratuit' }, { label: 'Moins de 6 ans avec siège', prix: 10000 },
            { label: 'Chambre individuelle', prix: 120000 }
          ] }
        ]
      },
      {
        title: 'El Mouradi Club Kantaoui 4★', note: 'Tout compris · enfant de 2 à 12 ans',
        periods: [
          { label: 'Départs 1 et 2', note: 'Complets', tarifs: [
            { label: 'Adulte', prix: 97000 }, { label: 'Enfant', prix: 53000 },
            { label: 'Moins de 2 ans sans siège', texte: 'Gratuit' }, { label: 'Moins de 2 ans avec siège', prix: 10000 },
            { label: 'Chambre individuelle', prix: 145000 }
          ] },
          { label: 'Départs 3 à 9', tarifs: [
            { label: 'Adulte', prix: 105000 }, { label: 'Enfant', prix: 58000 },
            { label: 'Moins de 2 ans sans siège', texte: 'Gratuit' }, { label: 'Moins de 2 ans avec siège', prix: 10000 },
            { label: 'Chambre individuelle', prix: 145000 }
          ] }
        ]
      },
      {
        title: 'Kanta Resort Sousse 4★', note: 'Demi-pension · enfant de 4 à 12 ans',
        periods: [
          { label: 'Départ 1', note: 'Complet', tarifs: [
            { label: 'Adulte', prix: 70000 }, { label: 'Enfant', prix: 40000 },
            { label: 'Moins de 4 ans sans siège', texte: 'Gratuit' }, { label: 'Moins de 4 ans avec siège', prix: 10000 },
            { label: 'Chambre individuelle', texte: 'Non disponible' }
          ] },
          { label: 'Départs 2 à 9', tarifs: [
            { label: 'Adulte', prix: 87000 }, { label: 'Enfant', prix: 50000 },
            { label: 'Moins de 4 ans sans siège', texte: 'Gratuit' }, { label: 'Moins de 4 ans avec siège', prix: 10000 },
            { label: 'Chambre individuelle', texte: 'Non disponible' }
          ] }
        ]
      },
      {
        title: 'Golf Residence Sousse 4★', note: 'Demi-pension · enfant de 6 à 12 ans',
        periods: [
          { label: 'Départs 1 à 9', tarifs: [
            { label: 'Adulte', prix: 90000 }, { label: 'Enfant', prix: 50000 },
            { label: 'Moins de 6 ans sans siège', texte: 'Gratuit' }, { label: 'Moins de 6 ans avec siège', prix: 10000 },
            { label: 'Chambre individuelle', texte: 'Non disponible' }
          ] }
        ]
      },
      {
        title: 'El Mouradi Palm Marina 5★', note: 'Tout compris · enfant de 2 à 12 ans',
        periods: [
          { label: 'Départs 1 et 2', note: 'Complets', tarifs: [
            { label: 'Adulte', prix: 118000 }, { label: 'Enfant', prix: 63000 },
            { label: 'Moins de 2 ans sans siège', texte: 'Gratuit' }, { label: 'Moins de 2 ans avec siège', prix: 10000 },
            { label: 'Chambre individuelle', prix: 177990 }
          ] },
          { label: 'Départs 3 à 9', tarifs: [
            { label: 'Adulte', prix: 143000 }, { label: 'Enfant', prix: 73000 },
            { label: 'Moins de 2 ans sans siège', texte: 'Gratuit' }, { label: 'Moins de 2 ans avec siège', prix: 10000 },
            { label: 'Chambre individuelle', prix: 195000 }
          ] }
        ]
      }
    ],
    hotels: [
      { nom: 'Tree House', ville: 'Sousse', etoiles: 3, formule: 'Demi-pension', images: [
        'assets/img/hotels/tree-house-1.jpg', 'assets/img/hotels/tree-house-2.jpg', 'assets/img/hotels/tree-house-3.jpg'
      ] },
      { nom: 'Sol Palmeras', ville: 'Sousse', etoiles: 3, formule: 'Demi-pension (départs 1–2) · Tout compris (3–9)', images: [
        'assets/img/hotels/sol-palmeras-1.jpg', 'assets/img/hotels/sol-palmeras-2.jpg'
      ] },
      { nom: 'El Mouradi Club Selima', ville: 'Sousse', etoiles: 3, formule: 'Tout compris', images: [
        'assets/img/hotels/el-mouradi-club-selima.jpg', 'assets/img/hotels/el-mouradi-club-selima-2.jpg', 'assets/img/hotels/el-mouradi-club-selima-3.jpg'
      ] },
      { nom: 'Marabout', ville: 'Sousse', etoiles: 3, formule: 'Tout compris', images: [
        'assets/img/hotels/marabout.jpg', 'assets/img/hotels/marabout-2.jpg', 'assets/img/hotels/marabout-3.jpg', 'assets/img/hotels/marabout-4.jpg'
      ] },
      { nom: 'Hannibal Palace', ville: 'Sousse', etoiles: 4, formule: 'Demi-pension · emplacement premium', images: [
        'assets/img/hotels/hannibal-palace.jpg'
      ] },
      { nom: 'Orient Palace', ville: 'Sousse', etoiles: 4, formule: 'Demi-pension (départs 1–2) · Tout compris (3–9)', images: [
        'assets/img/hotels/orient-palace.jpg'
      ] },
      { nom: 'El Mouradi Club Kantaoui', ville: 'Port El Kantaoui', etoiles: 4, formule: 'Tout compris', images: [
        'assets/img/hotels/el-mouradi-club-kantaoui-1.jpg', 'assets/img/hotels/el-mouradi-club-kantaoui-2.jpg'
      ] },
      { nom: 'Kanta Resort', ville: 'Sousse', etoiles: 4, formule: 'Demi-pension · emplacement premium', images: [
        'assets/img/hotels/kanta-resort-1.jpg', 'assets/img/hotels/kanta-resort-2.jpg', 'assets/img/hotels/kanta-resort-3.jpg'
      ] },
      { nom: 'Golf Residence', ville: 'Sousse', etoiles: 4, formule: 'Demi-pension · emplacement premium', images: [
        'assets/img/hotels/golf-residence-1.jpg', 'assets/img/hotels/golf-residence-2.jpg'
      ] },
      { nom: 'El Mouradi Palm Marina', ville: 'Port El Kantaoui', etoiles: 5, formule: 'Tout compris', images: [
        'assets/img/hotels/el-mouradi-palm-marina.jpg', 'assets/img/hotels/el-mouradi-palm-marina-2.jpg'
      ] }
    ],
    voyageurs: 'Voyage organisé en bus',
    resume: 'Sept départs d’été encore programmés vers Sousse en bus climatisé, avec dix hôtels de 3 à 5 étoiles selon votre budget.',
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
    depart: '16 départs du 29 juin au 27 septembre 2026 (retour final le 4 octobre) — d’Alger, Bouira, Bordj Bou Arréridj, Sétif et Constantine',
    prix: 64500,
    pricing: [
      { label: 'Chambre triple (par personne), à partir de', prix: 64500 },
      { label: 'Chambre double (par personne), à partir de', prix: 68900 },
      { label: 'Enfant de 2 à 12 ans, à partir de', prix: 42500 }
    ],
    pricingGroups: [
      {
        title: 'Groupe 1', note: '29 juin → 6 juillet · 5 → 12 juillet',
        periods: [{ label: 'Tarifs par personne', tarifs: [
          { label: 'Chambre triple', prix: 73990 }, { label: 'Chambre double', prix: 78500 },
          { label: '1er et 2e enfant (2 à moins de 12 ans)', prix: 47500 },
          { label: 'Moins de 6 ans sans siège', texte: 'Gratuit' }
        ] }]
      },
      {
        title: 'Groupe 2', note: '11 → 18 juillet · 17 → 24 juillet · 23 → 30 juillet',
        periods: [{ label: 'Tarifs par personne', tarifs: [
          { label: 'Chambre triple', prix: 82000 }, { label: 'Chambre double', prix: 88000 }, { label: 'Enfant', prix: 52000 }
        ] }]
      },
      {
        title: 'Groupe 3', note: '29 juillet → 5 août · 4 → 11 août · 10 → 17 août · 16 → 23 août · 22 → 29 août',
        periods: [{ label: 'Tarifs par personne', tarifs: [
          { label: 'Chambre triple', prix: 90900 }, { label: 'Chambre double', prix: 97900 }, { label: 'Enfant', prix: 56990 }
        ] }]
      },
      {
        title: 'Groupe 4', note: '28 août → 4 septembre',
        periods: [{ label: 'Tarifs par personne', tarifs: [
          { label: 'Chambre triple', prix: 82000 }, { label: 'Chambre double', prix: 88000 }, { label: 'Enfant', prix: 52000 }
        ] }]
      },
      {
        title: 'Groupe 5', note: '3 → 10 septembre · 9 → 16 septembre',
        periods: [{ label: 'Tarifs par personne', tarifs: [
          { label: 'Chambre triple', prix: 73600 }, { label: 'Chambre double', prix: 78500 }, { label: 'Enfant', prix: 47500 }
        ] }]
      },
      {
        title: 'Groupe 6', note: '15 → 22 septembre · 21 → 28 septembre · 27 septembre → 4 octobre',
        periods: [{ label: 'Tarifs par personne', tarifs: [
          { label: 'Chambre triple', prix: 64500 }, { label: 'Chambre double', prix: 68900 }, { label: 'Enfant', prix: 42500 }
        ] }]
      }
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
  {
    id: 'sousse-avion-juillet',
    destination: 'Sousse par avion',
    pays: 'Tunisie',
    categorie: 'International',
    image: 'assets/img/destinations/tunisie.jpg',
    duree: '8 jours / 7 nuits',
    depart: 'Départ unique du 14 au 21 juillet 2026',
    prix: 97000,
    pricing: [
      { label: 'Adulte en chambre double, à partir de', prix: 97000 },
      { label: '1er enfant, à partir de', prix: 45000 },
      { label: 'Bébé', prix: 8000 }
    ],
    departures: [
      { date: '14 → 21 juillet 2026', duree: '8 jours / 7 nuits', compagnie: 'Voyage en avion' }
    ],
    pricingGroups: [
      {
        title: 'Houria Palace 4★', note: 'Demi-pension',
        periods: [{ label: 'Tarifs du séjour', tarifs: [
          { label: 'Adulte', prix: 97000 }, { label: '1er enfant de moins de 6 ans', prix: 45000 },
          { label: '2e enfant de 2 à 11,99 ans', prix: 71000 }, { label: 'Bébé', prix: 8000 }
        ] }]
      },
      {
        title: 'Soviva 3★', note: 'All Inclusive Soft',
        periods: [{ label: 'Tarifs du séjour', tarifs: [
          { label: 'Adulte', prix: 104000 }, { label: '1er enfant de moins de 6 ans', prix: 45000 },
          { label: '2e enfant de 2 à 11,99 ans', prix: 74000 }, { label: 'Chambre individuelle', prix: 132000 },
          { label: 'Bébé', prix: 8000 }
        ] }]
      },
      {
        title: 'Golf Residence 4★', note: 'Demi-pension',
        periods: [{ label: 'Tarifs du séjour', tarifs: [
          { label: 'Adulte', prix: 128000 }, { label: '1er enfant de moins de 6 ans', prix: 45000 },
          { label: '2e enfant de 2 à 11,99 ans', prix: 85500 }, { label: 'Chambre individuelle', prix: 186000 },
          { label: 'Bébé', prix: 8000 }
        ] }]
      },
      {
        title: 'Orient Palace 4★', note: 'All Inclusive Soft',
        periods: [{ label: 'Tarifs du séjour', tarifs: [
          { label: 'Adulte', prix: 137000 }, { label: '1er enfant de moins de 6 ans', prix: 45000 },
          { label: '2e enfant de 2 à 11,99 ans', prix: 91000 }, { label: 'Chambre individuelle', prix: 171000 },
          { label: 'Bébé', prix: 8000 }
        ] }]
      },
      {
        title: 'El Mouradi Club Selima 3★', note: 'All Inclusive Soft',
        periods: [{ label: 'Tarifs du séjour', tarifs: [
          { label: 'Adulte', prix: 130000 }, { label: '2e enfant de 2 à 11,99 ans', prix: 88000 },
          { label: 'Chambre individuelle', prix: 177000 }, { label: 'Bébé', prix: 8000 }
        ] }]
      },
      {
        title: 'Kanta 4★', note: 'Demi-pension',
        periods: [{ label: 'Tarifs du séjour', tarifs: [
          { label: 'Adulte', prix: 132000 }, { label: '1er enfant de moins de 4 ans', prix: 45000 },
          { label: '2e enfant de 2 à 11,99 ans', prix: 89000 }, { label: 'Chambre individuelle', prix: 158000 },
          { label: 'Bébé', prix: 8000 }
        ] }]
      },
      {
        title: 'Riviera 4★', note: 'All Inclusive Soft',
        periods: [{ label: 'Tarifs du séjour', tarifs: [
          { label: 'Adulte', prix: 151500 }, { label: 'Enfant de 2 à 11,99 ans', prix: 111000 },
          { label: 'Bébé', prix: 8000 }
        ] }]
      }
    ],
    hotels: [
      { nom: 'Houria Palace', ville: 'Sousse', etoiles: 4, formule: 'Demi-pension' },
      { nom: 'Soviva', ville: 'Sousse', etoiles: 3, formule: 'All Inclusive Soft' },
      { nom: 'Golf Residence', ville: 'Sousse', etoiles: 4, formule: 'Demi-pension', images: [
        'assets/img/hotels/golf-residence-1.jpg', 'assets/img/hotels/golf-residence-2.jpg'
      ] },
      { nom: 'Orient Palace', ville: 'Sousse', etoiles: 4, formule: 'All Inclusive Soft', images: [
        'assets/img/hotels/orient-palace.jpg'
      ] },
      { nom: 'El Mouradi Club Selima', ville: 'Sousse', etoiles: 3, formule: 'All Inclusive Soft', images: [
        'assets/img/hotels/el-mouradi-club-selima.jpg', 'assets/img/hotels/el-mouradi-club-selima-2.jpg', 'assets/img/hotels/el-mouradi-club-selima-3.jpg'
      ] },
      { nom: 'Kanta', ville: 'Sousse', etoiles: 4, formule: 'Demi-pension', images: [
        'assets/img/hotels/kanta-resort-1.jpg', 'assets/img/hotels/kanta-resort-2.jpg', 'assets/img/hotels/kanta-resort-3.jpg'
      ] },
      { nom: 'Riviera', ville: 'Sousse', etoiles: 4, formule: 'All Inclusive Soft' }
    ],
    voyageurs: 'Séjour en avion',
    resume: 'Une semaine à Sousse par avion avec sept hôtels de 3 à 4 étoiles et des tarifs détaillés par hôtel.',
    description: 'Un départ spécial vers Sousse en avion, avec sept nuits dans l’hôtel de votre choix. Les tarifs publiés varient selon l’établissement, la formule de pension, l’âge des enfants et le type de chambre.',
    inclus: [
      'Billet d’avion aller-retour',
      'Bagages inclus',
      '7 nuits d’hébergement',
      'Pension selon l’hôtel choisi',
      'Transfert aéroport–hôtel',
      'Assistance durant tout le séjour'
    ],
    nonInclus: ['Prestations non mentionnées dans la rubrique « inclus »'],
    programme: [],
    infos: {
      visa: 'Aucun visa — carte d’identité ou passeport en cours de validité',
      aPrevoir: 'Départ très proche et places limitées : confirmer immédiatement les disponibilités avec l’agence.'
    },
    populaire: false
  },
  {
    id: 'sousse-riadh-palms',
    destination: 'Sousse — Riadh Palms',
    pays: 'Tunisie',
    categorie: 'International',
    image: 'assets/img/destinations/tunisie.jpg',
    duree: '7 jours / 6 nuits',
    depart: 'Séjour du 25 au 31 juillet 2026',
    prix: 89990,
    pricing: [
      { label: 'Par personne en chambre double', prix: 89990 },
      { label: 'Deux personnes en chambre double', prix: 179990 }
    ],
    departures: [{ date: '25 → 31 juillet 2026', duree: '7 jours / 6 nuits', statut: 'Offre limitée' }],
    pricingGroups: [{
      title: 'Riadh Palms Resort & Spa 4★', note: 'All Inclusive Soft · transport non inclus',
      periods: [{ label: 'Chambre double', tarifs: [
        { label: 'Par personne', prix: 89990 }, { label: 'Deux personnes', prix: 179990 }
      ] }]
    }],
    hotels: [{ nom: 'Riadh Palms Resort & Spa', ville: 'Sousse', etoiles: 4, formule: 'All Inclusive Soft', images: [
      'assets/img/hotels/riadh-palms-instagram.jpg'
    ] }],
    voyageurs: 'Séjour sans transport',
    resume: 'Offre limitée au Riadh Palms 4★ de Sousse, en All Inclusive Soft, du 25 au 31 juillet.',
    description: 'Une offre hôtelière limitée au Riadh Palms Resort & Spa 4★ à Sousse, en formule All Inclusive Soft. Le prix publié est calculé par personne en chambre double et le transport n’est pas compris.',
    inclus: ['6 nuits au Riadh Palms Resort & Spa 4★', 'Formule All Inclusive Soft'],
    nonInclus: ['Transport aller-retour', 'Dépenses personnelles'],
    programme: [],
    infos: {
      visa: 'Aucun visa — carte d’identité ou passeport en cours de validité',
      aPrevoir: 'Offre limitée. Tarif valable par personne en chambre double, sous réserve de disponibilité.'
    },
    populaire: false
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
    depart: '8 départs du 2 au 31 août 2026, avec retours du 13 août au 11 septembre (11 à 13 jours selon la date)',
    prix: 366000,
    pricing: [
      { label: 'Chambre triple (par personne)', prix: 366000 },
      { label: 'Chambre double (par personne)', prix: 369000 },
      { label: 'Chambre individuelle', prix: 485000 },
      { label: 'Enfant avec lit', prix: 355000 },
      { label: 'Enfant sans lit', prix: 249000 },
      { label: 'Bébé', prix: 52000 }
    ],
    departures: [
      { date: '2 → 13 août 2026', duree: '12 jours / 10 nuits', hotel: 'The Riyaz Lavanya 5★', compagnie: 'Air Algérie · vol direct', prix: 375000 },
      { date: '7 → 17 août 2026', duree: '11 jours / 9 nuits', hotel: 'Pelangi Beach Resort 5★', compagnie: 'Air Algérie', prix: 369000 },
      { date: '12 → 22 août 2026', duree: '11 jours / 9 nuits', hotel: 'Pelangi Beach Resort 5★', compagnie: 'Air Algérie', prix: 369000 },
      { date: '18 → 28 août 2026', duree: '11 jours / 9 nuits', hotel: 'The Riyaz Lavanya 5★', compagnie: 'Qatar Airways', prix: 369000 },
      { date: '21 → 31 août 2026', duree: '11 jours / 9 nuits', hotel: 'Pelangi Beach Resort 5★', compagnie: 'Air Algérie', prix: 369000 },
      { date: '21 → 31 août 2026', duree: '11 jours / 9 nuits', hotel: 'The Riyaz Lavanya 5★', compagnie: 'Qatar Airways', prix: 369000 },
      { date: '26 août → 7 septembre 2026', duree: '13 jours / 11 nuits', hotel: 'The Riyaz Lavanya 5★', compagnie: 'Air Algérie', prix: 379000 },
      { date: '31 août → 11 septembre 2026', duree: '11 jours / 9 nuits', hotel: 'The Riyaz Lavanya 5★', compagnie: 'Qatar Airways', prix: 369000 }
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

  {
    id: 'kuala-lumpur-phu-quoc',
    destination: 'Kuala Lumpur & Phu Quoc',
    pays: 'Malaisie & Vietnam',
    categorie: 'Asie',
    image: 'assets/img/destinations/phu-quoc.jpg',
    duree: '12 jours / 11 nuits',
    depart: 'Deux départs : 26 juillet et 27 août 2026',
    prix: 429000,
    pricing: [{ label: 'Prix par personne, à partir de', prix: 429000 }],
    departures: [
      { date: '26 juillet → 6 août 2026', duree: '12 jours / 11 nuits', compagnie: 'Qatar Airways', prix: 429000 },
      { date: '27 août → 7 septembre 2026', duree: '12 jours / 11 nuits', compagnie: 'Qatar Airways', prix: 429000 }
    ],
    pricingGroups: [{
      title: 'Forfait Kuala Lumpur & Phu Quoc', note: 'Hôtels 5★ · Qatar Airways',
      periods: [{ label: 'Tarif publié', tarifs: [{ label: 'Prix par personne, à partir de', prix: 429000 }] }]
    }],
    hotels: [{ nom: 'Sélection Access Tourisme', ville: 'Kuala Lumpur & Phu Quoc', etoiles: 5, formule: 'Selon le programme' }],
    voyageurs: 'Circuit accompagné',
    resume: 'Un combiné entre Kuala Lumpur et les plages de Phu Quoc, en hôtels 5★ avec Qatar Airways.',
    description: 'Un voyage entre la modernité de Kuala Lumpur et les plages paradisiaques de Phu Quoc. Deux départs sont publiés, avec vols Qatar Airways, hébergement en hôtels 5 étoiles, transferts, excursions organisées et accompagnement professionnel.',
    inclus: [
      'Vol aller-retour avec Qatar Airways',
      'Hébergement en hôtels 5★',
      'Transferts',
      'Excursions organisées',
      'Guide accompagnateur professionnel'
    ],
    nonInclus: ['Prestations non mentionnées dans l’offre publiée'],
    programme: [
      { jour: 'Première étape', titre: 'Kuala Lumpur', detail: 'Découverte de la capitale malaisienne et programme d’excursions organisé.' },
      { jour: 'Deuxième étape', titre: 'Phu Quoc', detail: 'Séjour balnéaire sur l’île vietnamienne de Phu Quoc.' }
    ],
    infos: {
      visa: 'Formalités selon le profil du voyageur — confirmer les documents requis avec l’agence',
      aPrevoir: 'Places limitées. L’ordre des étapes et le nom des hôtels sont à confirmer lors de la réservation.'
    },
    populaire: false
  },

  /* ------------------------------ EUROPE ------------------------------ */
  {
    id: 'istanbul-ete-2026',
    destination: 'Istanbul — Été 2026',
    pays: 'Turquie',
    categorie: 'Europe',
    image: 'assets/img/destinations/istanbul.jpg',
    duree: '8 jours / 7 nuits',
    depart: '14 départs du 23 juillet au 28 septembre 2026, avec retours jusqu’au 5 octobre',
    prix: 155000,
    pricing: [
      { label: 'Adulte — juillet', prix: 155000 },
      { label: 'Adulte — août et septembre', prix: 159000 },
      { label: 'Chambre individuelle', prix: 205000 },
      { label: 'Enfant de moins de 2 ans', prix: 25000 },
      { label: 'Enfant de 2 à 5 ans', prix: 85000 },
      { label: 'Enfant de 6 à 12 ans', prix: 125000 }
    ],
    departures: [
      { date: '23 → 30 juillet 2026', compagnie: 'Turkish Airlines', prix: 155000 },
      { date: '30 juillet → 6 août 2026', compagnie: 'Turkish Airlines', prix: 155000 },
      { date: '4 → 11 août 2026', compagnie: 'Turkish Airlines', prix: 159000 },
      { date: '11 → 18 août 2026', compagnie: 'Turkish Airlines', prix: 159000 },
      { date: '18 → 25 août 2026', compagnie: 'Turkish Airlines', prix: 159000 },
      { date: '25 août → 1er septembre 2026', compagnie: 'Turkish Airlines', prix: 159000 },
      { date: '30 août → 6 septembre 2026', compagnie: 'Turkish Airlines', prix: 159000 },
      { date: '7 → 14 septembre 2026', compagnie: 'Turkish Airlines', prix: 159000 },
      { date: '8 → 15 septembre 2026', compagnie: 'Turkish Airlines', prix: 159000 },
      { date: '14 → 21 septembre 2026', compagnie: 'Turkish Airlines', prix: 159000 },
      { date: '20 → 27 septembre 2026', compagnie: 'Turkish Airlines', prix: 159000 },
      { date: '21 → 28 septembre 2026', compagnie: 'Turkish Airlines', prix: 159000 },
      { date: '22 → 29 septembre 2026', compagnie: 'Turkish Airlines', prix: 159000 },
      { date: '28 septembre → 5 octobre 2026', compagnie: 'Turkish Airlines', prix: 159000 }
    ],
    pricingGroups: [{
      title: 'Hotel Martinez Istanbul 4★', note: 'Centre-ville · petit-déjeuner buffet inclus',
      periods: [
        { label: 'Tarif adulte par période', tarifs: [
          { label: 'Départs de juillet', prix: 155000 },
          { label: 'Départs d’août', prix: 159000 },
          { label: 'Départs de septembre', prix: 159000 }
        ] },
        { label: 'Autres tarifs', tarifs: [
          { label: 'Chambre individuelle', prix: 205000 },
          { label: 'Enfant de moins de 2 ans', prix: 25000 },
          { label: 'Enfant de 2 à 5 ans', prix: 85000 },
          { label: 'Enfant de 6 à 12 ans', prix: 125000 }
        ] }
      ]
    }],
    hotels: [{ nom: 'Hotel Martinez Istanbul', ville: 'Istanbul centre', etoiles: 4, formule: 'Petit-déjeuner buffet inclus' }],
    voyageurs: 'Voyage organisé',
    resume: 'Istanbul en 8 jours avec Turkish Airlines, hôtel 4★ au centre et plus de 21 excursions incluses.',
    description: 'L’un des programmes phares de l’été 2026 à Istanbul : sept nuits à l’Hotel Martinez 4★ au centre-ville, vols Turkish Airlines et un programme de plus de 21 excursions. L’agence offre également Maşukiye, Sapanca et une expérience rafting avec petit-déjeuner buffet.',
    inclus: [
      'Billet d’avion aller-retour avec Turkish Airlines',
      'Plus de 21 excursions touristiques',
      '7 nuits à l’Hotel Martinez Istanbul 4★',
      'Petit-déjeuner buffet',
      'Transferts aéroport–hôtel–aéroport',
      'Guides accompagnateurs arabophones',
      'Traitement du dossier de visa offert',
      'Rendez-vous de visa offert',
      'Excursion Maşukiye & Sapanca, rafting et petit-déjeuner buffet offerts'
    ],
    nonInclus: ['Frais de visa', 'Dépenses personnelles'],
    programme: [],
    infos: {
      visa: 'Traitement du dossier et rendez-vous offerts ; frais de visa non inclus',
      aPrevoir: 'Passeport valide et documents demandés pour le dossier de visa.'
    },
    populaire: true
  },

  /* ---------------------------- ZANZIBAR ----------------------------- */
  {
    id: 'zanzibar-ete-2026',
    destination: 'Zanzibar — Été 2026',
    pays: 'Tanzanie',
    categorie: 'International',
    image: 'assets/img/destinations/zanzibar.jpg',
    duree: '11 jours / 10 nuits',
    depart: 'Départ le 20 août 2026 au départ d’Alger',
    prix: 415000,
    pricing: [{ label: 'Par personne en chambre double, à partir de', prix: 415000 }],
    departures: [{ date: '20 août 2026', duree: '11 jours / 10 nuits', compagnie: 'Qatar Airways · départ d’Alger', prix: 415000 }],
    pricingGroups: [{
      hotelIndex: 0,
      title: 'Forfait Zanzibar', note: 'Demi-pension · chambre double',
      periods: [{ label: 'Tarif publié', tarifs: [{ label: 'Par personne en chambre double, à partir de', prix: 415000 }] }]
    }],
    hotels: [
      { nom: 'Hôtels sélectionnés par l’agence', ville: 'Zanzibar', formule: 'Demi-pension' },
      { nom: 'Hôtel STPC', ville: 'Doha', formule: '1 nuit offerte' }
    ],
    voyageurs: 'Circuit accompagné',
    resume: 'Onze jours à Zanzibar avec Qatar Airways, demi-pension, excursions, assurance et une nuit à Doha offerte.',
    description: 'Un voyage d’exception à Zanzibar avec vols Qatar Airways au départ d’Alger, dix nuits, demi-pension, transferts terrestres et maritimes, excursions et assurance voyage. Une nuit d’hôtel à Doha dans le cadre du STPC est offerte.',
    inclus: [
      'Vols Qatar Airways au départ d’Alger',
      '10 nuits dans des hôtels sélectionnés',
      'Demi-pension',
      'Transferts terrestres et maritimes',
      'Excursions à Stone Town, Nakupenda Island, Mnemba Island, Metende Island et Salam Cave',
      'Assurance voyage',
      '1 nuit d’hôtel à Doha (STPC) offerte'
    ],
    nonInclus: ['Dépenses personnelles', 'Prestations non mentionnées dans l’offre publiée'],
    programme: [
      { jour: 'Pendant le séjour', titre: 'Zanzibar et ses îles', detail: 'Découverte de Stone Town et excursions vers Nakupenda Island, Mnemba Island, Metende Island et Salam Cave.' },
      { jour: 'Escale', titre: 'Doha', detail: 'Une nuit d’hôtel STPC offerte selon les conditions du programme aérien.' }
    ],
    infos: {
      visa: 'Formalités à confirmer avec l’agence avant la réservation',
      aPrevoir: 'Places limitées. Tarif à partir de, calculé par personne en chambre double.'
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
    pricingGroups: [
      {
        hotel: 'Hollywood Aquapark', title: 'Hollywood Aquapark 4★', note: 'Tarifs de juillet',
        periods: [{ label: 'Chambre double', tarifs: [{ label: 'Par personne', prix: 259900 }] }]
      },
      {
        hotel: 'DoubleTree by Hilton', title: 'DoubleTree by Hilton 5★', note: 'Tarifs de juillet',
        periods: [{ label: 'Chambre double', tarifs: [{ label: 'Par personne', prix: 295000 }] }]
      },
      {
        hotel: 'Magic Life Redsina', title: 'Magic Life Redsina 5★', note: 'Tarifs de juillet',
        periods: [{ label: 'Types de chambre', tarifs: [
          { label: 'Chambre double', prix: 335000 }, { label: 'Family Room', prix: 360000 }
        ] }]
      }
    ],
    departures: [
      { date: '27 juillet → 5 août 2026' },
      { date: '29 juillet → 7 août 2026' },
      { date: '30 juillet → 8 août 2026' },
      { date: '9 → 18 août 2026' },
      { date: '12 → 21 août 2026' },
      { date: '19 → 28 août 2026' },
      { date: '24 août → 2 septembre 2026' },
      { date: '27 août → 5 septembre 2026' },
      { date: '5 → 14 septembre 2026' },
      { date: '7 → 16 septembre 2026' },
      { date: '12 → 21 septembre 2026' }
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
