import React from 'react';
import {
  Stack,
  Image,
  Text,
  Box,
  Button,
  Icon
} from '@chakra-ui/react';
import { BsSuitHeartFill } from 'react-icons/bs';

import SampleBackdrop from './assets/image/sample_backdrop.jpeg'
import SamplePoster from './assets/image/sample.jpeg';

interface MovieImageType {
  image: string;
  id: string;
}

interface MovieInfoType {
  title: string;
  year: string;
  releaseDate: string;
  lang: string;
  genre: Array<string>;
  runtime: string;
}

const MovieImage: React.FC<MovieImageType> = ({
  image,
  id
}) => {
  // TODO: use Id for add to favorite.
  return(
    <Stack
      spacing="20px"
      flex="none"
      alignItems="center"
      w={["100%", "100%", "auto"]}
    >
      <Image
        src={image}
        width="300px"
        borderRadius="lg"
      />
      <Button
        size="lg"
        width={["100%", "initial", "100%"]}
        variant="outline"
      >
        <Icon as={BsSuitHeartFill} me="10px" />
        Add to Favorite
      </Button>
    </Stack>
  );
}

const MovieInfo: React.FC<MovieInfoType> = ({
  title,
  year,
  releaseDate,
  lang,
  genre,
  runtime
}) => {
  return (
    <Box maxW="100%">
      <Text fontSize={["2xl", "2xl", "4xl"]} fontWeight="bold">
        {title}
        <Text as="span" fontSize={["md", "md", "lg"]} ms="5px">
          ({year})
        </Text>
      </Text>
      <Text
        fontSize={["xs", "xs", "sm"]}
        color="gray.300"
        _groupHover={{ color: "secondary.500" }}
      >
        {releaseDate} ({lang}) ・
        {genre.map((item, ind) => {
          return (genre.length > 1) && ind !== (genre.length - 1) ? `${item}, ` : item;
        })}・
        {runtime}
      </Text>
    </Box>
  );
}

const MovieDetails: React.FC = () => {
  return(
    <Stack
      display="flex"
      backgroundImage={SampleBackdrop}
      backgroundRepeat="no-repeat"
      alignItems="center"
      justifyContent="center"
      position="relative"
      minHeight="87.2vh"
      h="100%"
      py="45px"
      m="-40px"
    >
      <Box
        backgroundColor="blackAlpha.800"
        position="absolute"
        top="0"
        w="100%"
        h="100%"
      ></Box>
      <Stack
        direction={["column", "column", "row"]}
        alignItems="start"
        spacing="40px"
        position="relative"
        zIndex="1"
        mx="auto"
        w="80%"
      >
        <MovieImage image={SamplePoster} id="1" />
        <Stack
          spacing="25px"
          py={["1rem", "1rem", "3rem"]}
          maxWidth="100%"
        >
          <MovieInfo
            title="Sample Title"
            year="2001"
            releaseDate="01/01/2001"
            lang="JP"
            genre={['Crime', 'Thriller']}
            runtime="2h 16m"
          />
          <Box maxW="100%">
            <Text fontSize="xl" fontWeight="bold" mb="8px">Overview</Text>
            <Text
              fontSize={["xs", "xs", "sm"]}
              color="gray.300"
              _groupHover={{ color: "secondary.500" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default MovieDetails;