//===========================================
// GOURMETECH - Générateur de Recettes
// API: TheMealDB
//===========================================

/*Sur cette page est utilisé les concepts suivants : la boucle forEach, "template literale", 
le concept des tableaux pour stocker des informations, push, les backticks, fetch, catch, finally, console.error, innerHTML, trim, 

Optimisation : 
    - 'catch' = changement d'une alerte à un message d'erreur dans la page. 'alert' bloque toute la page + ajout d'un bouton pour réessayer
        Version initial sur la branche : JS-07-TP2-API-THEMEALDB---ANTHONY
        Sources : "https://www.motscles.net/blog/ux-writing-les-meilleurs-messages-d-erreur" et divers vidéo Youtube (voir vidéo playlist 'UX Antho')
    - 'map + join' = version moderne et optimisée pour générer le HTML des ingrédients
        Version initiale sur la branche : JS-07-TP2-API-THEMEALDB---ANTHONY
*/

const btnGenerer = document.querySelector('#btn-generer');
const recetteContainer = document.querySelector('#recette-container');
const loader = document.querySelector('#loader');

//==============================================
// LOADER - Animation de chargement
//==============================================
function afficherLoader() {
    if (loader) {
        loader.style.display = 'flex';
    }
}

function cacherLoader() {
    if (loader) {
        loader.style.display = 'none';
    }
}

//==============================================
// GÉNÉRATION DE RECETTE ALÉATOIRE
//==============================================
async function genererRecette() {
    afficherLoader();

    try {
        console.log('Appel de l\'API');
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php'); // L'API
        
        if (!response.ok) {
            throw new Error(`Erreur HTTP / ${response.status}`);
        }
    
        const data = await response.json();
        console.log('Données reçues', data);

        if (data.meals && data.meals.length > 0) {
            const recette = data.meals[0];
            console.log('Recette', recette.strMeal);
            afficherRecette(recette);
        } else {
            console.error('Aucune recette trouvée');
        }
    
    } catch (error) {
        console.error('Erreur lors de la récupération:', error);
        
        // Message d'erreur dans le conteneur au lieu d'une alerte
        recetteContainer.innerHTML = `
            <div class="erreur-container">
                <h2>Oups !</h2>
                <p>Impossible de charger une recette.</p>
                <p>Il n'y a plus d'huile pour les frites...</p>
                <p class="erreur-detail">(Vérifie ta connexion internet)</p>
                <button class="Bouton" onclick="location.reload()">Réessayer</button>
            </div>
        `;
    } finally {
        cacherLoader();
    }
}

// Écouteur sur le bouton
if (btnGenerer) {
    btnGenerer.addEventListener('click', genererRecette);
}

//==============================================
// EXTRACTION DES INGRÉDIENTS
//==============================================
// L'API affiche toujours 20 ingrédients MAX mais certains sont vides
// Cette fonction extrait uniquement les ingrédients présents
function extraireIngredients(recette) {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
        const ingredient = recette[`strIngredient${i}`];
        const mesure = recette[`strMeasure${i}`];
        
        if (ingredient && ingredient.trim() !== '') {
            ingredients.push({
                nom: ingredient, 
                quantite: mesure || ''
            });
        }
    }
    
    return ingredients;
}

//==============================================
// AFFICHAGE DE LA RECETTE
//==============================================
function afficherRecette(recette) {
    console.log('Affichage de la recette...');

    const ingredients = extraireIngredients(recette);

    // Version optimisée avec map + join
    const ingredientsHTML = ingredients
        .map(item => `
            <li class="quantites-ingredients-item">
                <img src="assets/icons/icon-ingredients.png" class="logo-item" alt="icône ingrédient">
                ${item.quantite} ${item.nom}
            </li>
        `)
        .join(''); // Transforme le tableau en string

    // Construction du HTML complet de la recette
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
