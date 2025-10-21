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
//la Fonction toggleDarkMode ajoute ou retire la classe dark-mode 
// sur la balise body.
//Si dark-mode n'existe pas => on l'ajoute
//Si dark-mode existe déjà => elle la retire
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    //on sauvegarde dans le local storage le theme
    //"contains ('dark-mode')", vérifie si la classe est sur le body.
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

//lancement au chargement
initialise();


//===  PARTIE DIOGO   ======================
//==========================================