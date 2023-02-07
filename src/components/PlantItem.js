import CareScale from "./CareScale"
import '../styles/PlantItem.css'


// Les evenment syntetique :
/**
 * 
 * Le param (e) est l'objet que React passe par défaut en paramètre aux fonctions indiquées en callback des événements 
 * Il s'agit en fait d'un événement synthétique. Pour faire bref, il s'agit de la même interface que pour 
 * les événements natifs du DOM, sauf qu'ils sont compatibles avec tous les navigateurs.
 */

function handleClick(e) { 
    console.log("Objet syntetique " , e)
}

function PlantItem( {name, cover, id, light, water, price} ) {

    return (
        <li key={id} className="lmj-plant-item" onClick={handleClick}>
            <span className='lmj-plant-item-price'>{price}€</span>
            <img className="lmj-plant-item-cover" src={cover} alt={`${cover} cover`} />
            {name}
            <div>
                <CareScale careType="water" scaleValue={water}  />
                <CareScale careType="light" scaleValue={light}  />
            </div>
        </li>
    )
}

export default PlantItem