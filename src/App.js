import React from 'react';
import Header from './components/Header'

import CategorigasProvider from './components/context/CategoriasContext'
import Formulario from './components/Formaulario'

function App() {
  return (
   <CategorigasProvider>
     <Header/>
     <div className='uk-container'>
      <Formulario/>
     </div>
   </CategorigasProvider>
  );
}

export default App;
