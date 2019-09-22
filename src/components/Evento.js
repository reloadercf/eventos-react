import React from 'react';
const Evento = ({evento}) => {

    let {text}=evento.description;
    let texto250=text.substr(0,250)
    
    
    return ( 
    <div>
        <div className='uk-card uk-card-default'>
            <div className='uk-card-media-top'>
                {evento.logo?<img src={evento.logo.url} alt={evento.name}/>:null}
            </div>
            <div className='uk-card-body'>
            {evento.name?
                <span><h3 className='uk-card-title'>{evento.name.text}</h3>
                {texto250}</span>
                :null}
            </div>
            <div className='uk-card-footer'>
                <a target='_blank' rel='noopener noreferrer' href={evento.url} className='uk-button uk-button-danger'>
                    Más Información
                </a>

            </div>
        </div>
    </div>
     );
}
 
export default Evento;