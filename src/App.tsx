import React from 'react';
import { Container } from '@chakra-ui/react';

import Header from './components/Header';
import MovieList from './MovieList';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Container p="40px" maxW="100%">
        <MovieList />
      </Container>
    </>
  );
}

export default App;
