import React from 'react';
import {
  Stack,
  SimpleGrid,
  Text
} from '@chakra-ui/react';
import {
  ArrowRightIcon,
  ArrowLeftIcon
} from '@chakra-ui/icons';

import MovieItem from './components/MovieItem';
import SamplePoster from './assets/image/sample.jpeg';

const MovieList: React.FC = () => {

  return (
    <>
      <Stack
        direction={["column-reverse", "row"]}
        alignItems="center"
        justifyContent="space-between"
        mb="45px"
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
    </>
  )
};
export default MovieList;