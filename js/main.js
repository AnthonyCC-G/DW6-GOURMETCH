//===========================================
//GOURMETECH - Script Principal
//Auteurs : Anthony & Diogo
//==========================================

//---  PARTIE ANTHONY ----------------------
//==========================================

//== DARK MODE=============================
//=========================================

//Sélection du bouton avec ID et stockage dans une variable
const themeToggle = document.querySelector("#theme-toggle");


//--FUNCTION DARK MODE --
//========================

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
const cards = document.querySelectorAll('.card-content');//les cartes présentent sur la page

//écouteur d'évènement sur la "saisie" dans la barre de recherche LORSQU'une touche est 
if (searchBar){
    searchBar.addEventListener("keyup", (e) => {
        const searchedText = e.target.value.toLowerCase(); //LowerCase permet de "convertir" en minuscule
        console.log('Texte saisie', searchedText); // pour voir le texte saisie dans la barre de recherche

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




//--- VALIDATION FORMULAIRE PAGE A PROPOS ----
//============================================

//Selection du formulaire
const formContact = document.querySelector('#form-contact');
//console.log('formulaire trouvée ?', formContact);

function afficherNotification(message, type ='success') { // success = valeur type par défaut
    const notification = document.createElement('div'); // créé la notification
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    //Partie créé par IA car pas encore à l'aise ici pour les durées pour l'instant.
    setTimeout(() => { //si bien comprit ici, cela correspond à son apparation
        notification.classList.add('show');
    }, 100);
    
    
    setTimeout(() => { // ici correspond à la partie configuration de la disparition de l'animation
        notification.classList.remove('show');
        
        setTimeout(() => { //indique le délai avant disparation
            notification.remove();
        }, 300); // 300ms = durée de l'animation CSS
    }, 3000); // 3000ms = 3 secondes
}



if (formContact) { // s'il y a un formContact sur la page
    formContact.addEventListener('submit', (e) => { // écoute la soumission du formulaire + utilisation fonction fléchée à la place de '...,function(e) {}'
        e.preventDefault(); //empêche le comportement par défaut


        //récupération des valeurs saisies
        const nom = document.querySelector('#nom').value.trim();
        const email = document.querySelector('#email').value.trim();
        const sujet = document.querySelector('#sujet').value.trim();
        const message = document.querySelector('#message').value.trim();

        //pour vérifier que tous est remplis
        if (!nom || !email || !sujet || !message) {
            afficherNotification('Tous les champs sont requis', 'error')
            //console.log('Erreur : Tous les champs sont requis');
            return;
        }

        //il faut vérifier que pour un email, il y a bien un '@' et pas de '/', ni de ^ etc ... regex simple ici
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // copier coller dans les sources (j'ai appris que les regex sotn très particulier et difficile pour les développeurs)
        if (!emailRegex.test(email)) {
            afficherNotification('Email invalide', 'error');
            //console.log('Erreur : Email invalide');
            return; 
        }

        afficherNotification('Message envoyé avec succès ! 🎉', 'success') // appel de la fonction

        formContact.reset();
    });
}


//---  PARTIE DIOGO   ----------------------
//==========================================