//===========================================
//GOURMETECH - Script Principal
//Auteurs : Anthony & Diogo
//==========================================

//===  PARTIE ANTHONY ======================
//==========================================

//== VARIABLES==
//==============
//je sélectionne le bouton avec l'ID et je le stocke dans une variable
const themeToggle = document.querySelector("#theme-toggle");


//==FUNCTION DARK MODE==
//la fonction toggleDarkMode ajoute ou retire la classe dark-mode 
// sur la balise body.
//Si dark-mode n'existe pas => on l'ajoute
//Si dark-mode existe déjà => elle la retire
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    //on sauvegarde dans le local storage le theme
    //"contains ('dark-mode')", permet de vérifier si la classe est sur le body.
    //si oui => darkMode = true
    // si non => darkMode = false
    //sauvegarde cette valeur dans le local storage
    const darkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', darkMode); 
}

//au chargement de la page
function initialise () {
    const saveTheme = localStorage.getItem('darkMode');
    if (saveTheme === 'true') {
        document.body.classList.add('dark-mode');
    }

    // ✅ Vérification ajoutée
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleDarkMode);
    }
}

//appel de la fonction au chargement de la page
initialise();
//-----------------------------------------
//--- FIN DU DARK MODE --------------------

//-----------------------------------------
// --- MENU BURGER -------------------------

// On sélectionne les éléments nécessaires
const burgerMenu = document.querySelector('#burger-menu');
const nav = document.querySelector('nav');

if (burgerMenu && nav) {
    function toggleMenu() {
        burgerMenu.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    }

    burgerMenu.addEventListener('click', toggleMenu);
    
    // Fonction pour ouvrir/fermer le menu
    function toggleMenu() {
        // On ajoute ou retire la classe "active" sur le bouton burger
        burgerMenu.classList.toggle('active');
    
        // On ajoute ou retire la classe "active" sur la nav
        nav.classList.toggle('active');
    
        // On ajoute ou retire la classe "menu-open" sur le body
        // (pour l'overlay sombre et bloquer le scroll)
        document.body.classList.toggle('menu-open');
    }

    // Écouteur d'événement sur le bouton burger
    burgerMenu.addEventListener('click', toggleMenu);
}


// Fermer le menu quand on clique sur l'overlay (la zone sombre)
document.body.addEventListener('click', function(e) {
    // On vérifie si le menu est ouvert
    if (document.body.classList.contains('menu-open')) {
        // On vérifie si le clic n'est PAS sur le burger ou dans la nav
        if (!burgerMenu.contains(e.target) && !nav.contains(e.target)) {
            toggleMenu(); // On ferme le menu
        }
    }
});

// Fermer le menu quand on clique sur un lien de navigation
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        // On ferme le menu si on est sur mobile/tablette
        if (nav.classList.contains('active')) {
            toggleMenu();
        }
    });
});

//-----------------------------------------
//--- FIN DU MENU BURGER -------------------

//-----------------------------------------
// --- SYSTÈME D'ONGLETS (PAGE À PROPOS) --
//-----------------------------------------

// On sélectionne tous les boutons d'onglets
const tabButtons = document.querySelectorAll('.tab-button, .tab-button-active');
const tabContents = document.querySelectorAll('.tab-content');

// Fonction pour changer d'onglet
function switchTab(tabName) {
    // On parcourt tous les boutons
    tabButtons.forEach(button => {
        // On retire la classe active de tous les boutons
        button.classList.remove('tab-button-active');
        button.classList.add('tab-button');
        
        // On ajoute la classe active au bouton cliqué
        if (button.dataset.tab === tabName) {
            button.classList.remove('tab-button');
            button.classList.add('tab-button-active');
        }
    });
    
    // On parcourt tous les contenus d'onglets
    tabContents.forEach(content => {
        // On retire la classe active de tous les contenus
        content.classList.remove('active');
        
        // On ajoute la classe active au contenu correspondant
        if (content.id === tabName + '-content') {
            content.classList.add('active');
        }
    });
}

// On ajoute un écouteur sur chaque bouton d'onglet
if (tabButtons.length > 0) {
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            switchTab(tabName);
        });
    });
}

//-----------------------------------------
// --- ACCORDÉON FAQ -----------------------
//-----------------------------------------

// On sélectionne toutes les questions FAQ
const faqQuestions = document.querySelectorAll('.faq-question');

// On ajoute un écouteur sur chaque question
if (faqQuestions.length > 0) {
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // On récupère l'élément parent (faq-item)
            const faqItem = this.parentElement;
            
            // On toggle (ajoute/retire) la classe active
            faqItem.classList.toggle('active');
        });
    });
}



//-----------------------------------------
// --- SEARCH BAR -------------------------

//on selectionne les éléments qui nous intéressent dans le form sur l'index.html
const searchBar = document.querySelector('#valSearchBar'); //la valeur tapée dans l'input
const btnRech = document.querySelector('#btn-recherche');//le bouton "rechercher"
const cards = document.querySelectorAll('.card-content');//les cartes présentent sur la page

//écouteur d'évènement sur la "saisie" dans la barre de recherche LORSQU'une touche est relachée

if (searchBar){
    searchBar.addEventListener("keyup", (e) => {
        const searchedText = e.target.value.toLowerCase(); //LowerCase permet de "convertir" en minuscule
        console.log('Texte saisie', searchedText); // pour voir le texte saisie dans la barre de recherche

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


//il faut empêcher le rechargement de la page lorsque l'on appuie sur le bouton "Rechercher"
const formR = document.querySelector('.search-filter form');
if (formR) { //<= parceque la barre de recherche ne se situe pas sur toutes les pages (vu erreur JS dans la console, JS tente de chercher un élément qui n'existe pas sur 3 pages)
formR.addEventListener('submit', (e) => {
e.preventDefault(); //empêche la fonctionnalité par défaut du bouton submit
});
}

//--- LES FILTRES --DE LA ZONE DE RECHERCHE----

const categorieCheckboxes = document.querySelectorAll('input[name="categorie[]"]'); //cible tous les selecteurs CSS qui ont un attribut name = à "catégorie"
const tempsCheckboxes = document.querySelectorAll('input[name="temps[]"]'); // cible tous les selecteurs css qui ont un attribut name = à "temps"
const difficulteCheckboxes = document.querySelectorAll('input[name="difficulte[]"]'); // cible tous les selecteurs css qui ont un attribut name = à "temps"

// APPLIQUE FILTRE
function appliquerFiltres() {
    // d'abord, je créé des variables qui renvoie un tableau vide (utile)
    const categoriesSelectionnees = []; //categories
    const tempsSelectionnes = [];// temps
    const difficultesSelectionnees = []; // difficulte
    
    // checkboxes CATEGORIES
    categorieCheckboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            categoriesSelectionnees.push(checkbox.value);
        }
    });// si la checkboxe catégories est cochée alors la propriétée ".checked" rennvoie "true" sinon "false"
    //PUIS, si c'est "true" ajoute la valeur correspondante dans mon tableau vide ("categoriesSelectionnees" définit plus haut)
    
    // checkboxes TEMPS
    tempsCheckboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            tempsSelectionnes.push(checkbox.value);
        }
    });//même principe que CATEGORIE
    
    // checkboxes DIFFICULTE
    difficulteCheckboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            difficultesSelectionnees.push(checkbox.value);
        }
    });//même principe que CATEGORIE
    
    //TEST//
    //console.log('Catégories sélectionnées:', categoriesSelectionnees); // Pour vérifier ce que renvoie la valeur cochée
    //console.log('Temps sélectionnés:', tempsSelectionnes);// Pour vérifier ce que renvoie la valeur cochée
    //console.log('Difficultés sélectionnées:', difficultesSelectionnees);// Pour vérifier ce que renvoie la valeur cochée
    
    
    cards.forEach(function(card) {
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
                if (temps === 'rapide' && tempsCard < 30) return true;
                if (temps === 'moyen' && tempsCard >= 30 && tempsCard <= 60) return true;
                if (temps === 'long' && tempsCard > 60) return true;
                return false;
            });
            
            if (!tempsCorrespond) {
                afficherCarte = false; // si ça ne correspond pas, alors on affiche pas la carte
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
        }
    });
}

// Ecouteur d'évènement sur tous les checkboxes
if (categorieCheckboxes.length > 0){
    categorieCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', appliquerFiltres); // change = evenement qui se déclenche quand on coche ou décoche une checkbox
    });
}

if(tempsCheckboxes.length > 0) {
    tempsCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', appliquerFiltres);
    });
}

if(difficulteCheckboxes.length > 0) {
    difficulteCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', appliquerFiltres);
    });
}






//===  PARTIE DIOGO   ======================
//==========================================