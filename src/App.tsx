import React from 'react';
import { Container } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import MovieList from './MovieList';
import MovieDetails from './MovieDetail';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
        <Container p="40px" maxW="100%">
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/:id" element={<MovieDetails />} />
          </Routes>
        </Container>
    </BrowserRouter>
  );
}

export default App;
