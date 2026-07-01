/* ==========================================================================
   ACCESS TOURISME — Logique du site (en-tête, pied de page, offres, WhatsApp)
   --------------------------------------------------------------------------
   Ce fichier construit les éléments communs (menu, pied de page, bouton
   WhatsApp) et affiche les offres à partir du fichier "offres-data.js".
   En principe, vous n'avez PAS besoin de le modifier :
     • Pour changer le numéro / les coordonnées → fichier  config.js
     • Pour changer les voyages                → fichier  offres-data.js
   ========================================================================== */
(function () {
  "use strict";

  var CFG = window.SITE_CONFIG || {};
  var OFFRES = window.OFFRES || [];

  /* ---------------------------- Icônes (SVG) ---------------------------- */
  var P = {
    clock:    '<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/>',
    pin:      '<path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    users:    '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    check:    '<polyline points="20 6 9 17 4 12"/>',
    checkc:   '<circle cx="12" cy="12" r="10"/><polyline points="16 9.5 11 14.5 8 11.5"/>',
    x:        '<line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    tag:      '<path d="M20.59 13.41 11 3.82A2 2 0 0 0 9.59 3H4a1 1 0 0 0-1 1v5.59A2 2 0 0 0 3.59 11l9.59 9.59a2 2 0 0 0 2.83 0l4.59-4.59a2 2 0 0 0 0-2.83z"/><circle cx="7.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"/>',
    phone:    '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    mail:     '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
    map:      '<polygon points="1 6 8 3 16 6 23 3 23 18 16 21 8 18 1 21 1 6"/><line x1="8" y1="3" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="21"/>',
    clockh:   '<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/>',
    shield:   '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>',
    wallet:   '<path d="M20 12V8H6a2 2 0 0 1 0-4h12v4"/><path d="M4 6v12a2 2 0 0 0 2 2h14v-4"/><circle cx="16" cy="14" r="1.4" fill="currentColor" stroke="none"/>',
    headset:  '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><path d="M20 15a2 2 0 0 1-2 2h-1v-5h1a2 2 0 0 1 2 2zM4 15a2 2 0 0 0 2 2h1v-5H6a2 2 0 0 0-2 2z"/><path d="M18 17v1a3 3 0 0 1-3 3h-3"/>',
    chat:     '<path d="M21 11.5a8.38 8.38 0 0 1-9 8.37 9 9 0 0 1-4-.93L3 21l1.06-3.18A8.5 8.5 0 1 1 21 11.5z"/>',
    arrow:    '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
    info:     '<circle cx="12" cy="12" r="10"/><line x1="12" y1="11" x2="12" y2="16"/><circle cx="12" cy="8" r="1" fill="currentColor" stroke="none"/>',
    sun:      '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    passport: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><circle cx="12" cy="9" r="2.5"/><path d="M9 14h6"/>',
    bag:      '<path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M12 11v6"/>',
    wa:       '<path fill="currentColor" stroke="none" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.02zM12.05 20.15h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 5.83 2.42 8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    instagram:'<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/>',
    tiktok:   '<path d="M16 3c.5 2.5 2 4 4.5 4.3v3c-1.7 0-3.2-.5-4.5-1.4V15a6 6 0 1 1-6-6c.3 0 .7 0 1 .1v3.1A3 3 0 1 0 13 15V3z"/>'
  };
  function icon(name, cls) {
    return '<svg class="' + (cls || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (P[name] || '') + '</svg>';
  }

  /* ---------------------------- Utilitaires ---------------------------- */
  function fmtPrice(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' DA'; }
  function waNumber() { return String(CFG.whatsapp || '').replace(/[\s+]/g, ''); }
  function waLink(msg) { return 'https://wa.me/' + waNumber() + '?text=' + encodeURIComponent(msg); }
  function param(name) { return new URLSearchParams(location.search).get(name); }
  function getOffre(id) { return OFFRES.filter(function (o) { return o.id === id; })[0]; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  var NAV = [
    { href: 'index.html',       label: 'Accueil' },
    { href: 'offres.html',      label: 'Nos offres' },
    { href: 'apropos.html',     label: 'À propos' },
    { href: 'contact.html',     label: 'Contact' }
  ];
  var CATEGORIES = ['International', 'Asie'];

  function currentPage() {
    var f = location.pathname.split('/').pop();
    return f === '' ? 'index.html' : f;
  }

  /* ============================ EN-TÊTE ============================ */
  function buildHeader() {
    var host = document.getElementById('site-header');
    if (!host) return;
    var cur = currentPage();
    var links = NAV.map(function (n) {
      var active = n.href === cur ? ' active' : '';
      return '<a href="' + n.href + '" class="' + active.trim() + '"' +
        (active ? ' aria-current="page"' : '') + '>' + n.label + '</a>';
    }).join('');
    host.className = 'site-header';
    host.innerHTML =
      '<div class="container header-inner">' +
        '<a href="index.html" class="brand" aria-label="Access Tourisme — Accueil">' +
          '<img src="assets/img/site/logo-header.png" alt="Access Tourisme, agence de voyages" width="55" height="52">' +
        '</a>' +
        '<button class="nav-toggle" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="main-nav">' +
          '<span></span><span></span><span></span>' +
        '</button>' +
        '<nav class="nav" id="main-nav" aria-label="Navigation principale">' +
          '<div class="nav__brand"><img src="assets/img/site/logo-icon-nav.png" alt="" width="30" height="30">Access Tourisme</div>' +
          links +
          '<a href="reservation.html" class="btn btn-gold">Réserver</a>' +
        '</nav>' +
      '</div>';

    var toggle = host.querySelector('.nav-toggle');
    var nav = host.querySelector('.nav');
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
    });
    window.addEventListener('scroll', function () {
      host.classList.toggle('scrolled', window.scrollY > 8);
    }, { passive: true });
  }

  /* ============================ PIED DE PAGE ============================ */
  function buildFooter() {
    var host = document.getElementById('site-footer');
    if (!host) return;
    var social = '';
    [['facebook', 'Facebook'], ['instagram', 'Instagram'], ['tiktok', 'TikTok']].forEach(function (s) {
      var url = (CFG.social || {})[s[0]];
      if (url && url !== '#') social += '<a href="' + esc(url) + '" target="_blank" rel="noopener" aria-label="' + s[1] + '">' + icon(s[0]) + '</a>';
    });
    var destLinks = CATEGORIES.map(function (c) {
      return '<li><a href="offres.html?cat=' + encodeURIComponent(c) + '">' + esc(c) + '</a></li>';
    }).join('');

    host.className = 'site-footer';
    host.innerHTML =
      '<div class="container footer-grid">' +
        '<div class="footer-brand">' +
          '<img src="assets/img/site/logo-mark.png" alt="Access Tourisme" width="120" height="113" loading="lazy">' +
          '<p>Votre agence de voyages de confiance. Nous concevons des séjours sur mesure, en Algérie et à travers le monde, avec un accompagnement personnalisé du début à la fin.</p>' +
          '<div class="footer-social">' + social + '</div>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>Destinations</h4><ul>' + destLinks + '</ul>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>Le site</h4><ul>' +
            '<li><a href="index.html">Accueil</a></li>' +
            '<li><a href="offres.html">Nos offres</a></li>' +
            '<li><a href="apropos.html">À propos</a></li>' +
            '<li><a href="contact.html">Contact</a></li>' +
            '<li><a href="reservation.html">Réserver un voyage</a></li>' +
          '</ul>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>Nous contacter</h4>' +
          '<ul class="footer-contact">' +
            '<li>' + icon('pin') + '<span>' + esc(CFG.adresse) + '<br>' + esc(CFG.ville) + '</span></li>' +
            '<li>' + icon('phone') + '<a href="tel:' + esc(String(CFG.telephone).replace(/\s/g, '')) + '">' + esc(CFG.telephone) + '</a></li>' +
            '<li>' + icon('wa') + '<a href="' + waLink('Bonjour Access Tourisme, je souhaite des informations.') + '" target="_blank" rel="noopener">WhatsApp</a></li>' +
            '<li>' + icon('mail') + '<a href="mailto:' + esc(CFG.email) + '">' + esc(CFG.email) + '</a></li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
      '<div class="container footer-bottom">' +
        '<span>© ' + new Date().getFullYear() + ' Access Tourisme — Agence de voyages. Tous droits réservés.</span>' +
        '<span>' + esc(CFG.horaires) + '</span>' +
      '</div>';
  }

  /* ===================== BOUTON WHATSAPP FLOTTANT ===================== */
  function buildWhatsAppFab() {
    if (document.querySelector('.wa-float')) return;
    var a = document.createElement('a');
    // Sur la page d'une offre, une barre de réservation fixe occupe déjà le bas
    // de l'écran sur mobile : on remonte le bouton pour éviter qu'ils se chevauchent.
    a.className = 'wa-float' + (document.body.dataset.page === 'offre' ? ' wa-float--raised' : '');
    a.href = waLink("Bonjour Access Tourisme 👋, j'aimerais avoir plus d'informations sur vos offres de voyage.");
    a.target = '_blank'; a.rel = 'noopener';
    a.setAttribute('aria-label', 'Nous contacter sur WhatsApp');
    a.innerHTML = icon('wa') + '<span class="wa-float__label">Discuter sur WhatsApp</span>';
    document.body.appendChild(a);
  }

  /* ========================= CARTE D'OFFRE ========================= */
  function offerCard(o, idx) {
    var delay = ((idx || 0) % 3) * 90;
    return '' +
      '<article class="offer-card" data-aos="fade-up" data-aos-delay="' + delay + '">' +
        '<a class="offer-card__media" href="offre.html?id=' + o.id + '" aria-label="' + esc(o.destination) + '">' +
          '<span class="offer-card__cat">' + esc(o.categorie) + '</span>' +
          '<img src="' + o.image + '" alt="' + esc(o.destination + ', ' + o.pays) + '" loading="lazy">' +
        '</a>' +
        '<div class="offer-card__body">' +
          '<h3><a href="offre.html?id=' + o.id + '">' + esc(o.destination) + '</a></h3>' +
          '<div class="offer-card__country">' + esc(o.pays) + '</div>' +
          '<p class="offer-card__resume">' + esc(o.resume) + '</p>' +
          '<div class="offer-card__meta">' +
            '<span class="offer-card__duration">' + icon('clock') + esc(o.duree) + '</span>' +
            '<span class="offer-card__price"><small>À partir de</small><b>' + fmtPrice(o.prix) + '</b></span>' +
          '</div>' +
          '<a href="offre.html?id=' + o.id + '" class="btn btn-outline btn-block">Voir l\'offre</a>' +
        '</div>' +
      '</article>';
  }

  /* ===================== PAGE ACCUEIL ===================== */
  function renderHome() {
    var host = document.getElementById('featured-offers');
    if (!host) return;
    var featured = OFFRES.filter(function (o) { return o.populaire; }).slice(0, 6);
    host.innerHTML = featured.map(offerCard).join('');
  }

  /* ===================== PAGE LISTE DES OFFRES ===================== */
  function renderOffres() {
    var grid = document.getElementById('offers-list');
    if (!grid) return;
    var filtersHost = document.getElementById('offer-filters');
    var countHost = document.getElementById('results-count');
    var budgetSel = document.getElementById('budget-filter');

    var state = { cat: param('cat') || 'Toutes', budget: 'all' };

    var chips = ['Toutes'].concat(CATEGORIES).map(function (c) {
      return '<button class="chip' + (c === state.cat ? ' active' : '') + '" data-cat="' + esc(c) + '">' + esc(c) + '</button>';
    }).join('');
    filtersHost.innerHTML = chips;

    function inBudget(p) {
      if (state.budget === 'all') return true;
      if (state.budget === 'low') return p < 80000;
      if (state.budget === 'mid') return p >= 80000 && p <= 200000;
      if (state.budget === 'high') return p > 200000;
      return true;
    }
    function apply() {
      var list = OFFRES.filter(function (o) {
        return (state.cat === 'Toutes' || o.categorie === state.cat) && inBudget(o.prix);
      });
      grid.innerHTML = list.length
        ? list.map(offerCard).join('')
        : '<p class="no-results">Aucune offre ne correspond à votre recherche. Essayez d\'élargir vos critères ou <a class="text-gold" href="contact.html">contactez-nous</a>.</p>';
      countHost.textContent = list.length + (list.length > 1 ? ' voyages disponibles' : ' voyage disponible');
      Array.prototype.forEach.call(filtersHost.querySelectorAll('.chip'), function (ch) {
        ch.classList.toggle('active', ch.dataset.cat === state.cat);
      });
    }
    filtersHost.addEventListener('click', function (e) {
      var btn = e.target.closest('.chip'); if (!btn) return;
      state.cat = btn.dataset.cat; apply();
      if (window.refreshMotion) window.refreshMotion();
    });
    if (budgetSel) budgetSel.addEventListener('change', function () {
      state.budget = budgetSel.value; apply();
      if (window.refreshMotion) window.refreshMotion();
    });
    apply();
  }

  /* ===================== PAGE DÉTAIL D'UNE OFFRE ===================== */
  function renderOffre() {
    var host = document.getElementById('offer-detail');
    if (!host) return;
    var o = getOffre(param('id'));
    if (!o) {
      host.innerHTML = '<div class="container section center"><h1>Offre introuvable</h1>' +
        '<p>Cette offre n\'existe pas ou n\'est plus disponible.</p>' +
        '<a class="btn btn-gold" href="offres.html">Voir toutes nos offres</a></div>';
      return;
    }
    document.title = o.destination + ' — Access Tourisme';

    var incl = o.inclus.map(function (i) { return '<li>' + icon('check') + '<span>' + esc(i) + '</span></li>'; }).join('');
    var nonIncl = o.nonInclus.map(function (i) { return '<li>' + icon('x') + '<span>' + esc(i) + '</span></li>'; }).join('');

    var program = '';
    if (o.programme && o.programme.length) {
      program =
        '<section class="offer-section program" data-aos="fade-up">' +
          '<h2>Programme jour par jour</h2>' +
          o.programme.map(function (d, idx) {
            return '<details' + (idx === 0 ? ' open' : '') + '>' +
              '<summary><span class="day">' + esc(d.jour) + '</span>' + esc(d.titre) + '</summary>' +
              '<div class="program__detail">' + esc(d.detail) + '</div>' +
            '</details>';
          }).join('') +
        '</section>';
    }

    var reserveUrl = 'reservation.html?offre=' + o.id;
    var quickMsg = 'Bonjour Access Tourisme, je suis intéressé(e) par le voyage : ' + o.destination + '. Pouvez-vous me donner plus d\'informations ?';

    host.innerHTML =
      /* En-tête visuel */
      '<div class="offer-hero">' +
        '<img src="' + o.image + '" alt="' + esc(o.destination + ', ' + o.pays) + '">' +
        '<div class="container offer-hero__inner">' +
          '<span class="badge">' + esc(o.categorie) + '</span>' +
          '<h1>' + esc(o.destination) + '</h1>' +
          '<div class="offer-hero__country">' + icon('pin') + esc(o.pays) + '</div>' +
        '</div>' +
      '</div>' +

      '<div class="container section">' +
        '<nav class="breadcrumb"><a href="index.html">Accueil</a> / <a href="offres.html">Nos offres</a> / <span>' + esc(o.destination) + '</span></nav>' +
        '<div class="offer-layout">' +

          '<div class="offer-main">' +
            '<section class="offer-section offer-body" data-aos="fade-up">' +
              '<h2>Présentation du voyage</h2>' +
              '<p>' + esc(o.description) + '</p>' +
            '</section>' +

            '<section class="offer-section" data-aos="fade-up">' +
              '<div class="incl-grid">' +
                '<div><h3>Ce qui est inclus</h3><ul class="incl-list incl-list--yes">' + incl + '</ul></div>' +
                '<div><h3>Non inclus</h3><ul class="incl-list incl-list--no">' + nonIncl + '</ul></div>' +
              '</div>' +
            '</section>' +

            program +

            '<section class="offer-section" data-aos="fade-up">' +
              '<h2>Informations pratiques</h2>' +
              '<ul class="practical">' +
                '<li>' + icon('sun') + '<div><b>Meilleure période</b><span>' + esc(o.infos.periode) + '</span></div></li>' +
                '<li>' + icon('passport') + '<div><b>Formalités / visa</b><span>' + esc(o.infos.visa) + '</span></div></li>' +
                '<li>' + icon('bag') + '<div><b>À prévoir</b><span>' + esc(o.infos.aPrevoir) + '</span></div></li>' +
              '</ul>' +
            '</section>' +
          '</div>' +

          /* Carte de réservation (aside) */
          '<aside class="offer-aside">' +
            '<div class="booking-card">' +
              '<div class="booking-card__price">' +
                '<small>À partir de</small><b>' + fmtPrice(o.prix) + '</b>' +
                '<em>par personne</em>' +
              '</div>' +
              '<ul class="booking-card__facts">' +
                '<li>' + icon('clock') + esc(o.duree) + '</li>' +
                '<li>' + icon('users') + esc(o.voyageurs) + '</li>' +
                '<li>' + icon('tag') + esc(o.categorie) + '</li>' +
              '</ul>' +
              '<a class="btn btn-gold btn-block btn-lg" href="' + reserveUrl + '">Réserver ce voyage</a>' +
              '<a class="btn btn-wa btn-block" href="' + waLink(quickMsg) + '" target="_blank" rel="noopener">' + icon('wa') + 'Poser une question</a>' +
              '<p class="booking-card__next">' + icon('checkc') + '<span>Aucun paiement en ligne. Après votre demande, notre équipe vous recontacte sur WhatsApp pour confirmer les détails et le prix final.</span></p>' +
            '</div>' +
          '</aside>' +
        '</div>' +
      '</div>' +

      /* Barre fixe mobile */
      '<div class="sticky-bar">' +
        '<div class="sticky-bar__price"><small>À partir de</small><b>' + fmtPrice(o.prix) + '</b></div>' +
        '<a class="btn btn-gold" href="' + reserveUrl + '">Réserver</a>' +
      '</div>';
  }

  /* ===================== PAGE RÉSERVATION ===================== */
  function renderReservation() {
    var form = document.getElementById('reservation-form');
    if (!form) return;
    var select = document.getElementById('offre-select');
    var summary = document.getElementById('offre-summary');
    var preId = param('offre');

    // Options du menu déroulant des offres
    var opts = '<option value="">Je ne sais pas encore — conseillez-moi</option>';
    OFFRES.forEach(function (o) {
      opts += '<option value="' + o.id + '"' + (o.id === preId ? ' selected' : '') + '>' +
        esc(o.destination + ' (' + o.pays + ')') + '</option>';
    });
    select.innerHTML = opts;

    function updateSummary() {
      var o = getOffre(select.value);
      if (!o) { summary.innerHTML = '<div class="form-note">' + icon('info') + '<span>Choisissez une destination ci-dessus, ou laissez-nous vous conseiller : décrivez votre envie dans le message.</span></div>'; return; }
      summary.innerHTML =
        '<div class="offer-card" style="box-shadow:none">' +
          '<div class="offer-card__media" style="aspect-ratio:16/9"><img src="' + o.image + '" alt="' + esc(o.destination) + '"></div>' +
          '<div class="offer-card__body">' +
            '<h3>' + esc(o.destination) + '</h3>' +
            '<div class="offer-card__country">' + esc(o.pays) + '</div>' +
            '<div class="offer-card__meta">' +
              '<span class="offer-card__duration">' + icon('clock') + esc(o.duree) + '</span>' +
              '<span class="offer-card__price"><small>À partir de</small><b>' + fmtPrice(o.prix) + '</b></span>' +
            '</div>' +
          '</div>' +
        '</div>';
    }
    select.addEventListener('change', updateSummary);
    updateSummary();

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = {
        nom: form.nom.value.trim(),
        tel: form.telephone.value.trim(),
        periode: form.periode.value,
        voyageurs: form.voyageurs.value,
        message: form.message.value.trim()
      };
      var o = getOffre(select.value);
      var voyage = o ? (o.destination + ' — ' + o.pays + ' (' + o.duree + ')') : 'À définir (besoin de conseils)';

      var msg = 'Bonjour Access Tourisme 👋\n\n' +
        'Je souhaite réserver le voyage : *' + voyage + '*\n\n' +
        '• Nom : ' + data.nom + '\n' +
        '• Téléphone : ' + data.tel + '\n' +
        '• Nombre de voyageurs : ' + data.voyageurs + '\n' +
        '• Période souhaitée : ' + data.periode + '\n' +
        (data.message ? '• Message : ' + data.message + '\n' : '') +
        '\nMerci de me recontacter pour finaliser ma demande.';

      sendToWhatsApp(msg);
    });
  }

  /* ===================== PAGE CONTACT ===================== */
  function renderContact() {
    var info = document.getElementById('contact-info');
    if (info) {
      info.innerHTML =
        '<li><span class="ci-icon">' + icon('pin') + '</span><div><b>Adresse</b><span>' + esc(CFG.adresse) + ', ' + esc(CFG.ville) + '</span></div></li>' +
        '<li><span class="ci-icon">' + icon('phone') + '</span><div><b>Téléphone</b><a href="tel:' + esc(String(CFG.telephone).replace(/\s/g, '')) + '">' + esc(CFG.telephone) + '</a></div></li>' +
        '<li><span class="ci-icon">' + icon('wa') + '</span><div><b>WhatsApp</b><a href="' + waLink('Bonjour Access Tourisme, je souhaite des informations.') + '" target="_blank" rel="noopener">Discuter avec nous</a></div></li>' +
        '<li><span class="ci-icon">' + icon('mail') + '</span><div><b>E-mail</b><a href="mailto:' + esc(CFG.email) + '">' + esc(CFG.email) + '</a></div></li>' +
        '<li><span class="ci-icon">' + icon('clock') + '</span><div><b>Horaires</b><span>' + esc(CFG.horaires) + '</span></div></li>';
    }
    var waBtn = document.getElementById('contact-wa');
    if (waBtn) waBtn.href = waLink("Bonjour Access Tourisme 👋, j'aimerais avoir des informations.");
    var map = document.getElementById('contact-map');
    if (map && CFG.carte) {
      var c = CFG.carte, d = 0.012;
      var bbox = (c.lng - d) + ',' + (c.lat - d) + ',' + (c.lng + d) + ',' + (c.lat + d);
      map.innerHTML = '<iframe title="Carte — emplacement de l\'agence" loading="lazy" ' +
        'src="https://www.openstreetmap.org/export/embed.html?bbox=' + bbox + '&layer=mapnik&marker=' + c.lat + ',' + c.lng + '"></iframe>';
    }
    var form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var msg = 'Bonjour Access Tourisme,\n\n' +
          '• Nom : ' + form.nom.value.trim() + '\n' +
          '• Téléphone : ' + form.telephone.value.trim() + '\n' +
          (form.message.value.trim() ? '• Message : ' + form.message.value.trim() + '\n' : '') +
          '\nMerci de me recontacter.';
        sendToWhatsApp(msg);
      });
    }
  }

  /* ============ ENVOI VERS WHATSAPP + CONFIRMATION ============ */
  function sendToWhatsApp(message) {
    var link = waLink(message);
    var box = document.getElementById('form-area');
    if (box) {
      box.innerHTML =
        '<div class="form-card form-success">' +
          '<div class="form-success__icon">' + icon('checkc') + '</div>' +
          '<h3>Votre demande est prête !</h3>' +
          '<p>Vous allez être redirigé vers <strong>WhatsApp</strong> pour finaliser votre demande avec notre équipe. Il ne vous restera plus qu\'à appuyer sur « envoyer ».</p>' +
          '<a class="btn btn-wa btn-lg" href="' + link + '" target="_blank" rel="noopener">' + icon('wa') + 'Continuer vers WhatsApp</a>' +
          '<p class="form-hint" style="margin-top:1rem">La fenêtre ne s\'est pas ouverte ? Cliquez sur le bouton ci-dessus.</p>' +
        '</div>';
      box.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    setTimeout(function () { window.location.href = link; }, 1500);
  }

  /* ============================ DÉMARRAGE ============================ */
  document.addEventListener('DOMContentLoaded', function () {
    buildHeader();
    buildFooter();
    buildWhatsAppFab();
    var page = document.body.dataset.page;
    if (page === 'home') renderHome();
    else if (page === 'offres') renderOffres();
    else if (page === 'offre') renderOffre();
    else if (page === 'reservation') renderReservation();
    else if (page === 'contact') renderContact();
  });
})();
