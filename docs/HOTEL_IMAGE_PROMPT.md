# Prompt — ajouter des photos d’hôtels de façon légère

Utilise ce prompt pour enrichir une offre existante avec de vraies photos
d’hôtels sans alourdir inutilement le site.

---

## Mission

Pour chaque hôtel déjà cité dans l’offre, trouver des photos fiables, les
optimiser, puis les afficher **dans la même carte que le nom, la formule et les
tarifs de l’hôtel**. Ne crée pas une section de prix ou une fiche séparée.

## Règles de recherche

1. Vérifie le **nom exact, la ville et l’établissement** avant de retenir une
   photo. Ne mélange jamais deux hôtels aux noms proches.
2. Cherche dans cet ordre :
   - publications Facebook ou Instagram de l’agence qui nomment l’hôtel ;
   - site officiel de l’hôtel ou de la chaîne ;
   - galerie d’un partenaire de réservation fiable ;
   - Wikimedia Commons ou autre source avec licence claire.
3. Si une publication sociale contient plusieurs établissements, n’utilise une
   image que si le visuel ou la légende permet d’identifier l’hôtel sans doute.
4. N’utilise pas une simple photo de destination pour représenter un hôtel.
5. N’invente ni ne génère une photo d’hôtel. Si aucune photo fiable n’est
   trouvée, conserve le visuel d’attente existant.
6. Enregistre la page source de chaque image dans `docs/PHOTO_SOURCES.md`.

## Budget d’images

- Minimum : **1 bonne photo** par hôtel quand une source fiable existe.
- Cible : **2 ou 3 photos différentes** par hôtel.
- Maximum par défaut : **3 photos** ; accepte une 4e uniquement si elle apporte
  une vue réellement différente.
- Priorité visuelle :
  1. extérieur, piscine ou plage ;
  2. chambre ou intérieur ;
  3. équipement distinctif (aquapark, spa, restaurant, jardin).
- Élimine les doublons, les vues presque identiques, les logos seuls, les
  affiches promotionnelles et les photos trop petites ou très compressées.

## Optimisation des fichiers

1. Télécharge les fichiers dans `assets/img/hotels/` ; ne fais pas de hotlink.
2. Utilise un nom lisible : `nom-hotel-1.jpg`, `nom-hotel-2.jpg`, etc.
3. Redimensionne à **1 200–1 400 px maximum** sur le plus grand côté.
4. Vise **moins de 250 Ko par image** et évite de dépasser 400 Ko.
5. Utilise JPEG optimisé pour les photos ou WebP si le code du site le gère.
6. Conserve un cadrage exploitable avec `object-fit: cover` et charge les images
   secondaires avec `loading="lazy"` et `decoding="async"`.

## Intégration dans les données

Utilise le champ `images` de l’hôtel :

```js
{
  nom: 'Nom exact de l’hôtel',
  ville: 'Ville',
  etoiles: 4,
  formule: 'Tout compris',
  images: [
    'assets/img/hotels/nom-hotel-1.jpg',
    'assets/img/hotels/nom-hotel-2.jpg'
  ]
}
```

Le champ historique `image` peut rester pris en charge pour une photo unique,
mais toute nouvelle galerie doit utiliser `images`.

## Présentation attendue

- Une photo : grand visuel horizontal.
- Deux photos : grille équilibrée en deux colonnes.
- Trois photos : mosaïque avec une grande image et deux vues secondaires.
- Quatre photos : mosaïque compacte, sans augmenter fortement la hauteur.
- Un clic ouvre la photo dans la visionneuse commune avec précédent/suivant.
- Le nom, les étoiles, la formule et le bouton **Tarifs & détails** restent dans
  la même carte, immédiatement sous les images.
- Une seule visionneuse globale est autorisée pour toute la page.

## Vérifications avant livraison

1. Toutes les images locales existent et se chargent sans erreur 404.
2. Chaque photo correspond réellement à l’hôtel indiqué.
3. La mosaïque reste lisible sur mobile et ordinateur.
4. La visionneuse s’ouvre, se ferme et navigue au clavier.
5. Les tarifs et détails de chaque hôtel sont toujours dans sa propre carte.
6. La page ne charge pas inutilement toutes les images hors écran.
7. Les sources sont documentées, puis les changements sont commités et poussés
   sur GitHub si la demande l’exige.

---

**Principe directeur :** mieux vaut une seule photo exacte, nette et légère que
plusieurs images incertaines, répétitives ou lourdes.
