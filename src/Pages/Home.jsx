import React from 'react';
import Nav from '../Components/NAv';
import Car from '../Components/caro';
import Fandom from '../Components/Fandom';
import Tsp from '../Components/tsp';
import Footer from '../Components/Footer';
// import '../CSS/App.css';

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
