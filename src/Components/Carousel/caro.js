import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage1 from './Naruto.png';
import ExampleCarouselImage2 from './Screenshot (334).png';
import ExampleCarouselImage3 from './Screenshot (335).png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './caro.css';

function UncontrolledExample() {
  return (
    <div className='up'>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img src={ExampleCarouselImage1} />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img src={ExampleCarouselImage2} />

      </Carousel.Item>
      <Carousel.Item>
      <img src={ExampleCarouselImage3} />

      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;