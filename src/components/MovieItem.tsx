import React, { useState } from 'react';
import {
  Stack,
  Text,
  Link,
  Image
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

interface MovieItemType {
  image: string;
  title: string;
  date: string;
  genre: Array<string>;
  showButton?: boolean;
}

const MovieItem: React.FC<MovieItemType> = ({
  image,
  title,
  date,
  genre,
  showButton = true
}) => {
  const [isFavorite, setFavorite] = useState<boolean>(false);

  const onFavoriteClick = () => setFavorite(prevState => !prevState);

  return (
    <Stack position="relative" p="8px" role="group">
      {showButton && (
        <Link
          display="flex"
          position="absolute"
          top="20px"
          right="12px"
          backgroundColor="blackAlpha.600"
          borderRadius="50px"
          padding="5px"
          zIndex="1"
          transition="transform .2s"
          color={isFavorite ? 'secondary.500' : 'gray.500'}
          onClick={onFavoriteClick}
          _groupHover = {{ transform: "scale(1.2)" }}
        >
          <StarIcon />
        </Link>
      )}
      <Image
        src={image}
        borderRadius="lg"
        transition="transform .2s"
        _groupHover = {{ transform: "scale(1.02)" }}
      >
        
      </Image>
      <Stack
        spacing={0}
        _groupHover={{ color: "secondary.500" }}
      >
        <Text fontSize="large" fontWeight="bold">
          {title}
          {date && (<Text as="span" fontSize="xs" ms="5px">({date})</Text>)}
        </Text>
        <Text
          fontSize="xs"
          color="gray.300"
          _groupHover={{ color: "secondary.500" }}
        >
          {genre.map((item, ind) => {
            return (genre.length > 1) && ind !== (genre.length - 1) ? `${item}, ` : item
          })}
        </Text>
      </Stack>
    </Stack>
  );
};
export default MovieItem;