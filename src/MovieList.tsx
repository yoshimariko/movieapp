import React from 'react';
import {
  Stack,
  SimpleGrid,
  Text,
  Button,
  Slide,
  useDisclosure
} from '@chakra-ui/react';
import {
  StarIcon,
  ArrowRightIcon,
  ArrowLeftIcon
} from '@chakra-ui/icons';

import MovieItem from './components/MovieItem';
import Favorites from './components/Favorites';
import SamplePoster from './assets/image/sample.jpeg';

const MovieList: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Stack
        direction={["column-reverse", "row"]}
        spacing={["25px", "initial"]}
        alignItems="center"
        justifyContent="space-between"
        mb="20px"
      >
        <Text
          fontSize={["xl", "2xl"]}
          fontWeight="bold"
          color="secondary.500"
        >
          <ArrowLeftIcon fontSize={["14px", "18px"]} />
          <Text as="span" px="8px">Now Playing</Text>
          <ArrowRightIcon fontSize={["14px", "18px"]} />
        </Text>
        <Button
          size="lg"
          width={["100%", "initial"]}
          variant="outline"
          onClick={onToggle}
        >
          <StarIcon me="5px" />
          Favorites
        </Button>
      </Stack>
      <SimpleGrid columns={[2, 2, 4, 5]} spacing="35px">
        <MovieItem
          image={SamplePoster}
          title="Sample 1"
          date="2001"
          genre={["Horror", "Thriller"]}
        />
        <MovieItem
          image={SamplePoster}
          title="Sample 2"
          date="2002"
          genre={["Horror", "Suspense"]}
        />
        <MovieItem
          image={SamplePoster}
          title="Sample 3"
          date="2003"
          genre={["Comedy"]}
        />
        <MovieItem
          image={SamplePoster}
          title="Sample 4"
          date="2004"
          genre={[]}
        />
        <MovieItem
          image={SamplePoster}
          title="Sample 5"
          date="2005"
          genre={["Drama"]}
        />
        <MovieItem
          image={SamplePoster}
          title="Sample 6"
          date="2006"
          genre={["Drama", "Sci-Fi"]}
        />
        <MovieItem
          image={SamplePoster}
          title="Sample 7"
          date="2007"
          genre={["Drama", "Sci-Fi"]}
        />
      </SimpleGrid>
      <Slide
        style={{ zIndex: 10, top: 0, overflow: 'scroll', minHeight: '100vh' }}
        direction="bottom"
        in={isOpen}
      >
        <Favorites onToggle={onToggle} />
      </Slide>
    </>
  )
};
export default MovieList;