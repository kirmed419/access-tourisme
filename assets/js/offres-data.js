/* ==========================================================================
   ACCESS TOURISME — CATALOGUE DES OFFRES (VOYAGES)
   ========================================================================== */

const OFFRES = [

  /* ---------------------- TRABZON & ISTANBUL ---------------------- */
  {
    id: 'trabzon-istanbul-novembre-2026',
    destination: 'Trabzon & Istanbul',
    pays: 'Turquie',
    categorie: 'Europe',
    image: 'assets/img/destinations/trabzon.jpg',
    duree: '8 jours / 7 nuits',
    depart: 'Novembre 2026 — 8 jours / 7 nuits (4 nuits Istanbul + 3 nuits Trabzon)',
    prix: 175000,
    pricing: [
      { label: 'Tarif par personne (à partir de)', prix: 175000 }
    ],
    departures: [
      { date: 'Novembre 2026', duree: '8 jours / 7 nuits', compagnie: 'Turkish Airlines', prix: 175000 }
    ],
    hotels: [
      {
        nom: 'Hôtel Martinenz',
        ville: 'Istanbul centre-ville',
        etoiles: 4,
        formule: '4 nuits · Petit-déjeuner inclus',
        images: ['assets/img/hotels/martinenz-istanbul-1.jpg']
      },
      {
        nom: 'Best Western Plus',
        ville: 'Trabzon',
        etoiles: 4,
        formule: '3 nuits · Petit-déjeuner inclus',
        images: []
      }
    ],
    voyageurs: 'Circuit combiné ville & nature',
    resume: 'Un combiné de rêve entre le charme et l’élégance d’Istanbul et les paysages naturels grandioses de Trabzon.',
    description: "Partez à la découverte de deux magnifiques destinations turques : l’effervescence culturelle et historique d’Istanbul combinée à la beauté verdoyante de Trabzon, entre mer Noire et montagnes. 4 nuits à Istanbul à l’Hôtel Martinenz 4★ au centre-ville et 3 nuits à Trabzon au Best Western Plus 4★ avec petits-déjeuners inclus, vols Turkish Airlines, transferts et un programme riche en excursions inoubliables.",
    inclus: [
      'Billet d’avion aller-retour avec Turkish Airlines',
      'Hébergement en hôtels 4 étoiles (4 nuits Istanbul + 3 nuits Trabzon)',
      'Petits-déjeuners inclus durant tout le séjour',
      'Guide touristique accompagnateur',
      'Tous les transferts et déplacements prévus au programme',
      'Istanbul : Croisière aux îles des Princes avec déjeuner',
      'Istanbul : Découverte de l’aquarium d’Istanbul',
      'Istanbul : Shopping en centre commercial, balade à Ortaköy face au Bosphore, tour de Galata et place Taksim',
      'Trabzon : Panorama exceptionnel depuis Boztepe et marchés historiques',
      'Trabzon : Visite d’une fabrique de thé et d’une fabrique de couteaux',
      'Trabzon : Évasion au célèbre lac d’Uzungöl',
      'Trabzon : Excursion dans les hauteurs d’Ayder, découverte de Rize, cascades, rivière et pont historique'
    ],
    nonInclus: [
      'Frais de visa',
      'Déjeuners et dîners non mentionnés',
      'Dépenses personnelles et pourboires'
    ],
    programme: [
      {
        jour: 'Istanbul (4 nuits)',
        titre: 'Entre Culture, Histoire et Élégance',
        detail: 'Installation à l’Hôtel Martinenz 4★ au centre-ville. Au programme : croisière complète aux îles des Princes avec déjeuner, découverte de l’aquarium d’Istanbul, shopping dans les plus beaux centres commerciaux, balade à Ortaköy sur les rives du Bosphore, exploration du quartier historique de la tour de Galata et découverte de la place Taksim.'
      },
      {
        jour: 'Trabzon (3 nuits)',
        titre: 'Au Cœur de la Nature Verdoyante',
        detail: 'Séjour au Best Western Plus 4★ à Trabzon. Panorama exceptionnel sur la mer Noire depuis Boztepe, découverte des marchés et quartiers traditionnels, visite d’une fabrique de thé et d’une fabrique artisanale de couteaux, journée d’évasion au mythique lac d’Uzungöl, excursion dans les hauteurs majestueuses d’Ayder et découverte de Rize avec ses cascades, sa rivière et son pont historique en pierre.'
      }
    ],
    infos: {
      visa: 'Conditions de visa selon réglementation en vigueur. Renseignements et assistance auprès de l’agence.',
      aPrevoir: 'Passeport valide au moins 6 mois. Prix à partir de 175 000 DA, disponibilités et dates exactes à confirmer auprès de l’agence.'
    },
    populaire: true
  },

  /* ----------------------------- ISTANBUL ----------------------------- */
  {
    id: 'istanbul-novembre-2026',
    destination: 'Istanbul — Séjour & Excursions',
    pays: 'Turquie',
    categorie: 'Europe',
    image: 'assets/img/destinations/istanbul.jpg',
    duree: '8 jours / 7 nuits',
    depart: '4 départs programmés en novembre / décembre 2026',
    prix: 139900,
    pricing: [
      { label: 'Adulte en chambre double (Hôtel Martinenz)', prix: 139900 },
      { label: 'Adulte en chambre double (Sorriso Hotel 4★)', prix: 145000 },
      { label: 'Chambre individuelle (à partir de)', prix: 193000 },
      { label: 'Enfant de 6 à 12 ans', prix: 118000 },
      { label: 'Enfant de 2 à 5 ans', prix: 85000 },
      { label: 'Enfant de moins de 2 ans (bébé)', prix: 25000 }
    ],
    departures: [
      { date: 'Du 05 au 12 novembre 2026', duree: '8 jours / 7 nuits', compagnie: 'Turkish Airlines', prix: 139900 },
      { date: 'Du 16 au 23 novembre 2026', duree: '8 jours / 7 nuits', compagnie: 'Turkish Airlines', prix: 139900 },
      { date: 'Du 25 novembre au 02 décembre 2026', duree: '8 jours / 7 nuits', compagnie: 'Turkish Airlines', prix: 139900 },
      { date: 'Du 29 novembre au 06 décembre 2026', duree: '8 jours / 7 nuits', compagnie: 'Turkish Airlines', prix: 139900 }
    ],
    pricingGroups: [
      {
        title: 'Option 1 : Hôtel Martinenz Istanbul',
        note: 'Centre-ville · petit-déjeuner inclus',
        periods: [
          {
            label: 'Tarifs par personne',
            tarifs: [
              { label: 'Adulte en chambre double', prix: 139900 },
              { label: 'Chambre individuelle', prix: 193000 },
              { label: 'Enfant de 6 à 12 ans', prix: 118000 },
              { label: 'Enfant de 2 à 5 ans', prix: 85000 },
              { label: 'Bébé (< 2 ans)', prix: 25000 }
            ]
          }
        ]
      },
      {
        title: 'Option 2 : Sorriso Hotel Istanbul ⭐⭐⭐⭐',
        note: 'Hôtel 4 étoiles au centre-ville · buffet petit-déjeuner inclus',
        periods: [
          {
            label: 'Tarifs par personne',
            tarifs: [
              { label: 'Adulte en chambre double', prix: 145000 },
              { label: 'Chambre individuelle', prix: 199000 },
              { label: 'Enfant de 6 à 12 ans', prix: 118000 },
              { label: 'Enfant de 2 à 5 ans', prix: 85000 },
              { label: 'Bébé (< 2 ans)', prix: 25000 }
            ]
          }
        ]
      }
    ],
    hotels: [
      {
        nom: 'Hotel Martinenz Istanbul',
        ville: 'Istanbul centre-ville',
        etoiles: 4,
        formule: 'Petit-déjeuner inclus',
        images: ['assets/img/hotels/martinenz-istanbul-1.jpg']
      },
      {
        nom: 'Sorriso Hotel Istanbul',
        ville: 'Istanbul centre-ville',
        etoiles: 4,
        formule: 'Petit-déjeuner buffet inclus',
        images: []
      }
    ],
    voyageurs: 'Voyage organisé en groupe',
    resume: '8 jours / 7 nuits à Istanbul avec Turkish Airlines, hôtel au choix, +22 excursions et 2 cadeaux exclusifs offerts !',
    description: "Offrez-vous une escapade inoubliable au cœur de la Turquie avec Access Tourisme ! Découvrez les trésors historiques d’Istanbul, ses quartiers emblématiques, ses paysages magnifiques et profitez d’un programme exceptionnel de plus de 22 excursions et visites touristiques, avec hébergement au choix (Hôtel Martinenz ou Sorriso Hotel 4★).\n\n🎁 2 CADEAUX OFFERTS PAR L’AGENCE :\n• Excursion nature à Maşukiye & Sapanca\n• Soirée dîner-spectacle Layali Chamia avec dîner inclus !",
    inclus: [
      'Billet d’avion aller-retour avec Turkish Airlines',
      'Hébergement pendant 7 nuits dans l’hôtel de votre choix',
      'Petits-déjeuners (buffet au Sorriso Hotel)',
      'Transferts et déplacements prévus au programme en autocar moderne',
      'Plus de 22 excursions et visites touristiques guidées',
      'Guides touristiques professionnels parlant arabe',
      'Traitement du dossier de visa offert par l’agence',
      'Prise de rendez-vous pour le visa offerte par l’agence',
      '🎁 CADEAU 1 : Excursion offerte à Maşukiye & Sapanca',
      '🎁 CADEAU 2 : Soirée Layali Chamia avec dîner inclus',
      'Journée complète aux îles des Princes avec bateau privé et déjeuner inclus',
      'Visites culturelles : Mosquée Bleue, quartier coloré de Balat, principaux monuments',
      'Shopping au centre commercial Olivium'
    ],
    nonInclus: [
      'Frais de visa (non inclus ; exemption selon âge et passeport)',
      'Billets d’entrée à Sainte-Sophie et à l’Aquarium de Florya',
      'Déjeuners et dîners non mentionnés',
      'Dépenses personnelles'
    ],
    programme: [
      { jour: 'Jour 1', titre: 'Arrivée à Istanbul', detail: 'Accueil chaleureux à l’aéroport par notre équipe, transfert vers votre hôtel, installation dans les chambres et temps libre pour une première immersion.' },
      { jour: 'Jour 2', titre: 'Monuments historiques & Mosquée Bleue', detail: 'Découverte des principaux joyaux architecturaux de la cité impériale, visite de la célèbre Mosquée Bleue et découverte extérieure de Sainte-Sophie.' },
      { jour: 'Jour 3', titre: 'Quartier coloré de Balat & Bosphore', detail: 'Balade pittoresque dans les ruelles pavées et maisons colorées de Balat, visite des quartiers historiques et temps libre au bord du Bosphore.' },
      { jour: 'Jour 4', titre: 'Îles des Princes en bateau privé avec déjeuner', detail: 'Journée d’évasion en mer de Marmara sur les îles des Princes avec traversée en bateau privé et délicieux déjeuner inclus.' },
      { jour: 'Jour 5', titre: '🎁 Excursion offerte à Maşukiye & Lac Sapanca', detail: 'Magnifique journée au vert offerte par Access Tourisme : paysages de montagne à Maşukiye, cascades rafraîchissantes et rives paisibles du lac de Sapanca.' },
      { jour: 'Jour 6', titre: 'Aquarium de Florya & Shopping Olivium', detail: 'Visite du spectaculaire aquarium de Florya en bord de mer, suivie d’une après-midi shopping au centre commercial réputé Olivium Outlet.' },
      { jour: 'Jour 7', titre: 'Journée libre & 🎁 Soirée Layali Chamia avec dîner', detail: 'Temps libre pour vos derniers achats au Grand Bazar ou sur l’avenue Istiklal. En soirée, profitez de notre second cadeau : une grandiose soirée spectacle Layali Chamia avec dîner offert.' },
      { jour: 'Jour 8', titre: 'Retour en Algérie', detail: 'Transfert organisé de l’hôtel vers l’aéroport d’Istanbul et vol retour avec Turkish Airlines.' }
    ],
    infos: {
      visa: 'Traitement du dossier et prise de rendez-vous offerts. Frais consulaires de visa non inclus (conditions d’exemption selon l’âge et la nationalité).',
      aPrevoir: 'Passeport valide au moins 6 mois. Téléphone / WhatsApp réservations : 0561 63 26 26.'
    },
    populaire: true
  },

  /* ----------------------------- TUNISIE ----------------------------- */
  {
    id: 'tunisie-sousse-novembre-2026',
    destination: 'Tunisie — Sousse & Hammamet (Par Bus)',
    pays: 'Tunisie',
    categorie: 'International',
    image: 'assets/img/destinations/tunisie.jpg',
    duree: '7 jours / 5 nuits',
    depart: '4 départs en novembre / décembre 2026 — Départs d’Alger et Sétif',
    prix: 26000,
    pricing: [
      { label: 'Sol Palmeras 3★ (Demi-pension)', prix: 26000 },
      { label: 'Tree House Resort 3★ (Demi-pension)', prix: 29000 },
      { label: 'Soviva Resort 3★ (Demi-pension)', prix: 30000 },
      { label: 'Hôtel Marabout 3★ (Piscine couverte)', prix: 33000 },
      { label: 'Hannibal Palace 4★ (Piscine couverte)', prix: 34000 },
      { label: 'Hôtel Kanta Resort 4★ (Piscine couverte)', prix: 36000 },
      { label: 'Golf Résidence 4★ (Piscine couverte)', prix: 38000 }
    ],
    departures: [
      { date: 'الرحلة 01 : Du 06 au 12 novembre 2026', duree: '7 jours / 5 nuits', statut: 'Disponible', prix: 26000 },
      { date: 'الرحلة 02 : Du 13 au 19 novembre 2026', duree: '7 jours / 5 nuits', statut: 'Disponible', prix: 26000 },
      { date: 'الرحلة 03 : Du 20 au 26 novembre 2026', duree: '7 jours / 5 nuits', statut: 'Disponible', prix: 26000 },
      { date: 'الرحلة 04 : Du 27 novembre au 03 décembre 2026', duree: '7 jours / 5 nuits', statut: 'Disponible', prix: 26000 }
    ],
    pricingGroups: [
      {
        title: 'Hôtel Sol Palmeras ★★★',
        note: 'نصف إقامة + فندق إقتصادي وعائلي · موقع ممتاز',
        periods: [
          {
            label: 'الأسعار / Tarifs',
            tarifs: [
              { label: 'Adulte (الشخص الواحد)', prix: 26000 },
              { label: 'Chambre individuelle (الغرفة الفردية)', prix: 32000 },
              { label: '1er enfant < 12 ans sans siège (الطفل الأول بدون مقعد)', texte: 'Gratuit (مجانا)' },
              { label: '2ème enfant < 12 ans (الطفل الثاني)', prix: 18000 }
            ]
          }
        ]
      },
      {
        title: 'Hôtel Tree House Resort ★★★',
        note: 'نصف إقامة + موقع جميل وإقتصادي',
        periods: [
          {
            label: 'الأسعار / Tarifs',
            tarifs: [
              { label: 'Adulte (الشخص الواحد)', prix: 29000 },
              { label: 'Chambre individuelle (الغرفة الفردية)', prix: 40000 },
              { label: '1er enfant < 12 ans sans siège (الطفل الأول بدون مقعد)', texte: 'Gratuit (مجانا)' },
              { label: '2ème enfant < 12 ans (الطفل الثاني)', prix: 18000 }
            ]
          }
        ]
      },
      {
        title: 'Hôtel Soviva Resort ★★★',
        note: 'نصف إقامة + موقع جميل وإقتصادي',
        periods: [
          {
            label: 'الأسعار / Tarifs',
            tarifs: [
              { label: 'Adulte (الشخص الواحد)', prix: 30000 },
              { label: 'Chambre individuelle (الغرفة الفردية)', prix: 45000 },
              { label: '1er enfant < 12 ans sans siège (الطفل الأول بدون مقعد)', texte: 'Gratuit (مجانا)' },
              { label: '2ème enfant < 12 ans (الطفل الثاني)', prix: 20000 }
            ]
          }
        ]
      },
      {
        title: 'Hôtel Marabout ★★★',
        note: 'نصف إقامة + مسبح داخلي مغطى + عائلي وموقع ممتاز',
        periods: [
          {
            label: 'الأسعار / Tarifs',
            tarifs: [
              { label: 'Adulte (الشخص الواحد)', prix: 33000 },
              { label: 'Chambre individuelle (الغرفة الفردية)', prix: 45000 },
              { label: '1er enfant < 12 ans sans siège (الطفل الأول بدون مقعد)', texte: 'Gratuit (مجانا)' },
              { label: '2ème enfant < 12 ans (الطفل الثاني)', prix: 20000 }
            ]
          }
        ]
      },
      {
        title: 'Hôtel Hannibal Palace ★★★★',
        note: 'نصف إقامة + مسبح داخلي مغطى + موقع ممتاز في القنطاوي',
        periods: [
          {
            label: 'الأسعار / Tarifs',
            tarifs: [
              { label: 'Adulte (الشخص الواحد)', prix: 34000 },
              { label: 'Chambre individuelle (الغرفة الفردية)', prix: 44000 },
              { label: '1er enfant < 4 ans sans siège (الطفل الأول بدون مقعد)', texte: 'Gratuit (مجانا)' },
              { label: '2ème enfant 4 à 12 ans (الطفل الثاني)', prix: 22000 }
            ]
          }
        ]
      },
      {
        title: 'Hôtel Kanta Resort ★★★★',
        note: 'نصف إقامة + مسبح داخلي مغطى + عائلي وموقع ممتاز',
        periods: [
          {
            label: 'الأسعار / Tarifs',
            tarifs: [
              { label: 'Adulte (الشخص الواحد)', prix: 36000 },
              { label: 'Chambre individuelle (الغرفة الفردية)', prix: 48000 },
              { label: '1er enfant < 6 ans sans siège (الطفل الأول بدون مقعد)', texte: 'Gratuit (مجانا)' },
              { label: '2ème enfant < 12 ans (الطفل الثاني)', prix: 25000 }
            ]
          }
        ]
      },
      {
        title: 'Hôtel Golf Résidence ★★★★',
        note: 'نصف إقامة + مسبح داخلي مغطى + عائلي وموقع ممتاز',
        periods: [
          {
            label: 'الأسعار / Tarifs',
            tarifs: [
              { label: 'Adulte (الشخص الواحد)', prix: 38000 },
              { label: 'Chambre individuelle (الغرفة الفردية)', prix: 53000 },
              { label: '1er enfant < 6 ans sans siège (الطفل الأول بدون مقعد)', texte: 'Gratuit (مجانا)' },
              { label: '2ème enfant < 12 ans (الطفل الثاني)', prix: 25000 }
            ]
          }
        ]
      }
    ],
    hotels: [
      {
        nom: 'Sol Palmeras',
        ville: 'Sousse',
        etoiles: 3,
        formule: 'Demi-pension',
        images: ['assets/img/hotels/sol-palmeras-1.jpg', 'assets/img/hotels/sol-palmeras-2.jpg']
      },
      {
        nom: 'Tree House Resort',
        ville: 'Sousse',
        etoiles: 3,
        formule: 'Demi-pension',
        images: ['assets/img/hotels/tree-house-1.jpg', 'assets/img/hotels/tree-house-2.jpg', 'assets/img/hotels/tree-house-3.jpg']
      },
      {
        nom: 'Soviva Resort',
        ville: 'Sousse / Port El Kantaoui',
        etoiles: 3,
        formule: 'Demi-pension',
        images: ['assets/img/hotels/soviva-1.jpg']
      },
      {
        nom: 'Hôtel Marabout',
        ville: 'Sousse',
        etoiles: 3,
        formule: 'Demi-pension · Piscine couverte',
        images: ['assets/img/hotels/marabout-2.jpg', 'assets/img/hotels/marabout-3.jpg', 'assets/img/hotels/marabout-4.jpg']
      },
      {
        nom: 'Hannibal Palace',
        ville: 'Port El Kantaoui',
        etoiles: 4,
        formule: 'Demi-pension · Piscine couverte',
        images: ['assets/img/hotels/hannibal-palace.jpg']
      },
      {
        nom: 'Hôtel Kanta Resort',
        ville: 'Port El Kantaoui',
        etoiles: 4,
        formule: 'Demi-pension · Piscine couverte',
        images: ['assets/img/hotels/kanta-resort-1.jpg', 'assets/img/hotels/kanta-resort-2.jpg', 'assets/img/hotels/kanta-resort-3.jpg']
      },
      {
        nom: 'Golf Résidence',
        ville: 'Port El Kantaoui',
        etoiles: 4,
        formule: 'Demi-pension · Piscine couverte',
        images: ['assets/img/hotels/golf-residence-1.jpg', 'assets/img/hotels/golf-residence-2.jpg']
      }
    ],
    voyageurs: 'Voyage organisé par bus tout confort',
    resume: 'Séjour de 5 nuits / 7 jours en Tunisie avec choix parmi 7 hôtels 3★ et 4★, demi-pension, excursions et départs d’Alger et Sétif.',
    description: "رحلة منظمة إلى تونس الخضراء — سوسة والحمامات لمدة 05 ليالي و 07 أيام كاملة. إقامة مريحة في فنادق 3 و 4 نجوم مع نصف إقامة ومسابح مغطاة، ونقل بحافلات سياحية حديثة ومكيفة، وممثل مرافق من وكالتنا طيلة الرحلة.\n\nالإنطلاق من الجزائر العاصمة وسطيف مرورا بالبويرة، برج بوعريريج، قسنطينة، سكيكدة، عنابة والطارف.\nيمكنكم دفع 10 000 دج (مليون سنتيم) لتأكيد الحجز، وباقي المبلغ يوم الإنطلاق.",
    inclus: [
      'إقامة 05 ليالي / 07 أيام كاملة بالفندق المختار',
      'نصف إقامة (Demi-pension : فطور الصباح وعشاء) على حسب الفندق',
      'النقل ذهاب وإياب في حافلات سياحية حديثة، مريحة ومكيفة',
      'ممثل ومرشد عن وكالة Access Tourisme يرافقكم طيلة الرحلة ذهاباً وإياباً',
      'رحلات ترفيهية مجانية شاملة في البرنامج :',
      '• زيارة مدينة نابل التقليدية وحرفيي الفخار والأسواق',
      '• جولة ساحرة في بلاد العربي وسوق سوسة العتيق',
      '• زيارة المارينا ومنتجع ياسمين الحمامات'
    ],
    nonInclus: [
      'رحلة بحرية ترفيهية على متن سفينة القراصنة (إختيارية)',
      'تذاكر مدينة الألعاب الترفيهية « قرطاج لاند الحمامات » (إختيارية)',
      'رحلة ترفيهية إلى سيدي بوسعيد وتونس العاصمة (إختيارية)',
      'المصاريف الشخصية والمشروبات'
    ],
    programme: [
      {
        jour: 'Jour 1 / اليوم 1',
        titre: 'الإنطلاق نحو تونس / Départ vers la Tunisie',
        detail: 'الانطلاق من الجزائر العاصمة وسطيف مرورا بمدن الشرق الجزائري (البويرة، برج بوعريريج، قسنطينة، سكيكدة، عنابة، الطارف). عبور الحدود في أجواء مريحة برفقة مرشد الوكالة.'
      },
      {
        jour: 'Jours 2–6 / الأيام 2 إلى 6',
        titre: 'إقامة ممتعة وجولات سياحية / Séjour & Excursions',
        detail: 'الوصول إلى سوسة وتوزيع الغرف حسب الفندق المختار. الاستمتاع بنصف إقامة والمرافق الترفيهية والمسابح المغطاة. جولات سياحية مجانية لزيارة مدينة نابل، المدينة العتيقة (بلاد العربي بسوسة)، وياسمين الحمامات، مع إمكانية المشاركة في الأنشطة الاختيارية (سفينة القراصنة، قرطاج لاند، وسيدي بوسعيد).'
      },
      {
        jour: 'Jour 7 / اليوم 7',
        titre: 'العودة إلى أرض الوطن / Retour en Algérie',
        detail: 'تسجيل المغادرة من الفندق وبدء رحلة العودة في الحافلة المكيفة إلى الجزائر وسطيف مع أجمل الذكريات.'
      }
    ],
    infos: {
      visa: 'بدون تأشيرة للمواطنين الجزائريين (جواز سفر ساري المفعول).',
      aPrevoir: 'تسهيلات التسجيل عبر الواتساب ودفع مبلغ التسبيق (10 000 دج) عبر CCP أو BaridiMob دون الحاجة للتنقل.'
    },
    populaire: true
  },

  /* ---------------------------- AZERBAÏDJAN --------------------------- */
  {
    id: 'azerbaidjan-decembre-2026',
    destination: 'Bakou, Gabala & Sheki',
    pays: 'Azerbaïdjan',
    categorie: 'Asie',
    image: 'assets/img/destinations/azerbaidjan.jpg',
    duree: '8 jours / 7 nuits',
    depart: 'Du 19 au 26 décembre 2026 — Vol Turkish Airlines & Visa inclus',
    prix: 218000,
    pricing: [
      { label: 'Tarif par personne (à partir de)', prix: 218000 }
    ],
    departures: [
      { date: 'Du 19 au 26 décembre 2026', duree: '8 jours / 7 nuits', compagnie: 'Turkish Airlines', statut: 'Confirmé', prix: 218000 }
    ],
    hotels: [
      {
        nom: 'Parkside Hotel',
        ville: 'Bakou',
        etoiles: 4,
        formule: '5 nuits · Petit-déjeuner inclus',
        images: ['assets/img/hotels/parkside-baku-1.jpg']
      },
      {
        nom: 'Karvansaray Spa Hotel',
        ville: 'Gabala',
        etoiles: 4,
        formule: '2 nuits · Petit-déjeuner inclus',
        images: ['assets/img/hotels/karvansaray-gabala-1.jpg']
      }
    ],
    voyageurs: 'Circuit organisé tout confort',
    resume: '8 jours / 7 nuits entre la capitale futuriste Bakou et les sommets de Gabala et Sheki. Vol Turkish Airlines et visa électronique inclus !',
    description: "Access Tourisme vous invite à découvrir le charme de l’Azerbaïdjan entre modernité, histoire et paysages naturels à couper le souffle ! Du 19 au 26 décembre 2026, profitez d’un séjour de 8 jours / 7 nuits avec hébergement 4 étoiles (5 nuits à Bakou au Parkside Hotel et 2 nuits à Gabala au Karvansaray Spa Hotel) avec petits-déjeuners inclus, vols Turkish Airlines, visa électronique et transferts.",
    inclus: [
      'Vol international assuré par Turkish Airlines',
      'Visa électronique pour l’Azerbaïdjan inclus dans le tarif',
      '7 nuits d’hébergement en hôtels 4 étoiles avec petit-déjeuner :',
      '• 5 nuits à Bakou : Parkside Hotel 4⭐',
      '• 2 nuits à Gabala : Karvansaray Spa Hotel 4⭐',
      'Accueil personnalisé à l’aéroport et tous les transferts prévus',
      'Excursions à Bakou : Place des Martyrs, Flame Towers, Musée du Tapis, boulevard maritime de la mer Caspienne, Petite Venise et centre commercial Deniz Mall',
      'Visite historique de la vieille ville d’Icherisheher et promenade sur la rue animée Nizami',
      'Excursion à Gabala : visite de la mosquée historique Juma de Chamakhi (fondée en 743)',
      'Découverte de la ville impériale de Sheki, visite de son célèbre palais historique et des cascades féeriques de Khal-Khal',
      'Excursion au site préhistorique de Gobustan, gravures rupestres et volcans de boue',
      'Visite du Centre culturel emblématique Heydar Aliyev, musée de l’automobile et shopping au Ganjlik Mall'
    ],
    nonInclus: [
      'Remontées mécaniques et téléphérique au complexe touristique de Tufandag (activité facultative)',
      'Activités sportives à Sheki (tir sportif, ski, balades à vélo en forêt)',
      'Visites facultatives : montagne de feu Yanar Dag et temple du feu Ateshgah',
      'Déjeuners et dîners non inclus au programme',
      'Dépenses personnelles et pourboires'
    ],
    programme: [
      {
        jour: 'Jour 1',
        titre: 'Arrivée à Bakou',
        detail: 'Accueil chaleureux à l’aéroport international Heydar Aliyev par notre équipe locale. Transfert privé vers votre hôtel 4★ Parkside Hotel, installation dans les chambres et première nuit de repos.'
      },
      {
        jour: 'Jour 2',
        titre: 'Découverte de Bakou la majestueuse',
        detail: 'Visite de la Place des Martyrs offrant une vue imprenable sur la baie. Découverte du parc paysager et des célèbres Flame Towers (Tours de Flammes). Visite guidée du Musée national du Tapis, agréable promenade sur la corniche bordant la mer Caspienne, visite du centre commercial ultramoderne Deniz Mall et découverte de la féerique Petite Venise.'
      },
      {
        jour: 'Jour 3',
        titre: 'Gabala – Nature, Histoire et Détente',
        detail: 'Départ en direction de Gabala au pied du Grand Caucase. En route, visite de la majestueuse mosquée Juma de Chamakhi, l’une des plus anciennes du monde musulman (fondée en 743). Arrivée à Gabala, possibilité de monter en téléphérique au complexe touristique de Tufandag (facultatif). Installation au somptueux Karvansaray Spa Hotel 4★.'
      },
      {
        jour: 'Jour 4',
        titre: 'Découverte de Sheki, cascades et palais des Khans',
        detail: 'Excursion vers la ville historique de Sheki au pied des montagnes. Découverte du splendide Palais d’été des Khans de Sheki aux vitraux chatoyants. Promenade dans le centre historique et route vers les magnifiques cascades naturelles de Khal-Khal. Activités récréatives facultatives (tir, balades en forêt).'
      },
      {
        jour: 'Jour 5',
        titre: 'Retour vers Bakou & La vieille ville (Icherisheher)',
        detail: 'Retour vers la capitale Bakou. Exploration pédestre au cœur de la vieille ville fortifiée (Icherisheher), classée au patrimoine mondial de l’UNESCO, avec ses ruelles pittoresques et ses artisans. Soirée animée sur la prestigieuse rue piétonne Nizami.'
      },
      {
        jour: 'Jour 6',
        titre: 'Merveilles de Gobustan & Volcans de boue',
        detail: 'Visite du site archéologique de Gobustan abritant de millénaires gravures rupestres préhistoriques. Découverte du phénomène géologique exceptionnel des volcans de boue bouillonnante.'
      },
      {
        jour: 'Jour 7',
        titre: 'Les incontournables de Bakou & Shopping',
        detail: 'Visite du chef-d’œuvre d’architecture contemporaine signé Zaha Hadid : le Centre culturel Heydar Aliyev et son musée de l’automobile. Découverte facultative de la montagne éternellement enflammée de Yanar Dag et du temple du feu zoroastrien Ateshgah. Promenade dans les bazars traditionnels et shopping au grand centre commercial Ganjlik Mall.'
      },
      {
        jour: 'Jour 8',
        titre: 'Départ et vol retour',
        detail: 'Petit-déjeuner à l’hôtel, transfert organisé vers l’aéroport de Bakou et vol retour vers l’Algérie avec Turkish Airlines.'
      }
    ],
    infos: {
      visa: 'Visa électronique inclus dans le tarif du voyage (obtenu directement par notre agence).',
      aPrevoir: 'Passeport valide au moins 6 mois. Prévoir vêtements chauds d’hiver pour les soirées et le Caucase.'
    },
    populaire: true
  },

  /* ----------------------------- MALAISIE ----------------------------- */
  {
    id: 'malaisie-kl-langkawi-2026',
    destination: 'Kuala Lumpur & Langkawi',
    pays: 'Malaisie',
    categorie: 'Asie',
    image: 'assets/img/destinations/malaisie.jpg',
    duree: '9 jours / 8 nuits',
    depart: 'Novembre & Décembre 2026 — Vols directs Air Algérie',
    prix: 230000,
    pricing: [
      { label: 'Tarif par personne (à partir de)', prix: 230000 }
    ],
    departures: [
      { date: 'Du 25/11/2026 au 03/12/2026', duree: '9 jours / 8 nuits', compagnie: 'Air Algérie (Vol direct)', prix: 230000 },
      { date: 'Du 18/12/2026 au 26/12/2026', duree: '9 jours / 8 nuits', compagnie: 'Air Algérie (Vol direct)', prix: 230000 },
      { date: 'Du 25/12/2026 au 04/01/2027', duree: '11 jours / 10 nuits (Nouvel An)', compagnie: 'Air Algérie (Vol direct)', prix: 230000 }
    ],
    hotels: [
      {
        nom: 'Hôtels de standing 4★ et 5★',
        ville: 'Kuala Lumpur & Langkawi',
        etoiles: 5,
        formule: 'Petit-déjeuner buffet inclus',
        images: ['assets/img/hotels/wyndham-suites-klcc-1.jpg', 'assets/img/hotels/pelangi-beach-1.jpg']
      }
    ],
    voyageurs: 'Séjour combiné ville moderne & paradis tropical',
    resume: 'Entre gratte-ciels spectaculaires et plages paradisiaques : Kuala Lumpur & Langkawi avec vols Air Algérie et hôtels 4★/5★.',
    description: "Access Tourisme vous invite en Malaisie pour un voyage inoubliable combinant l’énergie palpitante de la capitale Kuala Lumpur et la quiétude des plages de rêve de l’île de Langkawi. Vols assurés avec Air Algérie, hébergement en hôtels 4 et 5 étoiles avec petit-déjeuner inclus, tous transferts aéroport-hôtel-aéroport, excursions incontournables et assistance d’un guide sur place.",
    inclus: [
      'Vol international aller-retour avec la compagnie nationale Air Algérie',
      'Hébergement en hôtels 4★ et 5★ à Kuala Lumpur et à Langkawi',
      'Petits-déjeuners inclus durant tout le séjour',
      'Tous les transferts (Aéroport / Hôtel / Aéroport et transferts inter-îles)',
      'Programme d’excursions et de visites incluses',
      'Guides touristiques et assistance continue sur place'
    ],
    nonInclus: [
      'Repas de midi et dîners non mentionnés',
      'Activités nautiques ou excursions optionnelles',
      'Dépenses personnelles et pourboires'
    ],
    programme: [
      {
        jour: 'Kuala Lumpur',
        titre: 'Ville moderne et dynamique',
        detail: 'Immersion au cœur de la capitale malaise : découverte des célèbres Tours jumelles Petronas, de la tour KL Menara, shopping dans les gigantesques galeries de Bukit Bintang et visite culturelle des grottes de Batu (Batu Caves).'
      },
      {
        jour: 'Langkawi',
        titre: 'Plages paradisiaques et nature luxuriante',
        detail: 'Séjour balnéaire sur l’archipel enchanteur de Langkawi : détente sur le sable blanc, traversée en téléphérique SkyCab avec vue panoramique sur la mer d’Andaman, découverte des mangroves et croisières vers les îlots voisins.'
      }
    ],
    infos: {
      visa: 'Exemption de visa pour les ressortissants algériens (séjour touristique jusqu’à 90 jours avec passeport valide).',
      aPrevoir: 'Passeport en cours de validité d’au moins 6 mois. Réservations par téléphone ou WhatsApp au 0561 63 26 26 / 0561 63 25 25.'
    },
    populaire: true
  }

];

/* Ne rien modifier en dessous de cette ligne. */
window.OFFRES = OFFRES;
