import { useState } from "react"
import "../styles/Cart.css"

// L'attribut className permet de préciser une classe à un élément React pour lui indiquer du CSS.

// Le fichier CSS correspondant peut être importé directement dans un fichier  .js.

// L'attribut  style   permet d'intégrer du style directement, on appelle cela du inline style.

// Les images sont importées par React grâce à Webpack. Il suffit d'importer l'image souhaitée.



function Cart() {
	const monsteraPrice = 8
	const [cart, updateCart] = useState(0)
	const [isOpen, setIsOpen] = useState(true)

    const viderPanier = function() {
        updateCart(0)
    }

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			<h2>Panier</h2>
			<div>Monstera : {monsteraPrice}€</div>
			<button onClick={() => updateCart(cart + 1)}>Ajouter</button>
			<h3>Total : {monsteraPrice * cart}€</h3>
            <button onClick={viderPanier}>vider le panier</button>
		</div>

        
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart