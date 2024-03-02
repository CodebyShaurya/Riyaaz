import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './KingofhellBack.jpg';
import ExampleCarouselImage2 from './King of Hell front.jpg';
import './photo.css';

function CarouselFadeExample() {
  return (
    <Carousel fade className='carousele'>
      <Carousel.Item>
      <img src={ExampleCarouselImage} />

      </Carousel.Item>
      <Carousel.Item>
      <img src={ExampleCarouselImage2} />

      </Carousel.Item>
      {/* <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default CarouselFadeExample;