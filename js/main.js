//===========================================
//GOURMETECH - Script Principal
//Auteurs : Anthony & Diogo
//==========================================

// --- DÉBUT DES AJOUTS / MODIFICATIONS ---

// 1. Déplacer et Compléter le 'allRecipesData'
//    Mettez ceci au DÉBUT de votre fichier main.js, après les commentaires d'en-tête,
//    afin qu'il soit accessible globalement par toutes les fonctions.
//    Assurez-vous que TOUTES vos recettes de l'index.html sont présentes ici
//    et que l'ID correspond EXACTEMENT au texte de votre H2 dans les cards.
const allRecipesData = [
    {
        id: "Pasteis de Chaves",
        image: "assets/images/pasteisdechaves.jpg",
        description: "De délicieux chaussons portugais farcis à la viande.",
        categorie: "entree",
        temps: "25 min", // Temps affiché
        tempsNum: 25,    // Temps numérique pour data-temps
        difficulte: "Moyen",
        link: "recette.html" // Lien générique, à adapter si vous avez des pages spécifiques
    },
    {
        id: "Rougail Saucisse",
        image: "assets/images/rougail_saucisses.png",
        description: "Un plat réunionnais épicé et savoureux avec des saucisses fumées.",
        categorie: "plat",
        temps: "60 min",
        tempsNum: 60,
        difficulte: "Difficile",
        link: "recette.html"
    },
    {
        id: "Pizza Margerita",
        image: "assets/images/pizzamargerita.jpg",
        description: "La classique pizza italienne, simple et efficace.",
        categorie: "plat",
        temps: "15 min",
        tempsNum: 15,
        difficulte: "Facile",
        link: "recette.html"
    },
    // AJOUTEZ ICI TOUTES VOS AUTRES RECETTES DE L'INDEX.HTML
    // Exemple si vous avez d'autres cards:
    // {
    //     id: "Salade César",
    //     image: "assets/images/salade-cesar.jpg",
    //     description: "Une salade fraîche et croquante.",
    //     categorie: "entree",
    //     temps: "20 min",
    //     tempsNum: 20,
    //     difficulte: "Facile",
    //     link: "recette.html"
    // }
];

// --- FIN DES AJOUTS / MODIFICATIONS ---


//---  PARTIE ANTHONY ----------------------
//==========================================

//== DARK MODE=============================
//=========================================

//Sélection du bouton avec ID et stockage dans une variable
const themeToggle = document.querySelector("#theme-toggle");


//--FUNCTION DARK MODE --
//========================

//la fonction toggleDarkMode ajoute ou retire la classe dark-mode
//Fonction toggleDarkMode : ajoute ou retire la classe 'dark-mode '
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    //Sauvegarde dans le local storage : le theme
    //"contains ('dark-mode')", permet de vérifier si la classe est sur le body.
    //sauvegarde cette valeur dans le local storage
    const darkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', darkMode);
}

//Au chargement de la page
function initialise () {
    const saveTheme = localStorage.getItem('darkMode');
    if (saveTheme === 'true') {
        document.body.classList.add('dark-mode');
    }

    // if = Vérification
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleDarkMode);
    }
}

//Appel de la fonction 
initialise();

//--- FIN DU DARK MODE --------------------
//=========================================


// --- MENU BURGER -------------------------
//==========================================

/* Menu Burger :
    - Gestion de l'ouverture/fermeture du menu responsive
    - Optimisation : vérification de l'existence des éléments avant d'ajouter les écouteurs d'évènements
    pour éviter les erreurs sur les pages sans menu buger
    - Version initiale : voir branche "JS-03-MENUBURGER---ANTHONY"

// Déclarez toggleMenu au niveau global ou avant son utilisation dans l'écouteur du body
let toggleMenu = function() { // Rendre la fonction accessible au-delà du if (burgerMenu && nav)
    if (burgerMenu && nav) { // Vérifier l'existence des éléments
        burgerMenu.classList.toggle('active'); // on active via le toggle la class .active (le css fait tout ici)
        nav.classList.toggle('active');
        document.body.classList.toggle('menu-open'); //menu-open = voir dans le CSS
    }
};

if (burgerMenu && nav) { // s'il existe un menu burger et une nav,
    // La fonction toggleMenu est déjà déclarée ci-dessus.
    burgerMenu.addEventListener('click', toggleMenu); // au clic
}

//écouteur click sur :
document.body.addEventListener('click', function(e) { // au click si l'utilisateur clique sur
    if (document.body.classList.contains('menu-open')) { //si le clic est sur le menu ouvert
        // Si le clic n'est PAS sur le burger ET n'est PAS sur la nav, alors on ferme le menu
        if (burgerMenu && nav && !burgerMenu.contains(e.target) && !nav.contains(e.target)) {
            toggleMenu(); // On ferme le menu
        }
    }
});

// on ferme le menu si le click est sur :
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(function(link) { // pour chaque lien de navigation
    link.addEventListener('click', function() { // il ne faut pas oublier si on est sur tablette ou smartphone,
        if (nav && nav.classList.contains('active')) { // Vérifier que nav existe avant d'accéder à classList
            toggleMenu();
    Source : 
    - Stack Overflow + IA Claude pour optimisation (article vieux sur Stack Overflow et traduction approximative)
*/

//Sélection des éléments 
const burgerMenu = document.querySelector('#burger-menu');
const nav = document.querySelector('nav');

function toggleMenu() {
    burgerMenu.classList.toggle('active'); //active ou désactive le bouton burger
    nav.classList.toggle('active'); //active ou désactive la nav
    document.body.classList.toggle('menu-open'); // ajoute ou retire l'ombrage sur la page
}

if (burgerMenu && nav) { // vérification défensive : il faut s'assurer que les éléments existent
    burgerMenu.addEventListener('click', toggleMenu); //  ouvre/ferme le menu au click sur le bouton

    document.body.addEventListener('click', function(e) { 
        if (document.body.classList.contains('menu-open')) {  
            if(!burgerMenu.contains(e.target) && !nav.contains(e.target)){ // si le clic n'est ni sur le burger ni sur la nav
                toggleMenu();
            }
        }
    });

    // Ferme le menu au clic sur un lien (UX mobile/tablette)
    const navLinks = document.querySelectorAll('nav a'); 
    navLinks.forEach(link => { // pour chaque lien de navigation + fonction fléchée
        link.addEventListener('click', () => { // fonction fléchée
            if (nav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
}

//--- FIN DU MENU BURGER -------------------
//==========================================


// --SYSTÈME D'ONGLETS SUR LA PAGE À PROPOS
//=========================================

// Sélection des éléments
const tabButtons = document.querySelectorAll('.tab-button, .tab-button-active');
const tabContents = document.querySelectorAll('.tab-content');

// Pour changer d'onglet
function switchOnglet(tabName) {
    tabButtons.forEach(button => { //pour chaque bouton
        button.classList.remove('tab-button-active'); // on enlève la classe .active
        button.classList.add('tab-button');

        // On ajoute la classe active au bouton cliqué
        if (button.dataset.tab === tabName) {
            button.classList.remove('tab-button');
            button.classList.add('tab-button-active');
        }
    });

    // Il faut chercher dans les contenus d'onglet,
    tabContents.forEach(content => {
        content.classList.remove('active'); // on enlève la classe "active"

        if (content.id === tabName + '-content') { // si l'id du contenu correspond,
            content.classList.add('active'); // on ajoute la classe active
        }
    });
}

// écouteur sur chaque bouton
if (tabButtons.length > 0) {
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            switchOnglet(tabName);
        });
    });
}


// --- ACCORDÉON FAQ -----------------------
//==========================================

// Sélection des questions de la FAQ
const faqQuestions = document.querySelectorAll('.faq-question');

// s'il y a présence de "faq-question" sur la page (si présence, cela veut dire qu'il y en a plus que 0),
if (faqQuestions.length > 0) {
    faqQuestions.forEach(question => { // pour chaque question cliquée
        question.addEventListener('click', function() {
            const faqItem = this.parentElement; // il faut récupérer la réponse associée ("This" renvoie à "question", ou l'enfant de l'élément parent qui est "faq-question")

            faqItem.classList.toggle('active'); //j'utilise la méthode toggle pour afficher oui ou non l'enfant.
        });
    });
}




// --- SEARCH BAR ------------------------
//========================================

//Sélection des éléments 
const searchBar = document.querySelector('#valSearchBar'); //la valeur tapée dans l'input
const btnRech = document.querySelector('#btn-recherche');//le bouton "rechercher"
// ATTENTION: `cards` doit être redéfini si le contenu est dynamique ou cibler uniquement les cards affichées.
// Pour l'index.html, cela fonctionne si les cards sont statiques.
// Si vous filtrez des favoris, `cards` devrait être mis à jour après `displayFavoriteCards()`.
const cards = document.querySelectorAll('.card-content'); // Garder pour l'index, mais sachez qu'il faudra le re-querry si le DOM change.

//écouteur d'évènement sur la "saisie" dans la barre de recherche LORSQU'une touche est
if (searchBar){
    searchBar.addEventListener("keyup", (e) => {
        const searchedText = e.target.value.toLowerCase(); //LowerCase permet de "convertir" en minuscule
        console.log('Texte saisie', searchedText); // pour voir le texte saisie dans la barre de recherche

        // parcourir toutes les "cards" actuellement dans le DOM
        // Re-sélectionner les cartes pour s'assurer qu'on travaille sur les cartes actuelles (en cas de re-render)
        const currentCards = document.querySelectorAll('.card-content');
        currentCards.forEach(card => {
            const recipeTitle = card.querySelector('h2').textContent.toLowerCase();
        if (searchedText === 'flem') { // la détection du code secret "flem" <== EASTER EGG
            afficherCarteSecrete(); //on affichera la carte secrète
            return; 
        }        

        //parcourir toutes les "cards"
        cards.forEach(card => { //pour chacune des "cards" présentent
            const recipeTitle = card.querySelector('h2').textContent.toLowerCase(); 
            //variable qui permettra de récupérer le titre "h2" de la recette dans la carte

            if(recipeTitle.includes(searchedText)) {// si le titre contient le texte recherché,
                card.style.display  = 'block';//on affiche la carte
            } else {
                card.style.display = 'none'; //sinon on la cache
            }
        });
    })
}

// --- CARTE SECRETE "FLEM" ----------
//====================================
function afficherCarteSecrete() {
    cards.forEach(card => { //dans un premier temps,
        card.style.display = 'none'; // on cache toutes les cartes normales
    });

    let carteSecrete = document.querySelector('.carte-secrete'); //déclaration de la carte secrete

    if (!carteSecrete) { // si la carte secrete n'existe pas, il faut la créer
        const mainCards = document.querySelector('.cards');
        carteSecrete = document.createElement('article'); //création de la carte secrète
        carteSecrete.className = 'card-content carte-secrete'; //pour de la cohérence, on reprend le même styles de card-content
        
        carteSecrete.innerHTML = `
        <img src = "assets/images/carte-flem.png" alt="J'ai la flemme de cuisiner" class="card-image" onerror="this.src='assets/images/images/logoGourmetech.png'">
        <h2 class="card-title-secret">Recette Aléatoire</h2>
        <div class="typologie">
            <p class="type"><span>Surprise</span></p>
            <p class="temps"><span> ? min</span></p>
            <p class="dificulte"><span>Mystère</span></p>
        </div>
        <a href="generer.html"><button class="Bouton">Générer une recette !</button></a>
        `; // onerror = aussi utiliser dans le langage VBA que je connais, ici sert à rattraper en cas d'erreur, ici si error, on affiche le logo GourmeTech

        mainCards.appendChild(carteSecrete); // le place dans le conteneur à cards

    } else { // sinon
        carteSecrete.style.display ='block'; //si la carte existe déjà, permet de la rendre visible
    }

}

//il faut empêcher le rechargement de la page lorsque l'on appuie sur le bouton "Rechercher"
const formR = document.querySelector('.search-filter form');
if (formR) { //<= parceque la barre de recherche ne se situe pas sur toutes les pages (vu erreur JS dans la console, JS tente de chercher un élément qui n'existe pas sur 3 pages)
    formR.addEventListener('submit', (e) => {
        e.preventDefault(); //empêche la fonctionnalité par défaut du bouton submit
    });
}

//--- LES FILTRES DE LA ZONE DE RECHERCHE ----
//============================================

/* FILTRES :
    - Utilisation de deux "Fonction utilitaire" (factoriser une fonction pour n'avoir à modifier qu'à un seul endroit)
    - utilisation d'une cndition ternaire (en fin de fonction)
    - Version initiale : voir branche "JS-02-SEARCH-BAR---ANTHONY"
    Source : 
    - Stack Overflow + MDN + IA Claude pour optimisation (traduction parfois pas correcte sur StackOverflow/Google traduction + MDN pour "filter" et "map")
*/

//--- LES FILTRES DE LA ZONE DE RECHERCHE ----
//============================================


//Sélection des éléments
const categorieCheckboxes = document.querySelectorAll('input[name="categorie[]"]');
const tempsCheckboxes = document.querySelectorAll('input[name="temps[]"]');
const difficulteCheckboxes = document.querySelectorAll('input[name="difficulte[]"]');

// Fonction utilitaire 1 = il faut récupérer les valeurs de toutes les checkboxes cochées
function getValeursCheckboxes(checkboxes) { 
    return Array.from(checkboxes) // les checkboxes ne sont pas sous format tableau, 'Array.from()' permet de convertir la valeur en 'vrai tableau' pour JS
        .filter(checkbox => checkbox.checked) // '.filter()' parcourt chaque checkbox et garde seulement celles qui sont cochées / cela créé un nouveau tableau avec QUE les checkboxes cochées
        .map(checkbox => checkbox.value);  // '.map()' transforme chaque élément du tableau / on veut la valeur de chaque élément du tableau après 'filter' 
}

// Fonction utilitaire 2 = il faut ajouter des écouteurs sur tout le groupe de checkboxes
function ajouterEcouteursCheckboxes(checkboxes) {
    if (checkboxes.length > 0) { // on vérifie qu'il y en a AU MOINS UNE valeur dans le tableau
        checkboxes.forEach(function(checkbox) { // pour chaque checkbox
            checkbox.addEventListener('change', appliquerFiltres); // écouteur 'change' dès lors que l'état 'change' ça déclenche la fonction 'appliquerFiltres'
        });
    }
}

// APPLIQUER LES FILTRES
function appliquerFiltres() {
    // d'abord, je créé des variables qui renvoie un tableau vide (utile pour facilité la suite)
    const categoriesSelectionnees = []; //categories
    const tempsSelectionnes = [];// temps
    const difficultesSelectionnees = []; // difficulte

    // checkboxes CATEGORIES
    categorieCheckboxes.forEach(function(checkbox) {
        if (checkbox.checked) { // le "if" c'est pour vérifier que l'on a bien des checkboxes sur la page (car toutes les pages ne comportent pas des checkboxs)
            categoriesSelectionnees.push(checkbox.value);
        }
    });// si la checkboxe catégories est cochée alors la propriétée ".checked" rennvoie "true" sinon "false"
    //PUIS, si c'est "true" ajoute la valeur correspondante dans mon tableau vide ("categoriesSelectionnees" définit plus haut)

    // checkboxes TEMPS
    tempsCheckboxes.forEach(function(checkbox) {
        if (checkbox.checked) { // if = même principe que la ligne 229
            tempsSelectionnes.push(checkbox.value);
        }
    });//même principe que CATEGORIE

    // checkboxes DIFFICULTE
    difficulteCheckboxes.forEach(function(checkbox) {
        if (checkbox.checked) { // if = même principe que la ligne 229
            difficultesSelectionnees.push(checkbox.value);
        }
    });//même principe que CATEGORIE

    //TEST//
    //console.log('Catégories sélectionnées:', categoriesSelectionnees); // Pour vérifier ce que renvoie la checkbox cochée
    //console.log('Temps sélectionnés:', tempsSelectionnes);// Pour vérifier ce que renvoie la checkbox cochée
    //console.log('Difficultés sélectionnées:', difficultesSelectionnees);// Pour vérifier ce que renvoie la checkbox cochée


    // Re-sélectionner les cartes pour s'assurer qu'on travaille sur les cartes actuelles
    const currentCards = document.querySelectorAll('.card-content');
    currentCards.forEach(function(card) {
        let afficherCarte = true; // pas de const car la valeur peut changer + on affiche d'office la carte dans un premier temps

        // FILTRE CATÉGORIE
        if (categoriesSelectionnees.length > 0) { //S'il y a AU moins une valeur dans le tableau
            const categorieCard = card.dataset.categorie; //je créé une const pour manipuler les dataset de "catégorie" en HTML

            if (!categoriesSelectionnees.includes(categorieCard)) { // si la catégorie n'est pas dans les catégories sélectionnées alors
                afficherCarte = false; // on affiche PAS la carte
            }
        }

        // FILTRE TEMPS
        if (tempsSelectionnes.length > 0 && afficherCarte) { // si au moins un "temps" est sélectionné
            // et que la variable afficherCarte plus haut est = à TRUE alors je vérifie la donnée "temps"
            const tempsCard = parseInt(card.dataset.temps); // je récupère le temps de la carte et je le convertis en nomvbre entier

            const tempsCorrespond = tempsSelectionnes.some(function(temps) { // je vérifie si le temps sélectionné correspond AU MOINS à UN des temps
    //Sélection des éléments
    const categoriesSelectionnees = getValeursCheckboxes(categorieCheckboxes);
    const tempsSelectionnes = getValeursCheckboxes(tempsCheckboxes);
    const difficultesSelectionnees = getValeursCheckboxes(difficulteCheckboxes);
    
    // Filtrage de cartes
    cards.forEach(card => { // ajout de fonction fléchée
        let afficherCarte = true; // il faut l'initialiser par défaut (ici ce la veut dire qu'on affiche les cartes par défaut)
        
        // FILTRE CATÉGORIE
        if (categoriesSelectionnees.length > 0) { // s'il y en a AU MOINS UNE catégorie qui est cochée
            const categorieCard = card.dataset.categorie; // il faut récupérer la catégorie de cette carte
            if (!categoriesSelectionnees.includes(categorieCard)) { // on vérifie si la catégorie de la carte est DANS la liste des catégories cochées (le '!' est pour la négation)
                afficherCarte = false; // si la carte ne correspond pas aux filtres, on ne l'affiche pas
            }
        }
        
        // FILTRE TEMPS = même fonctionnement que FILTRE CATEGORIE à l'exception qu'ici on vérifie 2données dont une qui sera converti de string en nombre (exemple : '25' => 25)
        if (tempsSelectionnes.length > 0 && afficherCarte) {
            const tempsCard = parseInt(card.dataset.temps);
            
            const tempsCorrespond = tempsSelectionnes.some(function(temps) {
                if (temps === 'rapide' && tempsCard < 30) return true;
                if (temps === 'moyen' && tempsCard >= 30 && tempsCard <= 60) return true;
                if (temps === 'long' && tempsCard > 60) return true;
                return false;
            });

            if (!tempsCorrespond) {
                afficherCarte = false; // si la carte ne correspond pas aux DEUX conditions alors on ne l'affiche pas
            }
        }

        // FILTRE DIFFICULTÉ
        if (difficultesSelectionnees.length > 0 && afficherCarte) {
            const difficulteCard = card.dataset.difficulte;


            if (!difficultesSelectionnees.includes(difficulteCard)) {
                afficherCarte = false;
            }
        }// même logique que catégorie


        if (afficherCarte) { // après avoir vérifié si la carte a passé les filtres,
            card.style.display = 'block'; // elle doit être affichée
        } else { // sinon
            card.style.display = 'none'; // on la rend non visible
        
        // FILTRE DIFFICULTÉ = voir commentaire du FILTRE CATEGORIE car même logique
        if (difficultesSelectionnees.length > 0 && afficherCarte) {
            const difficulteCard = card.dataset.difficulte;
            if (!difficultesSelectionnees.includes(difficulteCard)) {
                afficherCarte = false;
            }
        }
        
        // Affichage ou masquage de la carte
        card.style.display = afficherCarte ? 'block' : 'none'; // ici j'avoue que j'ai eu du mal à bien comprendre.
        //si bien comprit : 'opérateur ternaire' (= à une 'condition' mais en raccourcie) ici la ligne 316 indique : si c'est vrai on affiche si non, on la masque
    });
}

// Appelle des fonctions
ajouterEcouteursCheckboxes(categorieCheckboxes);
ajouterEcouteursCheckboxes(tempsCheckboxes);
ajouterEcouteursCheckboxes(difficulteCheckboxes);

//--- FIN DES FILTRES --------------------------
//============================================


//---  PARTIE DIOGO   ----------------------
//==========================================

// --- GESTION DES FAVORIS (LIKE BUTTON & LOCAL STORAGE) ---
// =========================================================

// Pas besoin de sélectionner les boutons "like" ici car ils seront gérés par délégation d'événements
// ou réattachés dynamiquement.

// 2. Fonction pour afficher les notifications
//    Cette fonction est correcte et peut rester telle quelle.
function afficherNotification(message, type) {
    console.log(`Notification (${type}): ${message}`);
    const notificationContainer = document.getElementById('notification-container') || document.createElement('div');
    notificationContainer.id = 'notification-container';
    notificationContainer.style.position = 'fixed';
    notificationContainer.style.top = '20px';
    notificationContainer.style.right = '20px';
    notificationContainer.style.zIndex = '1000';
    notificationContainer.style.fontFamily = 'Arial, sans-serif'; // Ajout pour style
    document.body.appendChild(notificationContainer);

    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.padding = '10px 15px'; // Légèrement plus de padding
    notification.style.margin = '5px 0';
    notification.style.borderRadius = '8px'; // Coins plus arrondis
    notification.style.color = 'white';
    notification.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)'; // Ombre subtile

    if (type === 'success') {
        notification.style.backgroundColor = '#4CAF50'; // Vert plus doux
    } else if (type === 'error') {
        notification.style.backgroundColor = '#F44336'; // Rouge plus doux
    } else {
        notification.style.backgroundColor = '#2196F3'; // Bleu par défaut
    }

    notificationContainer.appendChild(notification);
    document.body.appendChild(notification);

    //Partie créé par IA car pas encore à l'aise ici pour les durées pour l'instant.
    setTimeout(() => { //si bien comprit ici, cela correspond à son apparation
        notification.classList.add('show');
    }, 100);
    
    
    setTimeout(() => { // ici correspond à la partie configuration de la disparition de l'animation
        notification.classList.remove('show');
        
        setTimeout(() => { //pour indiquer le délai avant disparation
            notification.remove();
        }, 300); // 300ms = durée de l'animation CSS
    }, 3000); // 3000ms = 3 secondes
}

    setTimeout(() => {
        notification.remove();
        if (notificationContainer.children.length === 0) {
            // Optionnel: supprimer le conteneur si vide, mais peut causer des clignotements si des notifs rapides
            // notificationContainer.remove();
        }
    }, 3000); // La notification disparaît après 3 secondes
}


// 3. La fonction toggleFavorite - Correcte, juste pour référence
//    Elle est déjà bien conçue pour mettre à jour localStorage et appeler displayFavoriteCards().
function toggleFavorite(event) {
    const button = event.currentTarget; // Le bouton "like" cliqué
    const card = button.closest('.card-content'); // La carte parente la plus proche
    // Utilisez `card.querySelector('.card-title')` pour plus de robustesse si vous avez plusieurs H2
    const cardId = card.querySelector('h2').textContent.trim(); // Utilise le titre de la recette comme ID unique, retire les espaces

    // Récupère les favoris existants du localStorage sous forme de chaîne
    let favoritesString = localStorage.getItem('favoriteRecipes') || '';
    // Convertit la chaîne en tableau d'IDs
    let favorites = favoritesString === '' ? [] : favoritesString.split(',');

    if (button.classList.contains('active')) {
        // La carte est déjà en favoris, on la retire
        button.classList.remove('active');
        favorites = favorites.filter(id => id !== cardId); // Filtre pour retirer la carte
        afficherNotification(`"${cardId}" retiré des favoris.`, 'error'); // Notification pour le retrait
    } else {
        // La carte n'est pas en favoris, on l'ajoute
        button.classList.add('active');
        favorites.push(cardId); // Ajoute la carte à la liste
        afficherNotification(`"${cardId}" ajouté aux favoris ! ❤️`, 'success'); // Notification pour l'ajout
    }
if (formContact) { // s'il y a un formContact sur la page
    formContact.addEventListener('submit', (e) => { // écoute la soumission du formulaire + utilisation fonction fléchée à la place de '...,function(e) {}'
        e.preventDefault(); //empêche le comportement par défaut

    // Sauvegarde la liste mise à jour (reconvertie en chaîne) dans le localStorage
    localStorage.setItem('favoriteRecipes', favorites.join(','));

    // Si on est sur la page favoris.html, on met à jour l'affichage
    if (document.body.classList.contains('page-favoris')) {
        displayFavoriteCards(); // Ceci va effacer et recréer les cartes, gérant l'enlèvement visuel
    }
}

// 4. La fonction initializeFavoriteButtons - À modifier légèrement
//    Cette fonction doit s'appliquer à TOUS les boutons like présents au chargement
//    de la page (notamment pour index.html).
function initializeFavoriteButtons() {
    const favoritesString = localStorage.getItem('favoriteRecipes') || '';
    const favorites = favoritesString === '' ? [] : favoritesString.split(',');

    // Sélectionnez tous les boutons "like" existants au moment de l'initialisation du DOM.
    // Ceci est crucial pour la page index.html qui a des cartes statiques.
    document.querySelectorAll('.card-content .like').forEach(button => {
        const card = button.closest('.card-content');
        if (card) { // Assurez-vous que la carte parente existe
            const cardId = card.querySelector('h2').textContent.trim(); // Utilisez le H2 comme ID

            if (favorites.includes(cardId)) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        }
    });
}

// 5. Modifier l'écouteur d'événements pour les boutons "like"
//    Au lieu de cibler `likeButtons` qui pourrait être vide ou obsolète,
//    nous allons attacher les écouteurs au moment où les cartes sont chargées initialement
//    (pour index.html) et dynamiquement (pour favoris.html via displayFavoriteCards).

//     **SUPPRIMER CE BLOC (ou l'intégrer si vous l'aviez gardé)**
//     const likeButtons = document.querySelectorAll('.card-content .like');
//     if (likeButtons.length > 0) {
//         likeButtons.forEach(button => {
//             button.addEventListener('click', toggleFavorite);
//         });
//         initializeFavoriteButtons(); // Appelle l'initialisation pour index.html
//     }
//     **FIN DU BLOC À SUPPRIMER/MODIFIER**

//     **REMPLACER PAR CE QUI SUIT pour une meilleure gestion**
//     Ceci assure que les écouteurs sont mis en place pour les cards statiques de l'index.html
document.addEventListener('DOMContentLoaded', () => {
    // Initialise les boutons "like" pour les cartes qui existent déjà dans le DOM (comme sur index.html)
    initializeFavoriteButtons();

    // Attache les écouteurs pour les boutons "like" sur les cartes initiales (index.html)
    // C'est important pour que le système de favoris fonctionne dès le début sur la page d'accueil.
    const staticLikeButtons = document.querySelectorAll('.card-content .like');
    if (staticLikeButtons.length > 0) {
        staticLikeButtons.forEach(button => {
            button.addEventListener('click', toggleFavorite);
        });
    }

    // Si nous sommes sur la page des favoris, chargez les cartes favorites
    if (document.body.classList.contains('page-favoris')) {
        displayFavoriteCards();
    }
});
        afficherNotification('Message envoyé avec succès !', 'success') // appel de la fonction


// 6. La fonction displayFavoriteCards - Modifiée en profondeur
//    C'est la partie la plus importante pour la page des favoris.
//    Elle doit recréer fidèlement les cartes, y compris les data-attributs et le bouton "like"
//    avec son état 'active' et son écouteur.
function displayFavoriteCards() {
    console.log("Mise à jour de l'affichage des favoris...");
    const favoritesContainer = document.getElementById('favorites-container');
    if (!favoritesContainer) {
        console.warn("L'élément #favorites-container n'existe pas sur cette page ou son ID est incorrect.");
        return;
    }

    favoritesContainer.innerHTML = ''; // VIDE LE CONTENEUR ACTUEL : C'est ce qui permet de "retirer" visuellement les cartes

    const favoritesString = localStorage.getItem('favoriteRecipes') || '';
    const favoriteIds = favoritesString === '' ? [] : favoritesString.split(',');

    if (favoriteIds.length === 0) {
        favoritesContainer.innerHTML = '<p class="no-favorites-message">Aucune recette favorite pour le moment.</p>';
        return;
    }

    favoriteIds.forEach(id => {
        const recipe = allRecipesData.find(r => r.id === id);

        if (recipe) {
            const favoriteCardElement = document.createElement('article');
            favoriteCardElement.classList.add('card-content');
            favoriteCardElement.setAttribute('data-categorie', recipe.categorie);
            favoriteCardElement.setAttribute('data-temps', recipe.tempsNum); // Utilisez tempsNum ici
            favoriteCardElement.setAttribute('data-difficulte', recipe.difficulte.toLowerCase()); // Assurez-vous d'être en minuscules

            favoriteCardElement.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.id}" class="card-image">
                <h2 class="card-title">${recipe.id}</h2>
                <button class="like active" aria-label="Retirer des favoris">
                    <img src="assets/icons/iconefavori.png" alt="icône cœur">
                </button>
                <div class="typologie">
                    <p class="type"><span>${recipe.categorie}</span></p>
                    <p class="temps"><span>${recipe.temps}</span></p>
                    <p class="dificulte"><span>${recipe.difficulte}</span></p>
                </div>
                <a href="${recipe.link}"><button class="Bouton">Voir la recette</button></a>
            `;
            favoritesContainer.appendChild(favoriteCardElement);

            // RÉ-ATTACHEMENT DE L'ÉCOUTEUR : TRÈS IMPORTANT pour les cartes dynamiques
            const newLikeButton = favoriteCardElement.querySelector('.like');
            if (newLikeButton) {
                newLikeButton.addEventListener('click', toggleFavorite);
            }
        } else {
            console.warn(`Détails de recette introuvables pour l'ID: ${id}. Cette recette a peut-être été supprimée ou son ID a changé.`);
            // Optionnel: Nettoyer le localStorage des IDs de recettes introuvables.
            // Ceci est utile si une recette est supprimée du 'allRecipesData'.
            // let updatedFavorites = favoriteIds.filter(favId => favId !== id);
            // localStorage.setItem('favoriteRecipes', updatedFavorites.join(','));
            // Puis rappelez displayFavoriteCards() à nouveau si vous avez supprimé un élément
            // pour rafraîchir la liste sans l'élément introuvable.
            // Si vous faites cela, utilisez un flag pour éviter une boucle infinie.
        }
    });
}