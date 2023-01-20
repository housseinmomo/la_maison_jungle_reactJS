import '../styles/Cart.css'

// L'attribut className permet de préciser une classe à un élément React pour lui indiquer du CSS.

// Le fichier CSS correspondant peut être importé directement dans un fichier  .js.

// L'attribut  style   permet d'intégrer du style directement, on appelle cela du inline style.

// Les images sont importées par React grâce à Webpack. Il suffit d'importer l'image souhaitée.



function Cart() {
    
    const monsteraPrice = 8
    const ivyPrice = 10
    const flowerPrice = 15

    return (<div className="lmj-cart">
                <h2>Panier</h2>
                <ul>
                    <li style={ {color: 'purple'} }>Monstera : {monsteraPrice}€</li>
                    <li>Lierre : {ivyPrice}€</li>
                    <li>Fleurs : {flowerPrice}€</li>
                </ul>
                Total : {monsteraPrice + ivyPrice + flowerPrice }€
          </div>)
    }

export default Cart