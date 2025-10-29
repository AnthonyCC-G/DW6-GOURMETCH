# 🍽️ GourmeTech

**Plateforme de recettes culinaires interactive**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 📖 À propos du projet

GourmeTech est une application web moderne et intuitive développée en **HTML5, CSS3 et JavaScript vanilla**. Cette plateforme permet aux passionnés de cuisine de découvrir, rechercher, générer et sauvegarder des recettes du monde entier.

Le projet a été réalisé dans le cadre d'une formation en développement web (septembre 2025 - février 2026), et démontre l'application de concepts fondamentaux du développement front-end dans un contexte réaliste.

### 🎯 Objectifs pédagogiques

- Structurer une application web multi-pages avec HTML sémantique
- Créer des interfaces responsive adaptées à tous les appareils
- Manipuler le DOM de manière dynamique avec JavaScript
- Intégrer une API REST externe (TheMealDB)
- Gérer la persistance des données côté client avec localStorage
- Implémenter des animations et interactions fluides
- Respecter les normes d'accessibilité web (WCAG)

---

## ✨ Fonctionnalités

### 🔍 Fonctionnalités principales (TP1)

- **Recherche dynamique** : Barre de recherche avec filtrage en temps réel des recettes
- **Filtres avancés** : Par catégorie, temps de préparation et niveau de difficulté
- **Système de favoris** : Sauvegarde de recettes favorites avec localStorage
- **Mode sombre** : Thème clair/sombre avec persistance de la préférence utilisateur
- **Navigation responsive** : Menu burger adaptatif pour mobile et tablette
- **Page À propos** : Système d'onglets interactif et FAQ avec accordéon
- **Formulaire de contact** : Validation complète avec notifications visuelles
- **Accessibilité** : Respect des normes WCAG de base

### 🎲 Générateur de recettes (TP2)

- **Intégration API TheMealDB** : Génération de recettes aléatoires du monde entier
- **Affichage dynamique** : Extraction et affichage automatique des données
  - Image haute résolution
  - Nom du plat
  - Catégorie et origine
  - Liste complète des ingrédients avec mesures
  - Instructions détaillées de préparation
- **Gestion des erreurs** : Affichage de messages clairs en cas de problème réseau
- **Interface cohérente** : Design aligné avec le reste de l'application

---

## 🛠️ Technologies utilisées

### Front-end
- **HTML5** : Structure sémantique et accessible
- **CSS3** : Flexbox, Grid, Variables CSS, Animations
- **JavaScript (ES6+)** : Vanilla JS, Async/Await, Fetch API, DOM Manipulation

### Stockage & API
- **localStorage** : Persistance des favoris et préférences utilisateur
- **TheMealDB API** : Base de données de recettes mondiale ([Documentation](https://www.themealdb.com/api.php))

### Outils de développement
- **Git** : Gestion de version avec workflow par branches
- **VS Code** : Éditeur de code avec extensions (HTML CSS Support)

### Contraintes respectées
✅ Aucun framework ou bibliothèque externe  
✅ Code valide W3C  
✅ Compatible Chrome, Firefox, Safari, Edge  
✅ Responsive design avec 3 breakpoints  

---

## 📦 Installation et lancement

### Prérequis

- Un navigateur web moderne (Chrome, Firefox, Safari ou Edge)
- Un éditeur de code (VS Code recommandé)
- Git (pour cloner le projet)

### Étapes d'installation

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/votre-username/GourmeTech.git
   cd GourmeTech
   ```

   ou 

   cliquer sur ce lien : https://anthonycc-g.github.io/DW6-GOURMETCH/


2. **Ouvrir le projet**
   - Ouvrir le dossier dans votre éditeur de code
   - Aucune installation de dépendances n'est nécessaire (projet vanilla)

3. **Lancer l'application**
   - Ouvrir `index.html` avec votre navigateur
   - Ou utiliser l'extension "Live Server" dans VS Code pour un rechargement automatique

### Accès direct aux pages

- **Page d'accueil** : `index.html`
- **Générateur de recettes** : `generer.html`
- **Mes favoris** : `favoris.html`
- **À propos** : `a-propos.html`
- **Détail d'une recette** : `recette.html`

---

## 📂 Structure du projet

```
gourmeTech/
│
├── index.html              # Page d'accueil avec liste des recettes
├── generer.html            # Générateur de recettes aléatoires (API)
├── recette.html            # Template pour l'affichage d'une recette
├── favoris.html            # Page des recettes favorites
├── a-propos.html           # Page à propos du site
│
├── main.js                 # Logique principale (recherche, filtres, favoris, thème)
├── generer.js              # Gestion du générateur et de l'API TheMealDB
├── styles.css              # Styles globaux et responsive
│
├── TP_1_*.pdf             # Consignes du TP1 (fonctionnalités de base)
└── TP_2_*.pdf             # Consignes du TP2 (intégration API)
```

---

## 🎨 Guide d'utilisation

### Navigation générale

1. **Menu principal** : Accédez aux différentes pages via la navigation en haut
2. **Mode sombre** : Cliquez sur l'icône 🌙 pour basculer entre les thèmes
3. **Menu mobile** : Sur petit écran, utilisez l'icône hamburger (☰) pour ouvrir le menu

### Recherche et filtres

1. **Barre de recherche** : Tapez le nom d'une recette pour filtrer en temps réel
2. **Filtres** :
   - Catégorie : Choisissez entrée, plat principal ou dessert
   - Temps : Sélectionnez un temps de préparation maximum
   - Difficulté : Filtrez par niveau (facile, moyen, difficile)
3. **Réinitialiser** : Cliquez sur "Réinitialiser" pour effacer tous les filtres

### Générateur de recettes

1. Accédez à la page "Générer une recette"
2. Cliquez sur le bouton "Générer une recette aléatoire"
3. Patientez pendant le chargement (loader animé)
4. Découvrez une nouvelle recette avec tous ses détails
5. Cliquez à nouveau pour générer une autre recette

### Système de favoris

1. Cliquez sur l'icône ❤️ sur une carte de recette
2. La recette est automatiquement sauvegardée
3. Retrouvez toutes vos recettes favorites dans la page "Mes favoris"
4. Retirez une recette des favoris en cliquant à nouveau sur ❤️

### Page À propos

- **Onglets** : Cliquez sur "Notre histoire", "Notre équipe" ou "Nos valeurs"
- **FAQ** : Cliquez sur une question pour afficher la réponse (accordéon)
- **Formulaire de contact** : Remplissez tous les champs obligatoires pour nous contacter

---

## 🌐 API TheMealDB

### Présentation

L'API TheMealDB est une base de données collaborative gratuite qui fournit des informations sur des milliers de recettes du monde entier.

### Endpoint utilisé

```javascript
https://www.themealdb.com/api/json/v1/1/random.php
```

### Structure de la réponse

```json
{
  "meals": [
    {
      "idMeal": "52771",
      "strMeal": "Spicy Arrabiata Penne",
      "strCategory": "Vegetarian",
      "strArea": "Italian",
      "strInstructions": "...",
      "strMealThumb": "https://...",
      "strIngredient1": "penne rigate",
      "strMeasure1": "1 pound",
      ...
    }
  ]
}
```

### Implémentation technique

```javascript
// Fonction async/await pour récupérer une recette aléatoire
async function fetchRandomRecipe() {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const data = await response.json();
    return data.meals[0];
  } catch (error) {
    console.error('Erreur lors de la récupération de la recette:', error);
  }
}
```

### Extraction dynamique des ingrédients

Les ingrédients sont stockés dans les propriétés `strIngredient1` à `strIngredient20`. Le code parcourt ces propriétés et extrait uniquement celles qui contiennent une valeur.

---

## 📱 Responsive Design

Le site s'adapte automatiquement à toutes les tailles d'écran grâce à trois breakpoints principaux :

### 🖥️ Desktop (> 1024px)
- Navigation horizontale complète
- Grille de 3 cartes par ligne
- Filtres alignés sur une ligne
- Layout à deux colonnes sur la page "À propos"

### 📱 Tablette (768px - 1024px)
- Menu burger avec overlay
- Grille de 2 cartes par ligne
- Filtres sur deux lignes
- Mise en page adaptée

### 📱 Mobile (< 768px)
- Menu burger avec navigation verticale
- Grille d'1 carte par ligne
- Filtres empilés verticalement
- Interface optimisée pour le tactile

### Techniques CSS utilisées

- **Flexbox** : Pour les alignements et distributions flexibles
- **Grid** : Pour les mises en page en grille (cartes de recettes)
- **Media Queries** : Pour les breakpoints responsive
- **Variables CSS** : Pour une maintenance facile des couleurs et dimensions

---

## 👥 Équipe de développement

### 👨‍💻 Anthony
**Développeur Frontend Lead**

**Responsabilités :**
- Architecture globale HTML (header, navigation, recherche)
- Développement CSS (header, filtres, page À propos, footer)
- Logique JavaScript (dark mode, menu burger, onglets, FAQ, recherche, filtres)
- Intégration complète de l'API TheMealDB (`generer.html` et `generer.js`)
- Responsive design sur tous les breakpoints
- Git workflow et gestion des branches

### 👨‍💻 Diogo
**Développeur Frontend**

**Responsabilités :**
- Architecture HTML (main, cards, footer)
- Développement CSS (cards, footer, page recette)
- Système de favoris avec localStorage
- Responsive design des cartes et contenu principal

---

## 🔄 Workflow Git

Le projet utilise une organisation rigoureuse en branches pour séparer les fonctionnalités :

### Branches principales
- `main` : Branche principale stable avec le code de production
- Branches features : Format `JS-XX-FONCTIONNALITE---PRENOM`

### Exemples de branches créées
- `JS-01-DARK-MODE---ANTHONY`
- `JS-02-MENU-BURGER---ANTHONY`
- `JS-08-OPTIMISATIONS---ANTHONY`

### Commandes Git essentielles

```bash
# Créer une nouvelle branche de feature
git checkout -b JS-XX-MA-FONCTIONNALITE---PRENOM

# Ajouter et commiter des modifications
git add .
git commit -m "Description claire de la modification"

# Fusionner une branche dans main
git checkout main
git merge JS-XX-MA-FONCTIONNALITE---PRENOM

# Pousser vers le dépôt distant
git push origin nom-de-la-branche
```

---

## ✅ Fonctionnalités bonus réalisées

- ✅ **Loader animé** : Affichage d'un spinner pendant les appels API
- ✅ **Notifications visuelles** : Messages de succès/erreur pour les actions utilisateur
- ✅ **Animations fluides** : Transitions CSS sur les interactions (hover, focus)
- ✅ **Thème persistant** : Sauvegarde de la préférence de thème dans localStorage
- ✅ **Menu burger animé** : Transformation de l'icône hamburger en croix
- ✅ **FAQ accordéon** : Ouverture/fermeture fluide des questions
- ✅ **Validation formulaire** : Vérification en temps réel des champs
- ✅ **Accessibilité** : Attributs ARIA et navigation au clavier

---

## 🎓 Compétences démontrées

### HTML
- Utilisation de balises sémantiques (`header`, `nav`, `main`, `section`, `article`, `footer`)
- Attributs `data-*` pour stocker des informations personnalisées
- Attributs d'accessibilité (`aria-label`, `aria-expanded`, `role`)
- Structure de formulaire avec labels associés

### CSS
- Mise en page moderne avec **Flexbox** et **Grid**
- Variables CSS (`--primary-color`, `--spacing-unit`, etc.)
- Media Queries pour le responsive design
- Animations et transitions fluides
- Thème clair/sombre avec `data-theme`

### JavaScript (ES6+)
- Manipulation avancée du DOM
- Gestion d'événements (`addEventListener`)
- Fonctions asynchrones (`async/await`)
- Fetch API pour les requêtes HTTP
- localStorage pour la persistance
- Gestion d'erreurs avec `try/catch`
- Fonctions fléchées et destructuration

### Bonnes pratiques
- Code commenté et documenté
- Nommage cohérent des variables et fonctions
- Séparation des préoccupations (HTML/CSS/JS)
- Validation W3C
- Accessibilité (WCAG)
- Workflow Git organisé

---

## 📈 Évolutions possibles

Le projet GourmeTech peut être enrichi avec les fonctionnalités suivantes :

- 🔍 **Recherche avancée par ingrédients** avec l'API TheMealDB
- ⭐ **Système de notation** des recettes par les utilisateurs
- 🖼️ **Galerie d'images** pour chaque recette
- 🖨️ **Mode impression** optimisé pour les recettes
- 💬 **Système de commentaires** sur les recettes
- 📤 **Partage social** sur les réseaux sociaux
- 🌍 **Internationalisation** (i18n) multi-langues
- 📊 **Statistiques personnelles** (recettes consultées, favorites, etc.)
- 🔐 **Authentification** avec backend pour synchroniser les favoris
- 📝 **Ajout de recettes personnelles** par les utilisateurs

---

## 📄 Licence

Ce projet est développé dans le cadre d'un **projet pédagogique** de formation en développement web.

© 2025 GourmeTech - Tous droits réservés

---

## 🙏 Remerciements

- Merci à l'équipe pédagogique pour l'accompagnement tout au long du projet
- Merci à [TheMealDB](https://www.themealdb.com/) pour son API gratuite et bien documentée
- Merci à la communauté MDN Web Docs pour la documentation de référence

---

## 📞 Contact

Pour toute question sur le projet, suggestion d'amélioration ou signalement de bug :

- 📧 Ouvrir une issue sur GitHub
- 💬 Utiliser le formulaire de contact sur le site

---

**Développé avec ❤️ par Anthony & Diogo**

*Dernière mise à jour : Octobre 2025*  
*Version : 2.0.0 (avec intégration API TheMealDB)*
