import { plantList } from "../datas/plantList"
import "../styles/ShoppingList.css"
import PlantItem from "./PlantItem"
import Categories from "./Categories"

import { useState } from "react"

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



function ShoppingList ( {cart, updateCart} ) {

    const [categorySelected, updateCategorySelected] = useState("")

	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	const categories = plantList.reduce(
		(acc, elem) =>
			acc.includes(elem.category) ? acc : acc.concat(elem.category),
		[]
	)

    return (
        <div>

            {/* Recuperation des categorie */}
            {/* <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul> */}

            

            <div className='lmj-shopping-list'>
                <Categories categories={categories} 
                            activeCategory={categorySelected} 
                            setActiveCategory={updateCategorySelected} 
                />
            </div>

            {/* Recuperation des plantes */}
            <ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) =>
					!categorySelected || categorySelected === category ? (
						<div key={id}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
					) : null
				)}
			</ul>
        


        </div>
    )
}

export default ShoppingList 