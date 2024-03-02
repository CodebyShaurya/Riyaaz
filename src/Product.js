import React from 'react';
import Nav from './Components/Navbar/NAv';
import Phot from './Components_Product/Photos/photo';
import Desc from './Components_Product/Product desc/desc';
import './App.css';

class App extends React.Component {




  render() {
      
      
      return (
          <div>
              <Nav/>
              <div className='prodpicname'>
                <Phot/>
                <Desc/>
              </div>

          </div>
      )
  }
}


export default  App;