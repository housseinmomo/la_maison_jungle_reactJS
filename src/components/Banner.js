import '../styles/Banner.css'
import logo from '../assets/logo.png'


function Banner({ children }) {
	return <div className='lmj-banner'>{children}</div>
}


//  Il s'agit d'une syntaxe prévue dans l'ES6, qui vous épargnera d'utiliser les accolades au moment de l'import. 
export default Banner