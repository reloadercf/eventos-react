import React, { Component } from 'react';
import axios from 'axios'


let EventosContext=React.createContext();
export let EventosConsumer=EventosContext.Consumer

class EventosProvider extends Component {
    
    state = { 
        eventos:[]
     }

    token='UFBZIPWIYZY4VCJSLTJ2'

    obtenerEventos=async (busqueda)=>{
        let url =`https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=date&token=${this.token}&locale=es_ES`;
        let eventos=await axios(url)
        this.setState({
            eventos:eventos.data.events
        })
    }

    render() { 
        return ( 
            <EventosContext.Provider
                value={{
                    eventos:this.state.eventos,
                    obtenerEventos: this.obtenerEventos
                }}
            >
                {this.props.children}
            </EventosContext.Provider>
         );
    }
}
 
export default EventosProvider;