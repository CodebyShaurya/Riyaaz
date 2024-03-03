import React from 'react';
import Nav from '../Components/NAv';
import Car from '../Components/caro';
import Fandom from '../Components/Fandom';
import Tsp from '../Components/tsp';
import Footer from '../Components/Footer';
import '../CSS/home.css';

class App extends React.Component {




  render() {
      
      
      return (
          <div>
              <Nav/>
              <Car/>
              {/* <Fandom/>
              <Tsp/> */}
              <div className='tagline'>
                    
                    Unleash Your Inner Musician with AI-Powered Learning
              </div>

              <div className='features'>
                <div className='feathead'>
                    What do we offer ??
                </div>
                <div className='featuregrid'>
                    <div className='feat'>
                        <div className='sticker'>🎹</div>
                        <div className='point'>LOREM IMPSUM LORE IPSUM LOREM IPUS</div>
                    </div>

                    <div className='feat'>
                        <div className='sticker'>🎸</div>
                        <div className='point'>LOREM IMPSUM LORE IPSUM LOREM IPUS</div>
                    </div>


                    <div className='feat'>
                        <div className='sticker'>🎺</div>
                        <div className='point'>LOREM IMPSUM LORE IPSUM LOREM IPUS</div>
                    </div>

                    <div className='feat'>
                        <div className='sticker'>🎵</div>
                        <div className='point'>LOREM IMPSUM LORE IPSUM LOREM IPUS</div>
                    </div>
                </div>





                <div className='account grid1'> 
                    <h1 >Create your account and start Improving today</h1>
                    <div><button className='blacknwhit'>Get Started</button></div>
                    <div><button className='whitnblack'>View Demo</button></div>
                </div> 



              </div>



              <Footer/>
          </div>
      )
  }
}


export default  App;
