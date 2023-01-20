import { plantList } from "../datas/plantList"

/**
 * 
 *  La méthode JavaScript   map()  passe sur chaque élément d'un tableau. Elle lui applique une fonction, et renvoie un nouveau tableau
 *  contenant les résultats de cette fonction appliquée sur chaque élément.

Les keys :
La documentation de React est claire sur ce sujet : les  key (clés) aident React à identifier quels éléments d’une liste ont changé,ont
été ajoutés ou supprimés. Vous devez donner une clé à chaque élément dans un tableau, afin d’apporter aux éléments une identité stable.
La  key   permet d'associer une donnée au composant correspondant dans le DOM virtuel qui permettra ensuite de générer les composants. 
 */

function ShoppingList () {

    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)


    return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
                </ul>
                <ul>
                    {plantList.map((plant) => (
                        <li key={plant.id}>{plant.name}</li>
                    ))}
                </ul>
        </div>
    )
}

export default ShoppingList 