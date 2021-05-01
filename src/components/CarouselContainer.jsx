import styled from 'styled-components';
import Carousel from './Carousel';
import wIpa from '../images/wIpa.jpg';
import weizen from '../images/weizen.jpg';
import stout from '../images/stout.jpg';
import saruIpa from '../images/saruIpa.jpg';
import pilsner from '../images/pilsner.jpg';
import paleAle from '../images/paleAle.jpg';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CarouselContainer = () => {
  const beers = [wIpa, weizen, stout, saruIpa, pilsner, paleAle];

  return (
    <Container>
      <Carousel beers={beers} />
    </Container>
  );
};

export default CarouselContainer;
