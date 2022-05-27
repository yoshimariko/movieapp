import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Stack,
  Text,
  Link,
  Image,
  LinkBox,
  LinkOverlay,
  Icon,
} from '@chakra-ui/react';
import { BsSuitHeartFill } from 'react-icons/bs';

interface MovieItemType {
  id: number;
  image: string;
  title: string;
  date: string;
  genre: Array<string>;
}

const MovieItem: React.FC<MovieItemType> = ({
  id,
  image,
  title,
  date,
  genre
}) => {
  const [isFavorite, setFavorite] = useState<boolean>(false);
  const navigate = useNavigate();

  const onFavoriteClick = () => setFavorite(prevState => !prevState);

  return (
    <Stack p="8px" role="group">
      <LinkBox position="relative" p="4px" overflow="hidden">
        <Link
          display="flex"
          backgroundColor="black"
          justifyContent="center"
          borderTopRadius="lg"
          position="absolute"
          transition=".5s ease"
          zIndex="1"
          left="0"
          py="4px"
          w="100%"
          h={isFavorite ? '10%' : '0'}
          top={isFavorite ? '0' : '-15%'}
          color={isFavorite ? 'secondary.500' : 'gray.500'}
          onClick={onFavoriteClick}
          _groupHover = {{ height: '10%', top: '0' }}
        >
          <Icon
            as={BsSuitHeartFill}
            fontSize="lg"
            position="absolute"
            transform="translate(-50%, -50%)"
            top="45%"
            left="50%"
          />
        </Link>
        <Image
          src={image}
          borderRadius="lg"
          transition="transform .2s"
          mb="10px"
          _groupHover = {{ transform: "scale(1.02)", borderTopRadius: "lg" }}
        >
        </Image>
        <LinkOverlay href="#" onClick={() => navigate(id.toString())}></LinkOverlay>
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
      </LinkBox>
    </Stack>
  );
};
export default MovieItem;