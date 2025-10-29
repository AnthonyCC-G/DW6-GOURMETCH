🍽️ GourmeTech
Version HTML5 CSS3 JavaScript

GourmeTech est une plateforme de recettes culinaires interactive développée en HTML, CSS et JavaScript vanilla. Le projet permet de découvrir, rechercher et sauvegarder des recettes, avec une intégration de l'API TheMealDB pour générer des recettes aléatoires.

📋 Table des matières
Aperçu du projet
Fonctionnalités
Technologies utilisées
Installation
Structure du projet
Utilisation
API TheMealDB
Responsive Design
Équipe
Licence
🎯 Aperçu du projet
GourmeTech est une application web moderne qui offre une expérience complète pour les passionnés de cuisine :

Explorer des recettes avec un système de recherche et filtres avancés
Découvrir de nouvelles recettes grâce à l'intégration de l'API TheMealDB
Sauvegarder vos recettes favorites (WIP)
Personnaliser votre expérience avec un mode sombre
Naviguer facilement sur tous les appareils (desktop, tablette, mobile)
✨ Fonctionnalités
Fonctionnalités principales (TP1)
✅ Recherche de recettes : Barre de recherche dynamique avec filtrage en temps réel
✅ Filtres multiples : Par catégorie, temps de préparation et difficulté 
✅ Gestion de favoris
✅ Mode sombre : Thème clair/sombre avec sauvegarde de la préférence
✅ Navigation responsive : Menu burger pour mobile et tablette
✅ Page À propos : Avec système d'onglets et FAQ accordéon
✅ Formulaire de contact : Validation des champs avec notifications
✅ Accessibilité : Respect des normes de base

Nouvelle fonctionnalité (TP2)
✨ Générateur de recettes aléatoires :

Génération de recettes via l'API TheMealDB
Affichage dynamique des informations (image, nom, origine, ingrédients, instructions)
Gestion des erreurs réseau
Interface cohérente avec le reste du site
🛠️ Technologies utilisées
HTML5 : Structure sémantique et accessible
CSS3 : Flexbox, Grid, variables CSS, animations
JavaScript (ES6+) : Vanilla JS, async/await, fetch API
LocalStorage : Persistance des données côté client
API REST : TheMealDB (https://www.themealdb.com/api.php)
Contraintes respectées :

Aucun framework ni bibliothèque externe
Compatible avec Chrome, Firefox, Safari, Edge
Code valide selon les standards W3C
📦 Installation
Prérequis
Un navigateur web moderne (Chrome, Firefox, Safari ou Edge)
Un éditeur de code (VS Code recommandé)
Git pour cloner le projet
Étapes d'installation
Cloner le dépôt

git clone https://github.com/votre-username/GourmeTech.git
cd GourmeTech
Ouvrir le projet

Ouvrir le dossier dans votre éditeur de code
Lancer index.html avec un serveur local ou directement dans le navigateur
Utilisation avec Live Server (recommandé)

Installer l'extension "Live Server" dans VS Code
Clic droit sur index.html → "Open with Live Server"
ou
Cliquer sur le lien suivant : https://anthonycc-g.github.io/DW6-GOURMETCH pour accéder au site directement Déploiement : Github free

📁 Structure du projet
GourmeTech/
│
├── index.html              # Page d'accueil avec recherche et liste de recettes
├── recette.html            # Page détail d'une recette
├── favoris.html            # Page des recettes favorites
├── a-propos.html           # Page à propos avec onglets et FAQ
├── generer.html            # Générateur de recettes aléatoires (API)
│
├── css/
│   └── styles.css          # Styles principaux (thème, responsive, animations)
│
├── js/
│   ├── main.js             # Script principal (recherche, filtres, favoris)
│   └── generer.js          # Script dédié à l'API TheMealDB
│
├── assets/
│   ├── images/             # Images des recettes et logo
│   └── icons/              # Icônes (favoris, menu, etc.)
│
└── README.md               # Documentation du projet
🚀 Utilisation
Page d'accueil (index.html)
Rechercher une recette :

Taper le nom d'une recette dans la barre de recherche
Les résultats se filtrent automatiquement
Utiliser les filtres :

Sélectionner une catégorie (Entrée, Plat, Dessert)
Choisir un temps de préparation
Définir un niveau de difficulté
Les filtres se cumulent pour affiner les résultats
Ajouter aux favoris :

Cliquer sur l'icône cœur sur une carte de recette
La recette est sauvegardée dans le localStorage
Activer le mode sombre :

Cliquer sur l'icône lune/soleil en haut à droite
Votre préférence est automatiquement sauvegardée
Page "Générer une recette" (generer.html)
Intro : pour y accéder : taper "flem" dans la barre de recherche pour voir apparaitre la carte "secrète"

Générer une recette aléatoire :

Cliquer sur le bouton "Générer une recette"
Une recette aléatoire est récupérée depuis l'API TheMealDB
Les informations s'affichent dynamiquement (image, nom, origine, ingrédients, instructions)
Générer une nouvelle recette :

Cliquer à nouveau sur "Générer une recette"
Une nouvelle recette remplace la précédente
Page À propos (a-propos.html)
Navigation par onglets :

Cliquer sur "Présentation" pour découvrir l'équipe
Cliquer sur "F.A.Q." pour les questions fréquentes
FAQ avec accordéon :

Cliquer sur une question pour afficher la réponse
Cliquer à nouveau pour la fermer
Formulaire de contact :

Remplir tous les champs obligatoires
Une notification apparaît en cas d'erreur ou de succès
🌐 API TheMealDB
Présentation de l'API
L'API TheMealDB est une API publique et gratuite qui fournit des informations sur des milliers de recettes du monde entier.

Fonctionnalités implémentées
Récupération d'une recette aléatoire avec fetch()
Extraction dynamique des ingrédients (de strIngredient1 à strIngredient20)
Affichage dynamique dans le DOM
Gestion des erreurs réseau avec try/catch
Loader animé pendant le chargement
📱 Responsive Design
Le site s'adapte à toutes les tailles d'écran grâce à trois breakpoints principaux :

🖥️ Desktop (> 1024px)
Navigation horizontale complète
Grille de 3 cartes par ligne
Filtres sur une ligne
Layout à deux colonnes sur la page "À propos"
📱 Tablette (768px - 1024px)
Menu burger avec overlay
Grille de 2 cartes par ligne
Filtres sur deux lignes
Layout adapté
📱 Mobile (< 768px)
Menu burger avec navigation verticale
Grille d'1 carte par ligne
Filtres empilés verticalement
Interface optimisée pour le tactile
👨‍💻 Équipe
Anthony
Rôle : Développeur Frontend
Responsabilités :

Architecture HTML (header, recherche, navigation)
Styles CSS (header, filtres, page À propos + footer)
JavaScript (dark mode, menu burger, onglets, FAQ, filtres, recherche)
Intégration de l'API TheMealDB (generer.html et generer.js)
Responsive design complet
Git workflow et gestion des branches
Diogo
Rôle : Développeur Frontend
Responsabilités :

Architecture HTML (main, cards, footer)
Styles CSS (cards, footer, page recette)
Système de favoris
Responsive des cartes et du contenu principal
🔄 Workflow Git
Le projet utilise une organisation en branches pour séparer les fonctionnalités :

main : Branche principale stable
📝 Fonctionnalités bonus réalisées
✅ Loader animé pour les appels API
✅ Notifications visuelles pour les actions utilisateur

📄 Licence
Ce projet est développé dans le cadre d'un projet pédagogique de formation en développement web.
© 2025 GourmeTech - Tous droits réservés

🙏 Remerciements
Merci à tous les contributeurs de ce projet éducatif et à l'API TheMealDB pour son service gratuit.

Développé avec ❤️ par Anthony & Diogo

📞 Contact
Pour toute question sur le projet ou suggestion d'amélioration, n'hésitez pas à ouvrir une issue sur GitHub.

Dernière mise à jour : Octobre 2025
Version : 2.0.0 (avec intégration API TheMealDB)