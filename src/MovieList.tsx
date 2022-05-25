import React, { useState } from 'react';
import {
  Stack,
  SimpleGrid,
  Image,
  Text,
  Link
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

import SamplePoster from './assets/image/sample.jpeg';

interface MovieItemType {
  image: string;
  title: string;
  date: string;
  genre: Array<string>;
}

const MovieItem: React.FC<MovieItemType> = ({
  image,
  title,
  date,
  genre
}) => {
  const [isFavorite, setFavorite] = useState<boolean>(false);

  const onFavoriteClick = () => setFavorite(prevState => !prevState);

  return (
    <Stack position="relative">
      <Link
        variant={isFavorite ? 'favoriteOn' : 'favoriteOff'}
        onClick={onFavoriteClick}
      >
        <StarIcon />
      </Link>
      <Image src={image} borderRadius="lg" />
      <Stack spacing={0}>
        <Text fontSize="large" fontWeight="bold">
          {title}
          {date && (<Text as="span" fontSize="xs" ms="5px">({date})</Text>)}
        </Text>
        <Text fontSize="xs" color="gray.300">
          {genre.map((item, ind) => {
            return (genre.length > 1) && ind !== (genre.length - 1) ? `${item}, ` : item
          })}
        </Text>
      </Stack>
    </Stack>
  );
};

const MovieList: React.FC = () => {
  return (
    <SimpleGrid columns={[2, 2, 4, 6]} spacing="35px">
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
  )
};
export default MovieList;