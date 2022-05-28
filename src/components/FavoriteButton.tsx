import React, { useState } from 'react';
import { Link, Icon, Tooltip } from '@chakra-ui/react';
import { BsSuitHeartFill } from 'react-icons/bs';

const FavoriteButton: React.FC<{ movideId: number }> = ({ movideId }) => {
  const [isFavorite, setFavorite] = useState<boolean>(false);

  const onFavoriteClick = () => setFavorite(prevState => !prevState);

  return(
    <Tooltip
      hasArrow
      bg="gray.300"
      color="black"
      placement="top-start"
      label={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    >
      <Link
        display="flex"
        alignItems="center"
        borderRadius="full"
        position="absolute"
        transition=".5s ease"
        zIndex="1"
        left="15px"
        bottom="10px"
        p="10px"
        backgroundColor={isFavorite ? 'secondary.500' : 'black'}
        color={isFavorite ? 'white' : 'gray.500'}
        onClick={onFavoriteClick}
        _hover={{ backgroundColor: 'secondary.500', color: 'white' }}
      >
        <Icon
          as={BsSuitHeartFill}
          fontSize={["xs", "md", "md"]}
        />
      </Link>
    </Tooltip>
  );
};
export default FavoriteButton;