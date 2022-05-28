import React, { useEffect, useState } from 'react';
import {
  Stack,
  SimpleGrid,
  Text,
  Spinner
} from '@chakra-ui/react';
import {
  ArrowRightIcon,
  ArrowLeftIcon
} from '@chakra-ui/icons';
import { gql, useQuery } from '@apollo/client';

import { GENRE, IMAGE_PATH } from './api';

import MovieItem from './components/MovieItem';

const MovieList: React.FC = () => {
  const [imagePath, setimagePath] = useState<string>('');
  
  const nowPlayingQuery = gql`
    query GetNowPlaying {
      movies @rest(type: "MovieList", path: "/movie/now_playing") {
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

  const { loading, data } = useQuery(nowPlayingQuery);

  useEffect(() => {
    IMAGE_PATH.then((path: string) => setimagePath(path));
  }, []);

  return (
    <>
      {loading ? (
        <Stack alignItems="center">
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />
        </Stack>
      ) : (
        <Stack>
          <Stack
            alignItems={["center", "center", "initial"]}
            justifyContent="space-between"
            mb="25px"
          >
            <Text
              fontSize={["2xl", "3xl"]}
              fontWeight="bold"
              color="secondary.500"
            >
              <ArrowLeftIcon fontSize={["14px", "18px"]} />
              <Text as="span" px="8px">Now Playing</Text>
              <ArrowRightIcon fontSize={["14px", "18px"]} />
            </Text>
          </Stack>
          <SimpleGrid columns={[2, 2, 4, 5]} spacing="15px">
            {data.movies.results.map((movie: {
              id: number;
              poster_path: string;
              title: string;
              release_date: string;
              genre_ids: Array<number>
            }) => (
              <MovieItem
                key={`movie-${movie.id}`}
                id={movie.id}
                image={imagePath + movie.poster_path}
                title={movie.title}
                date={movie.release_date.split('-')[0]}
                genre={movie.genre_ids.map((id: number) => GENRE[id])}
              />
            ))}
          </SimpleGrid>
        </Stack>
      )}
    </>
  )
};
export default MovieList;