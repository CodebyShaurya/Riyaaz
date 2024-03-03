import React from 'react';
import '../CSS/card.css';
const Card =(props) =>{
    return(
          
            <div>
            <div className='crd'> 
            <img src={props.src} alt={props.name} className='crdimg'/>
        <div >
            
            <hr/>
            <h1>{props.name} </h1>
            
            </div>
    </div>
            </div>

      )
  }



export default  Card;