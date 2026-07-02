/* ==========================================================================
   ACCESS TOURISME — Animations (AOS) et carrousels (Swiper)
   --------------------------------------------------------------------------
   Ce fichier initialise deux bibliothèques externes légères, chargées via
   CDN dans chaque page :
     • AOS    (Animate On Scroll)  → légères apparitions au défilement
     • Swiper (carrousel tactile)  → carrousel du héros + témoignages
   Rien à modifier ici pour les mises à jour de contenu.
   ========================================================================== */
(function () {
  "use strict";

  document.addEventListener('DOMContentLoaded', function () {

    if (window.AOS) {
      AOS.init({ duration: 650, easing: 'ease-out-cubic', once: true, offset: 40 });
    }

    if (window.Swiper) {
      var hero = document.querySelector('.hero-swiper');
      if (hero) {
        var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        new Swiper(hero, {
          effect: 'fade',
          fadeEffect: { crossFade: true },
          loop: true,
          speed: 1400,
          autoplay: reduceMotion ? false : { delay: 5200, disableOnInteraction: false },
          pagination: { el: '.hero__dots', clickable: true }
        });
      }
    }
  });

  /* Réanalyse AOS après un nouveau rendu dynamique (ex : filtres d'offres) */
  window.refreshMotion = function () {
    if (window.AOS) AOS.refreshHard();
  };
})();
