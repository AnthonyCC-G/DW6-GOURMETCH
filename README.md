# DW6-GOURMETCH
# 🍽️ GourmeTech

![Version](https://img.shields.io/badge/version-1.0.0-orange)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

**GourmeTech** est une plateforme de recettes culinaires interactive développée dans le cadre d'un projet pédagogique. 

---


## 🎯 Aperçu du projet

GourmeTech est une application web qui offre :
- Une interface intuitive pour explorer des recettes
- Un système de recherche et de filtres avancés
- Un mode sombre pour une meilleure expérience utilisateur
- Une navigation responsive adaptée à tous les écrans
- Un système de favoris pour sauvegarder vos recettes préférées

---

## ✨ Fonctionnalités

### Fonctionnalités principales

✅ **Recherche de recettes** : Barre de recherche dynamique avec filtrage en temps réel  
✅ **Filtres multiples** : Par catégorie, temps de préparation et difficulté  
✅ **Mode sombre** : Thème clair/sombre avec sauvegarde de la préférence  
✅ **Navigation responsive** : Menu burger pour mobile et tablette  
✅ **Système d'onglets** : Navigation par onglets sur la page "À propos"  
✅ **FAQ avec accordéon** : Questions fréquentes avec animation d'ouverture/fermeture  
✅ **Formulaire de contact** : Pour entrer en contact avec l'équipe  
✅ **Favoris** : en cours

---

## 🛠️ Technologies utilisées

- **HTML5** : Structure sémantique des pages
- **CSS** : Styles, animations et responsive design
- **JavaScript** : Interactivité et manipulation du DOM
- **LocalStorage** : Sauvegarde des préférences utilisateur

---

## 📁 Structure du projet

```
GourmeTech/
│
├── index.html              # Page d'accueil avec recherche et cartes
├── recette.html            # Page détail d'une recette
├── favoris.html            # Page des recettes favorites
├── a-propos.html           # Page à propos avec onglets et FAQ
│
├── css/
│   └── styles.css          # Fichier CSS principal
│
├── js/
│   └── main.js             # Fichier JavaScript principal
│
├── assets/
│   ├── images/             # Images des recettes et logo
│   └── icons/              # Icônes (favoris, ingrédients, etc.)
│
└── README.md               # Documentation du projet
```

---

## 👥 Répartition du travail

### 🔵 Anthony - Développeur Frontend

#### HTML
- ✅ Structure complète du **header** (logo, navigation, bouton darkmode)
- ✅ Section de **recherche et filtres** (index.html)
- ✅ Structure du **footer** (toutes les pages)
- ✅ Page **"À propos"** (a-propos.html) :
  - Système d'onglets (Présentation / FAQ)
  - Accordéon FAQ
  - Formulaire de contact

#### CSS
- ✅ Styles du **header** et de la navigation
- ✅ Styles de la **section recherche** et des filtres
- ✅ **Mode sombre** complet (dark-mode) pour toutes les pages
- ✅ Styles de la **page "À propos"** :
  - Onglets interactifs
  - Accordéon FAQ
  - Formulaire de contact
- ✅ **Responsive design** (tablette et mobile et très petits smartphone) :
  - Menu burger
  - Adaptation des filtres
  - Layout responsive pour la page "À propos"
  
- ✅ Styles du **footer**
  - Navigation footer
  - Section "À propos"
  - Copyright

#### JavaScript
- ✅ **Fonction Dark Mode** (`toggleDarkMode()`)
  - Basculement du thème clair/sombre
  - Sauvegarde dans LocalStorage
  - Initialisation au chargement de la page
  
- ✅ **Menu Burger** (`toggleMenu()`)
  - Animation d'ouverture/fermeture
  - Overlay avec fermeture au clic
  - Gestion du scroll
  
- ✅ **Système d'onglets** (`switchOnglet()`)
  - Navigation entre "Présentation" et "FAQ"
  - Gestion des classes actives
  - Animation de transition
  
- ✅ **Accordéon FAQ**
  - Ouverture/fermeture des questions
  - Animation fluide
  - Icône rotative
  
- ✅ **Barre de recherche** (fonction de recherche)
  - Filtrage en temps réel des recettes
  - Événement `keyup` sur l'input
  - Affichage/masquage des cartes selon la recherche
  
- ✅ **Système de filtres**
  - Filtre par catégorie (Entrée, Plat, Dessert)
  - Filtre par temps de préparation (Rapide, Moyen, Long)
  - Filtre par difficulté (Facile, Moyen, Difficile)
  - Fonction `appliquerFiltres()` avec combinaison des filtres
  - Utilisation des datasets HTML pour les données

---

### 🟢 Diogo - Développeur Frontend

#### HTML
- ✅ Structure du **main** avec les cartes de recettes
- ✅ Page **recette.html** (détail d'une recette)
- ✅ Page **favoris.html**
- ✅ Structure du **footer** (toutes les pages)

#### CSS
- ✅ Styles des **cards** (cartes de recettes)
  - Layout des cartes
  - Images des recettes
  - Badges de catégorie, temps et difficulté
  - Bouton "Voir la recette"
  - Bouton favori (like)
  
- ✅ Styles de la **page recette**
  - Photo de la recette
  - Étapes de préparation
  - Liste des ingrédients
  
- ✅ **Responsive des cards** (tablette et mobile)
  - Adaptation du nombre de colonnes
  - Ajustement des tailles

#### JavaScript
- 🔄 **Section prévue** pour :
  - Gestion dynamique des favoris
  - Affichage dynamique des cartes
  - Interaction avec le bouton "like"

---

## 🚀 Installation

### Prérequis
- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Un éditeur de code (VS Code recommandé)

### Étapes d'installation

1. **Cloner ou télécharger le projet**
```bash
git clone https://github.com/AnthonyCC-G/DW6-GOURMETCH.git
```

2. **Ouvrir le projet**
```bash
cd gourmetech
```

3. **Lancer le projet**
   - Ouvrir `index.html` dans votre navigateur
   - Ou utiliser l'extension "Live Server" de VS Code

---

## 💡 Utilisation

### Page d'accueil (index.html)

1. **Rechercher une recette** :
   - Taper dans la barre de recherche
   - Les résultats se filtrent en temps réel

2. **Utiliser les filtres** :
   - Cocher les catégories souhaitées (Entrée, Plat, Dessert)
   - Sélectionner un temps de préparation
   - Choisir une difficulté
   - Les filtres se combinent automatiquement

3. **Activer le mode sombre** :
   - Cliquer sur l'icône lune en haut à droite
   - Votre préférence est sauvegardée

### Page "À propos" (a-propos.html)

1. **Navigation par onglets** :
   - Cliquer sur "Présentation" pour voir le CEO
   - Cliquer sur "F.A.Q." pour les questions fréquentes

2. **FAQ** :
   - Cliquer sur une question pour afficher la réponse
   - Cliquer à nouveau pour la fermer

3. **Formulaire de contact** :
   - Remplir tous les champs

---

## 📱 Responsive Design

Le site est entièrement responsive et s'adapte à trois tailles d'écran :

### 🖥️ Desktop (> 1024px)
- Navigation horizontale complète
- 3 cartes par ligne
- Filtres sur une seule ligne
- Layout à deux colonnes sur la page "À propos"

### 📱 Tablette (768px - 1024px)
- Menu burger
- 2-3 cartes par ligne
- Filtres sur deux lignes
- Page "À propos" en une colonne

### 📱 Mobile (< 768px)
- Menu burger avec overlay
- 1 carte par ligne
- Filtres empilés verticalement
- Layout optimisé pour le tactile

---

## 👨‍💻 Équipe

### Anthony
**Rôle** : Développeur Frontend  
**Responsabilités** :
- Architecture HTML du header et de la recherche
- Styles CSS pour le header, filtres et page "À propos"
- JavaScript pour le dark mode, menu burger, onglets, FAQ et filtres
- Responsive design complet

### Diogo
**Rôle** : Développeur Frontend  
**Responsabilités** :
- Architecture HTML du main et des cartes
- Styles CSS pour les cards, le footer et la page recette
- Préparation du système de favoris
- Responsive des cartes

---

## 📝 Fonctionnalités à venir

- [ ] Ajout dynamique de recettes
- [ ] Sélection de recettes aléatoires

---

## 📄 Licence

Ce projet est développé dans le cadre d'un projet pédagogique.  
© 2025 GourmeTech - Tous droits réservés

---

## 🙏 Remerciements

Merci à tous les contributeurs de ce projet éducatif.  
**Anthony & Diogo ** 🚀

---

## 📞 Contact

Pour toute question ou suggestion, merci de ne pas nous contacter (il s'agit d'un exercice) ou contacter directement JEFF TOCHE

---

**Fait par Anthony & Diogo**
