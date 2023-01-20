import React from 'react';


// C’est Webpack qui nous permet d’importer notre composant aussi facilement, avec import
// Webpack permet d'importer simplement les fichiers entre eux.
import Banner from './Banner'
import Cart from './Cart';

function App() {
  
  return  <React.Fragment>
            <Banner />
            <Cart />
          </React.Fragment>
}

export default App;
