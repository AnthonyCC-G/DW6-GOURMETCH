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

//on sélectionne les éléements qui nous intéressent dans le form
const categorieCheckboxes = document.querySelectorAll('input[name="categorie[]"]'); //on indique déjà que les donné
const tempsCheckboxes = document.querySelectorAll('input[name="temps[]"]');
const difficulteCheckboxes = document.querySelectorAll('input[name="difficulte[]"]');

// Fonction qui applique tous les filtres
function appliquerFiltres() {
    // Récupérer les valeurs cochées pour chaque filtre
    const categoriesSelectionnees = [];
    const tempsSelectionnes = [];
    const difficultesSelectionnees = [];
    
    // Parcourir les checkboxes de catégorie
    categorieCheckboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            categoriesSelectionnees.push(checkbox.value);
        }
    });

 // Parcourir les checkboxes de temps
    tempsCheckboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            tempsSelectionnes.push(checkbox.value);
        }
    });
    
    // Parcourir les checkboxes de difficulté
    difficulteCheckboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            difficultesSelectionnees.push(checkbox.value);
        }
    });
    
    console.log('Catégories:', categoriesSelectionnees);
    console.log('Temps:', tempsSelectionnes);
    console.log('Difficultés:', difficultesSelectionnees);
    
    // Parcourir toutes les cartes
    cards.forEach(function(card) {
        let afficherCarte = true;
        
        // FILTRE CATÉGORIE
        if (categoriesSelectionnees.length > 0) {
            const categorieCard = card.querySelector('.type span').textContent.toLowerCase();
            // Vérifier si la catégorie de la carte est dans les filtres sélectionnés
            const categorieCorrespond = categoriesSelectionnees.some(function(cat) {
                return categorieCard.includes(cat);
            });
            if (!categorieCorrespond) {
                afficherCarte = false;
            }
        }
        
        // FILTRE TEMPS
        if (tempsSelectionnes.length > 0 && afficherCarte) {
            const tempsCard = card.querySelector('.temps span').textContent;
            const minutes = parseInt(tempsCard); // Extraire le nombre
            
            const tempsCorrespond = tempsSelectionnes.some(function(temps) {
                if (temps === 'rapide' && minutes < 30) return true;
                if (temps === 'moyen' && minutes >= 30 && minutes <= 60) return true;
                if (temps === 'long' && minutes > 60) return true;
                return false;
            });
            
            if (!tempsCorrespond) {
                afficherCarte = false;
            }
        }
        
        // FILTRE DIFFICULTÉ
        if (difficultesSelectionnees.length > 0 && afficherCarte) {
            const difficulteCard = card.querySelector('.dificulte span').textContent.toLowerCase();
            
            const difficulteCorrespond = difficultesSelectionnees.some(function(diff) {
                if (diff === 'facile' && difficulteCard.includes('facil')) return true;
                if (diff === 'normale' && difficulteCard.includes('moyen')) return true;
                if (diff === 'dure' && difficulteCard.includes('difficile')) return true;
                return false;
            });
            
            if (!difficulteCorrespond) {
                afficherCarte = false;
            }
        }
        
        // Afficher ou cacher la carte selon les filtres
        if (afficherCarte) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Ajouter l'écouteur d'événement sur TOUS les checkboxes
categorieCheckboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', appliquerFiltres);
});

tempsCheckboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', appliquerFiltres);
});

difficulteCheckboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', appliquerFiltres);
});

//===  PARTIE DIOGO   ======================
//==========================================