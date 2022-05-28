import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Stack, SimpleGrid, Text, Spinner } from '@chakra-ui/react';
import { gql, useQuery } from '@apollo/client';

import { GENRE, IMAGE_PATH } from './api';

import MovieItem from './components/MovieItem';

const SearchResult: React.FC = () => {
  const [imagePath, setimagePath] = useState<string>('');
  const [urlParams] = useSearchParams();
  const keyword = urlParams.get('term');

  const searchQuery = gql`
    query SearchMovie($key: String, $keyword: String) {
      movies(key: $key, keyword: $keyword)
        @rest(
          type: "MovieList"
          path: "/search/movie?api_key={args.key}&query={args.keyword}"
        ) {
        results {
          id
          poster_path
          title
          genre_ids
          release_date
        }
      }
    }
  `;
  const { loading, data } = useQuery(searchQuery, {
    variables: {
      key: process.env.REACT_APP_API_KEY,
      keyword: keyword
    }
  });

  useEffect(() => {
    IMAGE_PATH.then((path: string) => setimagePath(path));
  }, [keyword]);

  return (
    <>
      {loading ? (
        <Stack alignItems="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Stack>
      ) : (
        <Stack>
          <Stack
            direction={['column-reverse', 'row']}
            alignItems="center"
            justifyContent="space-between"
            mb="25px"
          >
            <Text
              fontSize={['2xl', '3xl']}
              fontWeight="bold"
              color="secondary.500"
            >
              <Text as="span" px="8px">
                Search Results:
              </Text>
            </Text>
          </Stack>
          {data.movies.results <= 0 && <Text ps="25px">No Search Found.</Text>}
          <SimpleGrid columns={[2, 2, 4, 5]} spacing="15px">
            {data.movies.results.map(
              (movie: {
                id: number;
                poster_path: string;
                title: string;
                release_date: string;
                genre_ids: Array<number>;
              }) => (
                <MovieItem
                  key={`movie-${movie.id}`}
                  id={movie.id}
                  image={imagePath + movie.poster_path}
                  title={movie.title}
                  date={movie.release_date.split('-')[0]}
                  genre={movie.genre_ids.map((id: number) => GENRE[id])}
                />
              )
            )}
          </SimpleGrid>
        </Stack>
      )}
    </>
  );
};
export default SearchResult;
