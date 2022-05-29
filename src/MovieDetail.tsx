import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { gql, useQuery } from '@apollo/client';
import {
  Stack,
  Image,
  Text,
  Box,
  Button,
  Spinner,
  Icon
} from '@chakra-ui/react';
import { BsSuitHeartFill } from 'react-icons/bs';

import { favoritesAtom } from './recoil/atom';
import { IMAGE_PATH } from './api';

import ImagePlaceHolder from './assets/image/placeholder.png';

interface MovieImageType {
  image: string;
  id: string;
}

interface MovieInfoType {
  title: string;
  year: string;
  releaseDate: string;
  lang: Array<string>;
  genre: Array<string>;
  runtime: string;
}

const MovieImage: React.FC<MovieImageType> = ({ image, id }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [favorites, setFavorites] = useRecoilState(favoritesAtom);

  const onFavoriteClick = () => {
    setFavorites((prev: Array<string>) => {
      if (prev.includes(id)) {
        return prev.filter((favIdid: string) => favIdid !== id);
      } else {
        return [...prev, id];
      }
    });
    setIsFavorite((prevState) => !prevState);
  };

  useEffect(() => {
    setIsFavorite(favorites.includes(id));
  }, [favorites, id]);

  return (
    <Stack
      spacing="20px"
      flex="none"
      alignItems="center"
      w={['100%', '100%', 'auto']}
    >
      <Image src={image} width="300px" borderRadius="lg" />
      <Button
        size="lg"
        width={['100%', 'initial', '100%']}
        variant={isFavorite ? 'solid' : 'outline'}
        onClick={onFavoriteClick}
      >
        <Icon as={BsSuitHeartFill} me="10px" />
        {isFavorite ? 'Remove Favorite' : 'Add to Favorite'}
      </Button>
    </Stack>
  );
};

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
      <Text fontSize={['2xl', '2xl', '4xl']} fontWeight="bold">
        {title}
        <Text as="span" fontSize={['md', 'md', 'lg']} ms="5px">
          ({year})
        </Text>
      </Text>
      <Text
        fontSize={['xs', 'xs', 'sm']}
        color="gray.300"
        _groupHover={{ color: 'secondary.500' }}
      >
        {releaseDate} ({' '}
        {lang.map((item, ind) => {
          return lang.length > 1 && ind !== lang.length - 1
            ? `${item.toUpperCase()} /`
            : item.toUpperCase();
        })}{' '}
        ) ・
        {genre.map((item, ind) => {
          return genre.length > 1 && ind !== genre.length - 1
            ? `${item}, `
            : item;
        })}
        ・{runtime}
      </Text>
    </Box>
  );
};

const MovieDetails: React.FC = () => {
  const [imagePath, setimagePath] = useState<string>('');
  const navigate = useNavigate();
  const { id } = useParams();

  const movieDetailQuery = gql`
    query GetMovieDetail($id: Number) {
      details(id: $id) @rest(type: "MovieDetail", path: "/movie/{args.id}") {
        id
        title
        release_date
        backdrop_path
        poster_path
        overview
        spoken_languages {
          iso_639_1
        }
        genres {
          name
        }
      }
      media(id: $id)
        @rest(type: "MovieMedia", path: "/movie/{args.id}/images") {
        backdrops {
          file_path
        }
      }
      recommend(id: $id)
        @rest(type: "MovieMedia", path: "/movie/{args.id}/recommendations") {
        results {
          poster_path
          id
        }
      }
    }
  `;

  const { loading, data } = useQuery(movieDetailQuery, {
    variables: { id: id }
  });

  useEffect(() => {
    IMAGE_PATH.then((path: string) => setimagePath(path));
  }, []);

  return (
    <Stack spacing="35px">
      {loading ? (
        <Stack alignItems="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Stack>
      ) : (
        <>
          <Stack
            display="flex"
            borderRadius="lg"
            backgroundImage={imagePath + data.details?.backdrop_path}
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            alignItems="center"
            justifyContent="center"
            position="relative"
            py="45px"
            mx="-40px"
            mt="-40px"
          >
            <Box
              backgroundColor="blackAlpha.800"
              position="absolute"
              top="0"
              w="100%"
              h="100%"
            ></Box>
            <Stack
              direction={['column', 'column', 'row']}
              alignItems="start"
              spacing="40px"
              position="relative"
              zIndex="1"
              mx="auto"
              w="80%"
            >
              <MovieImage
                image={
                  data.details?.poster_path
                    ? imagePath + data.details?.poster_path
                    : ImagePlaceHolder
                }
                id={id?.toString() || ''}
              />
              <Stack
                spacing="25px"
                py={['1rem', '1rem', '3rem']}
                maxWidth="100%"
              >
                <MovieInfo
                  title={data.details?.title || ''}
                  year={data.details?.release_date.split('-')[0] || ''}
                  releaseDate={data.details?.release_date || ''}
                  lang={
                    data.details?.spoken_languages.map(
                      (lang: { iso_639_1: string }) => lang.iso_639_1
                    ) || []
                  }
                  genre={
                    data.details?.genres.map(
                      (genre: { name: string }) => genre.name
                    ) || []
                  }
                  runtime="2h 16m"
                />
                <Box maxW="100%">
                  <Text fontSize="xl" fontWeight="bold" mb="8px">
                    Overview
                  </Text>
                  <Text
                    fontSize={['xs', 'xs', 'sm']}
                    color="gray.300"
                    _groupHover={{ color: 'secondary.500' }}
                  >
                    {data.details?.overview}
                  </Text>
                </Box>
                {data.media.backdrops && (
                  <Box maxW="100%">
                    <Text fontSize="xl" fontWeight="bold" mb="8px">
                      Media
                    </Text>
                    <Stack direction="row" spacing="8px" overflowX="auto">
                      {data.media.backdrops.map(
                        (image: { file_path: string }, ind: number) => (
                          <Image
                            src={imagePath + image.file_path}
                            width="30%"
                            key={`rec-${ind}`}
                          />
                        )
                      )}
                    </Stack>
                  </Box>
                )}
              </Stack>
            </Stack>
          </Stack>
          {data.recommend.results.length > 0 && (
            <Stack pt="20px">
              <Text fontSize={['xl', 'xl', '2xl']} fontWeight="bold" mb="20px">
                Recommendations
              </Text>
              <Stack direction="row" spacing="15px" overflowX="auto">
                {data.recommend.results.map(
                  (
                    result: { poster_path: string; id: number },
                    ind: number
                  ) => (
                    <Image
                      key={`rec-${ind}`}
                      cursor="pointer"
                      src={
                        result.poster_path
                          ? imagePath + result.poster_path
                          : ImagePlaceHolder
                      }
                      width={['30%', '30%', '20%', '15%']}
                      onClick={() => navigate('/' + result.id.toString())}
                    />
                  )
                )}
              </Stack>
            </Stack>
          )}
        </>
      )}
    </Stack>
  );
};
export default MovieDetails;
