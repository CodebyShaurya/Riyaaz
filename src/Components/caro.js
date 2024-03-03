import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage1 from '../Pictures/1.png';
import ExampleCarouselImage2 from '../Pictures/Screenshot (334).jpg';
import ExampleCarouselImage3 from '../Pictures/Colorful Guitar Hippie Playlist 2022 Youtube Channel Art.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/caro.css';

function UncontrolledExample() {
  return (
    <div className='up'>
    <Carousel data-bs-theme="dark" >
      <Carousel.Item>
        <img className='carosel' src={ExampleCarouselImage1} />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img className='carosel' src={ExampleCarouselImage2} />

      </Carousel.Item>
      <Carousel.Item>
      <img className='carosel' src={ExampleCarouselImage3} />

      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;