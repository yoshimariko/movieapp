import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { gql } from '@apollo/client';
import {
  VStack,
  HStack,
  SimpleGrid,
  Slide,
  Text,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

import { favoritesAtom } from '../recoil/atom';
import { GET, IMAGE_PATH } from '../api';

import MovieItem from './MovieItem';

interface FavoritesType {
  isOpen: boolean;
  onToggle: () => void;
}

interface FavoritesItemsType {
  favorites: {
    id: number;
    poster_path: string;
    title: string;
    release_date: string;
    genres: Array<{ name: string; }>
  }
}

const Favorites: React.FC<FavoritesType> = ({
  isOpen,
  onToggle
}) => {
  const [movieList, setMovieList] = useState<Array<FavoritesItemsType>>([]);
  const [imagePath, setimagePath] = useState<string>('');
  const [favorites] = useRecoilState(favoritesAtom);

  const favoritesQuery = gql`
    query GetFavorites ($id: String) {
      favorites(id: $id) @rest(type: "Favorite", path: "/movie/{args.id}") {
        id
        poster_path
        title
        release_date
        genres {
          name
        }
      }
    }
  `;

  useEffect(() => {
    const promises = favorites.map(async (id: string) => {
      return await GET(favoritesQuery, {id: id})
    });
    Promise.all(promises).then((res) => setMovieList(res));

    IMAGE_PATH.then((path: string) => setimagePath(path));
  }, [favorites, favoritesQuery]);

  return (
    <Slide
      style={{ zIndex: 10, top: 0, overflow: 'scroll', minHeight: '100vh' }}
      direction="bottom"
      in={isOpen}
    >
      <VStack spacing="35px" backgroundColor="tertiary.500" minHeight="100%" pb="20px">
        <VStack
          alignItems="center"
          justifyContent="center"
          spacing="30px"
          my="20px"
        >
          <CloseIcon onClick={onToggle} fontSize="2xl" my="30px" />
          <HStack>
            <Text
              fontSize="4xl"
              fontWeight="bold"
              color="secondary.500"
            >
              Favorites
            </Text>
          </HStack>
        </VStack>
        <SimpleGrid columns={[2, 2, 4, 5]} spacing="35px" px="15px">
          {movieList.map((movie: FavoritesItemsType) => (
            <MovieItem
              key={`favorite-${movie.favorites.id}`}
              id={movie.favorites.id}
              image={imagePath + movie.favorites.poster_path}
              title={movie.favorites.title}
              date={movie.favorites.release_date.split('-')[0]}
              genre={movie.favorites.genres.map((genre) => genre.name)}
              onItemClick={onToggle}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </Slide>
  )
}
export default Favorites;