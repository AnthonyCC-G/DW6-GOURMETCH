//===========================================
// GOURMETECH - Générateur de Recettes
// API: TheMealDB
//===========================================



/*Sur cette page est utilisé les concepts suivants : la boucle forEach, "template literale", 
le concept des tableaux pour stocker des informations,push, les backticks, fetch, catch, finally, console.error, innerHTML, trim, 

*/
const btnGenerer = document.querySelector('#btn-generer'); //selection du bouton
const recetteContainer = document.querySelector('#recette-container');
const loader = document.querySelector('#loader');

//afin de faire patienter l'utilisateur = LOADER
//==============================================
function afficherLoader () {
    if (loader) { // afin de vérifiier 
        loader.style.display = 'flex'; //le loader devient visible
    }
}

function cacherLoader () {
    if (loader) {
        loader.style.display = 'none'; // le loader disparait
    }
}



async function genererRecette () {

    afficherLoader();

    try {
        console.log('appel de l\'API');
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        // la ligne au dessus renvoie une réponse brut non convertit en JSON
        if(!response.ok) { // si le statut de la réponse correspond à une erreur, on affiche Erreur HTTP / et le code de l'erreur
            throw new Error(`Erreur HTTP / ${response.status}`);
        }
    
        const data = await response.json();
        console.log('données reçues', data);

        if (data.meals && data.meals.length > 0) {
            const recette = data.meals[0]; // on ne veut que la première recette
            console.log('Recette', recette.strMeal);

            afficherRecette(recette);

        } else {
            console.error('Aucune recette trouvée');
        }
    
    } catch (error) { // vu dans le QCM LMS - permet d'attraper toutes les erreurs (problème internet, api qui ne répond pas)
        console.error ('Erreur lors de la récupération:', error);
        alert('Impossible de charger une recette. Il n\'y a plus d\'huile pour les frites. (Vérifie ta connexion internet)');
    
    } finally {
        cacherLoader();
    }
}


if (btnGenerer) {
    btnGenerer.addEventListener('click',genererRecette);
}



//Fonction pour extraire les ingredients présents des ingredients vides.
//L'API semble toujours afficher 20 ingredients MAX mais les 20 ne sont pas toujours remplies selon les recettes.
//Cette fonction permet d'extraire les ingredients présents dans la liste dans l'API
function extraireIngredients(recette) { // vu les recettes affiches toujours 20 ingrédients mais certains sont vides
    const ingredients = []; // tableau pour stocker les ingrédients

    for (let i= 1; i <= 20; i++) { // testes après plusieurs essaies, l'API présente toujours 20 ingredients MAX
        const ingredient = recette[`strIngredient${i}`]; // strIngrédient1 ou strIngredient2 etc ...
        const mesure = recette[`strMeasure${i}`]; // strMeasure1 etc ...
        
        if (ingredient && ingredient.trim() !== '') {
            ingredients.push({
                nom: ingredient, 
                quantite: mesure || '' //si pas de mesure, on ne met rien
            });
        }
    }
    
    return ingredients; //retourne le tableau d'ingredients
}


//fonction pour afficher la recette
function afficherRecette(recette) {
    console.log('Affichage de la recette...');

    const ingredients = extraireIngredients(recette);//on utilise la fonction plus haut pour ne garder que les infos utiles à afficher

    let ingredientsHTML = ''; // il faut créer le HTML pour les ingrédients
    ingredients.forEach(function(item) {
        ingredientsHTML += `
        <li class="quantites-ingredients-item">
            <img src="assets/icons/icon-ingredients.png" class="logo-item" alt="icône ingrédient">
            ${item.quantite} ${item.nom}
        </li>
        `;
    });

    //pour cette partie j'ai eu recours à l'IA car je m'en mêlais les pinceaux dans les données de l'API et leur disposition dans le HTML
    const recetteHTML = `
        <article class="recette-content">
            <img src="${recette.strMealThumb}" 
                 alt="${recette.strMeal}" 
                 class="photo-pastel">
            
            <h2 class="title-pastel">${recette.strMeal}</h2>
            
            <div class="typologie">
                <p class="type"><span>${recette.strCategory}</span></p>
                <p class="temps"><span>${recette.strArea}</span></p>
            </div>
            
            <div class="etapes">
                <h3>Instructions</h3>
                <p>${recette.strInstructions}</p>
            </div>
            
            <div class="quantites">
                <h3>Ingrédients</h3>
                <ul class="quantites-ingredients">
                    ${ingredientsHTML}
                </ul>
            </div>
        </article>
    `;

    recetteContainer.innerHTML = recetteHTML;
}