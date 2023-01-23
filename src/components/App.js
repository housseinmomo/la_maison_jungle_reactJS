import React from 'react';


// C’est Webpack qui nous permet d’importer notre composant aussi facilement, avec import
// Webpack permet d'importer simplement les fichiers entre eux.
import Banner from './Banner'
import Cart from './Cart'
import QuestionForm from './QuestionForm';
import ShoppingList from './ShoppingList';
import Footer from "./Footer"

function App() {
  
  return  <React.Fragment>
            <Banner />
            {/* <Cart /> */}
            <ShoppingList />
            <Footer />
          </React.Fragment>
}

export default App;
