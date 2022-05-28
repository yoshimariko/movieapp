import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {
  Stack,
  Box,
  Text,
  Image,
  LinkBox,
  LinkOverlay
} from '@chakra-ui/react';

import { favoritesAtom } from '../recoil/atom';

import FavoriteButton from './FavoriteButton';

interface MovieItemType {
  id: number;
  image: string;
  title: string;
  date: string;
  genre: Array<string>;
  onItemClick?: () => void;
}

const MovieItem: React.FC<MovieItemType> = ({
  id,
  image,
  title,
  date,
  genre,
  onItemClick
}) => {
  const [favorites] = useRecoilState(favoritesAtom);
  const navigate = useNavigate();

  return (
    <Stack p="8px" role="group">
      <LinkBox p="4px" overflow="hidden">
        <Box position="relative">
          <Image
            src={image}
            borderRadius="lg"
            transition="transform .2s"
            mb="15px"
            _groupHover={{ transform: 'scale(1.02)', borderTopRadius: 'lg' }}
          ></Image>
          <FavoriteButton
            movideId={id}
            isActive={favorites.includes(id.toString())}
          />
        </Box>
        <LinkOverlay
          href="#"
          onClick={() => {
            navigate('/' + id.toString());
            onItemClick && onItemClick();
          }}
        ></LinkOverlay>
        <Stack spacing={0} _groupHover={{ color: 'secondary.500' }}>
          <Text
            fontSize="large"
            fontWeight="bold"
            display="-webkit-box"
            overflow="hidden"
            style={{ WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}
          >
            {title}
          </Text>
          {date && (
            <Text as="span" fontSize="xs" fontWeight="bold">
              ({date})
            </Text>
          )}
          <Text
            fontSize="xs"
            color="gray.300"
            _groupHover={{ color: 'secondary.500' }}
          >
            {genre.map((item, ind) => {
              return genre.length > 1 && ind !== genre.length - 1
                ? `${item}, `
                : item;
            })}
          </Text>
        </Stack>
      </LinkBox>
    </Stack>
  );
};
export default MovieItem;
