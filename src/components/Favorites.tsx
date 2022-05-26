import React from 'react';
import {
  VStack,
  HStack,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { StarIcon, CloseIcon } from '@chakra-ui/icons';

import MovieItem from './MovieItem';
import SamplePoster from '../assets/image/sample.jpeg';

const Favorites: React.FC<{ onToggle: () => void }> = ({ onToggle }) => {
  return (
    <VStack backgroundColor="tertiary.500" minHeight="100%" pb="20px">
      <VStack
        alignItems="center"
        justifyContent="center"
        my="20px"
      >
        <CloseIcon onClick={onToggle} fontSize="2xl" my="30px" />
        <HStack>
          <StarIcon fontSize="2xl" color="secondary.500" me="5px" />
          <Text
            fontSize="4xl"
            fontWeight="bold"
            color="secondary.500"
          >
            Favorites
          </Text>
          <StarIcon fontSize="2xl" color="secondary.500" me="5px" />
        </HStack>
      </VStack>
      <SimpleGrid columns={[2, 2, 4, 5]} spacing="35px" px="20px">
        <MovieItem
          image={SamplePoster}
          title="Sample 1"
          date="2001"
          genre={["Horror", "Thriller"]}
          showButton={false}
        />
        <MovieItem
          image={SamplePoster}
          title="Sample 2"
          date="2002"
          genre={["Horror", "Suspense"]}
          showButton={false}
        />
        <MovieItem
          image={SamplePoster}
          title="Sample 3"
          date="2003"
          genre={["Comedy"]}
          showButton={false}
        />
        <MovieItem
          image={SamplePoster}
          title="Sample 4"
          date="2004"
          genre={[]}
          showButton={false}
        />
        <MovieItem
          image={SamplePoster}
          title="Sample 5"
          date="2005"
          genre={["Drama"]}
          showButton={false}
        />
        <MovieItem
          image={SamplePoster}
          title="Sample 6"
          date="2006"
          genre={["Drama", "Sci-Fi"]}
          showButton={false}
        />
        <MovieItem
          image={SamplePoster}
          title="Sample 7"
          date="2007"
          genre={["Drama", "Sci-Fi"]}
          showButton={false}
        />
      </SimpleGrid>
    </VStack>
  )
}
export default Favorites;