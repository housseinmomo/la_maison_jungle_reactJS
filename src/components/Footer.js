import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
        // on modifie l'ancienne valeur par la nouvelle saisie par l'utilisateur 
		setInputValue(e.target.value)
	}

	function handleBlur() {
        // on verifie si l'utilisateur a mis [@] avant de cliquer on dehors de l'input [champs] 
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}
//l'événement  blur (quand on clique en dehors du champ) qui déclenche une alerte si inputValue ne contient pas le caractère @ **/}
	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
		</footer>
	)
}

export default Footer