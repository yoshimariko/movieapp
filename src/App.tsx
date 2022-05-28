import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { Container } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { client } from './api'

import Header from './components/Header';
import MovieList from './MovieList';
import MovieDetails from './MovieDetail';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Header />
          <Container p="40px" maxW="100%">
            <Routes>
              <Route path="/" element={<MovieList />} />
              <Route path="/:id" element={<MovieDetails />} />
            </Routes>
          </Container>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
