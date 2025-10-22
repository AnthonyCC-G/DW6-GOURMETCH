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
    //on vérifie si le dark mode était activé
    const saveTheme = localStorage.getItem('darkMode');
    if (saveTheme === 'true') {
        document.body.classList.add('dark-mode');
    }

    //écouteur d'évènement sur le bouton
    themeToggle.addEventListener('click', toggleDarkMode);
}

//appel de la fonction au chargement de la page
initialise();

//-----------------------------------------
//--- FIN DU DARK MODE --------------------




//-----------------------------------------
// --- SEARCH BAR -------------------------

//on selectionne les éléments qui nous intéressent dans le form sur l'index.html
const searchBar = document.querySelector('#valSearchBar'); //la valeur tapé dans l'input
const btnRech = document.querySelector('#btn-recherche');//le bouton "rechercher"
const cards = document.querySelectorAll('.card-content');//les cartes présentent sur la page

//écouteur d'évènement sur la "saisie" dans la barre de recherche LORSQU'une touche est relachée
searchBar.addEventListener("keyup", (e) => {
    const searchedText = e.target.value.toLowerCase(); //LowerCase permet de convertir en minuscule
    console.log('Texte saisie', searchedText); // pour voir le texte saisie dans la barre de recherche

    //parcourir toutes les "cards"
    cards.forEach(card => { //pour chacune des "cards" présentent
        const recipeTitle = card.querySelector('h2').textContent.toLowerCase(); 
        //variable qui permettra de récupérer le titre "h2" de la recette dans la carte

        if(recipeTitle.includes(searchedText)) {// si le titre contient le texte recherché, 
            card.style.display  = 'block';//on affiche la carte la carte 
        } else {
            card.style.display = 'none'; //sinon on la cache
        }
    });
})


//il faut empêcher le rechargement de la page lorsque l'on appuie sur le bouton "Rechercher"
const formR = document.querySelector('.search-filter form');
formR.addEventListener('submit', (e) => {
    e.preventDefault(); //empêche la fonctionnalité par défaut du bouton submit
});

//------------------------------------------
//--- LES FILTRES --------------------------


//===  PARTIE DIOGO   ======================
//==========================================