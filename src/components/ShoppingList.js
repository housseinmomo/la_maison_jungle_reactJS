import { plantList } from "../datas/plantList"
import "../styles/ShoppingList.css"
import CareScale from "./CareScale"
import PlantItem from "./PlantItem"

/**
 * 
 *  La méthode JavaScript   map()  passe sur chaque élément d'un tableau. Elle lui applique une fonction, et renvoie un nouveau tableau
 *  contenant les résultats de cette fonction appliquée sur chaque élément.

Les keys :
La documentation de React est claire sur ce sujet : les  key (clés) aident React à identifier quels éléments d’une liste ont changé,ont
été ajoutés ou supprimés. Vous devez donner une clé à chaque élément dans un tableau, afin d’apporter aux éléments une identité stable.
La  key   permet d'associer une donnée au composant correspondant dans le DOM virtuel qui permettra ensuite de générer les composants. 
La prop  key   est indispensable dans les listes de composants 
*/

/**
 * La fonction reduce():
 * 
 * - principe : La méthode reduce() applique une fonction qui est un « accumulateur » et qui traite chaque valeur d'une liste 
 * (de la gauche vers la droite) afin de la réduire à une seule valeur.
 * 
 *  - accumulateur (acc) : La valeur précédemment retournée par le dernier appel du callback, ou valeurInitiale, si elle est fournie (voir ci-après) 
 * (c'est la valeur « accumulée » au fur et à mesure des appels
 * 
 * - ValeurCourante : La valeur de l'élément courant actuellement manipulé dans le tableau.
 *
 * - ValeurInital : valeurInitialeFacultatif Une valeur utilisée comme premier argument lors du premier appel de la fonction callback.
 *   Si aucune valeur initiale n'est fournie, le premier élément du tableau est utilisé (et la boucle de traitement ne le parcourera pas).

The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
The includes() method returns true if an array contains a specified value. The includes() method returns false if the value is not found. The includes() method is case sensitive.
 * 
 */

function ShoppingList () {

    const categories = plantList.reduce(
		(acc, plant) =>
            // Si la categorie se trouve dans notre acc : un le tableau precent  
            // Sinon on concatene la nouvelle categorie a notre acc [Array]
            // acc : est un tableau Array 
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]  // valeur initial
	)

    console.log(categories)

    return (
        <div>

            {/* Recuperation des categorie */}
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>

            {/* Recuperation des plantes */}
            <ul className="lmj-plant-list">
                {plantList.map((plant) => (
                    <PlantItem 
                        id={plant.id}
                        name={plant.name} 
                        light={plant.light} 
                        water={plant.water} 
                        cover={plant.cover}
                    />
                ))}
            </ul>

        </div>
    )
}

export default ShoppingList 