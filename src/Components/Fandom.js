import React from 'react';
import '../CSS/Fandom.css'
import Card from './card';
import naruto from '../Pictures/Uzumaki.jpg';
import kop from '../Pictures/King of pirates.jpg';
import saiyan from '../Pictures/Saiyan.jpg';
import spl from '../Pictures/Ganesh Chaturti.jpg';
class App extends React.Component {




  render() {
      
      
      return (
          <div>
            <p className='brow'>Browse by Fandom</p>
            <div className='crdgrid'>
                <Card src={kop} name='One piece' />
                <Card src={naruto} name='Naruto' />
                <Card src={saiyan} name='Dragon Ball' />
                <Card src={spl} name='Ganesh Chaturti Special'/>
            </div>

          </div>
      )
  }
}


export default  App;