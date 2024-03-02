
import React from 'react';
import Nav from './Components/Navbar/NAv';
import Car from './Components/Carousel/caro';
import Fandom from './Components/Fandom/Fandom';
import Tsp from './Components/Top selling products/tsp';
import Footer from './Components/Foter/Footer';
import './App.css';

class App extends React.Component {




  render() {
      
      
      return (
          <div>
              <Nav/>
              <Car/>
              <Fandom/>
              <Tsp/>
              <Footer/>
          </div>
      )
  }
}


export default  App;
