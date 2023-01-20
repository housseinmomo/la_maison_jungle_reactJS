import '../styles/Banner.css'
import logo from '../assets/logo.png'


function Banner () {

    const title = "La maison de la jungle"

    return <div className="lmj-banner">
        <img src={logo} alt={title} className="lmj-logo" />
        <h1 className='lmj-title'>{title}</h1>
    </div>
}


//  Il s'agit d'une syntaxe prévue dans l'ES6, qui vous épargnera d'utiliser les accolades au moment de l'import. 
export default Banner