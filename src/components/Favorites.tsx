import React from 'react';
import {
  VStack,
  HStack,
  SimpleGrid,
  Slide,
  Text,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

import MovieItem from './MovieItem';
import SamplePoster from '../assets/image/sample.jpeg';

interface FavoritesType {
  isOpen: boolean;
  onToggle: () => void;
}

const Favorites: React.FC<FavoritesType> = ({
  isOpen,
  onToggle
}) => {
  // FIXME: Close favorite on movie image click
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
          <MovieItem
            id={1}
            image={SamplePoster}
            title="Sample 1"
            date="2001"
            genre={["Horror", "Thriller"]}
          />
          <MovieItem
            id={1}
            image={SamplePoster}
            title="Sample 2"
            date="2002"
            genre={["Horror", "Suspense"]}
          />
          <MovieItem
            id={1}
            image={SamplePoster}
            title="Sample 3"
            date="2003"
            genre={["Comedy"]}
          />
          <MovieItem
            id={1}
            image={SamplePoster}
            title="Sample 4"
            date="2004"
            genre={[]}
          />
          <MovieItem
            id={1}
            image={SamplePoster}
            title="Sample 5"
            date="2005"
            genre={["Drama"]}
          />
          <MovieItem
            id={1}
            image={SamplePoster}
            title="Sample 6"
            date="2006"
            genre={["Drama", "Sci-Fi"]}
          />
          <MovieItem
            id={1}
            image={SamplePoster}
            title="Sample 7"
            date="2007"
            genre={["Drama", "Sci-Fi"]}
          />
        </SimpleGrid>
      </VStack>
    </Slide>
  )
}
export default Favorites;