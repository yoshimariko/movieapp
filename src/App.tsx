import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { Container } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { client } from './api'

import Header from './components/Header';
import MovieList from './MovieList';
import MovieDetails from './MovieDetail';
import SearchResult from './SearchResult';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Header />
          <Container p="40px" maxW="100%">
            <Routes>
              <Route path="/" element={<MovieList />} />
              <Route path="/:id" element={<MovieDetails />} />
              <Route path="/search" element={<SearchResult />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </ApolloProvider>
    </RecoilRoot>
  );
}

export default App;
