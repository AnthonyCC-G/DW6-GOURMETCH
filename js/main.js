//===========================================
//GOURMETECH - Script Principal
//Auteurs : Anthony & Diogo
//==========================================

//---  PARTIE ANTHONY ----------------------
//==========================================

//== DARK MODE==
//==============

//je sélectionne le bouton avec l'ID et je le stocke dans une variable
const themeToggle = document.querySelector("#theme-toggle");


//==FUNCTION DARK MODE==
//======================

//la fonction toggleDarkMode ajoute ou retire la classe dark-mode 
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

//Au chargement de la page
function initialise () {
    const saveTheme = localStorage.getItem('darkMode');
    if (saveTheme === 'true') {
        document.body.classList.add('dark-mode');
    }

    // Vérification
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleDarkMode);
    }
}

//appel de la fonction au chargement de la page
initialise();

//--- FIN DU DARK MODE --------------------
//=========================================


// --- MENU BURGER -------------------------
//==========================================

// Sélection des éléments (ici le menu burger et la nav)
const burgerMenu = document.querySelector('#burger-menu');
const nav = document.querySelector('nav');

if (burgerMenu && nav) { // s'il existe un menu burger et une nav, 
    function toggleMenu() {
        burgerMenu.classList.toggle('active'); // on active via le toggle la class .active (le css fait tout ici)
        nav.classList.toggle('active');
        document.body.classList.toggle('menu-open'); //menu-open = voir dans le CSS
    }

    burgerMenu.addEventListener('click', toggleMenu); // au clic
    
    // Ouvrir/fermer le menu
    function toggleMenu() {
        burgerMenu.classList.toggle('active');  //ajoute ou retire la classe "active" sur le bouton burger
        nav.classList.toggle('active');// ajoute ou retire la classe "active" sur la nav
    
        document.body.classList.toggle('menu-open'); // ajoute ouretire l'ombrage sur la page
    }

    // Écouteur d'événement sur le bouton burger
    burgerMenu.addEventListener('click', toggleMenu);
}

//écouteur click sur : 
document.body.addEventListener('click', function(e) { // au click si l'utilisateur clique sur 
    if (document.body.classList.contains('menu-open')) { //si le clic est sur le menu ouvert
        if (!burgerMenu.contains(e.target) && !nav.contains(e.target)) { // si le clic est sur le menu buger et la nav
            toggleMenu(); // On ferme le menu
        }
    }
});

// on ferme le menu si le click est sur :
const navLinks = document.querySelectorAll('nav a'); 
navLinks.forEach(function(link) { // pour chaque lien de navigation
    link.addEventListener('click', function() { // il ne faut pas oublier si on est sur tablette ou smartphone,
        if (nav.classList.contains('active')) {
            toggleMenu();
        }
    });
});

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

//on selectionne les éléments qui nous intéressent dans le form sur l'index.html
const searchBar = document.querySelector('#valSearchBar'); //la valeur tapée dans l'input
const btnRech = document.querySelector('#btn-recherche');//le bouton "rechercher"
const cards = document.querySelectorAll('.card-content');//les cartes présentent sur la page

//écouteur d'évènement sur la "saisie" dans la barre de recherche LORSQU'une touche est 
if (searchBar){
    searchBar.addEventListener("keyup", (e) => {
        const searchedText = e.target.value.toLowerCase(); //LowerCase permet de "convertir" en minuscule
        console.log('Texte saisie', searchedText); // pour voir le texte saisie dans la barre de recherche

        if (searchedText === 'flem') { // la détection du code secret "flem"
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

const categorieCheckboxes = document.querySelectorAll('input[name="categorie[]"]'); //cible tous les selecteurs CSS qui ont un attribut name = à "catégorie"
const tempsCheckboxes = document.querySelectorAll('input[name="temps[]"]'); // cible tous les selecteurs css qui ont un attribut name = à "temps"
const difficulteCheckboxes = document.querySelectorAll('input[name="difficulte[]"]'); // cible tous les selecteurs css qui ont un attribut name = à "temps"

// APPLIQUE FILTRE
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