import Lottie from 'lottie-react-native';
import React, {useEffect, useRef} from 'react';
import {Container} from './style';

export const Loading = () => {
  const animationRef = useRef<Lottie>(null);

  useEffect(() => {
    animationRef.current?.play();

    animationRef.current?.play(30, 120);
  }, []);
  return (
    <Container>
      <Lottie
        ref={animationRef}
        source={require('../../assets/shoes_loading.json')}
      />
    </Container>
  );
};
