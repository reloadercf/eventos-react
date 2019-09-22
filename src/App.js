import React from 'react';
import Header from './components/Header'

import CategorigasProvider from './components/context/CategoriasContext'
import EventosProvider from './components/context/EventosContext'
import Formulario from './components/Formaulario'
import ListaEventos from './components/ListaEventos'

function App() {
  return (
    <EventosProvider>
    <CategorigasProvider>
      <Header/>
      <div className='uk-container'>
        <Formulario/>
        <ListaEventos/>
      </div>
    </CategorigasProvider>
   </EventosProvider>
  );
}

export default App;
