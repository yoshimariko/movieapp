import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Stack,
  HStack,
  Input,
  Button,
  Divider,
  Text,
  Link,
  Icon,
  useDisclosure
} from '@chakra-ui/react';
import { GoHome, GoHeart } from 'react-icons/go';

import Favorites from '../components/Favorites';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();

  return (
    <>
      <Stack
        direction={['column', 'column', 'row']}
        justifyContent={['initial', 'initial', 'space-between']}
        alignItems={['center', 'center', 'initial']}
        spacing="20px"
        w="100%"
        p="25px"
      >
        <Text fontSize="3xl" fontWeight="bold" alignSelf="center" m="0">
          MOVIECollect
        </Text>
        <Stack
          direction={['column-reverse', 'row', 'row']}
          justifyContent={['center', 'center', 'end']}
          w={['100%', '100%', '50%']}
          spacing={['35px', '20px', '20px']}
        >
          <HStack>
            <Input
              type="text"
              size={['md', 'lg', 'lg']}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              size={['md', 'lg', 'lg']}
              onClick={() => navigate('/search?term=' + searchQuery)}
            >
              Search
            </Button>
          </HStack>
          <HStack
            justifyContent={['center', 'center', 'initial']}
            spacing="20px"
            h="50px"
          >
            <Divider orientation="vertical" borderColor="gray.600" />
            <RouterLink to="/">
              <Icon as={GoHome} color="secondary.500" fontSize="2xl" />
            </RouterLink>
            <Divider orientation="vertical" borderColor="gray.600" />
            <Link href="#" onClick={onToggle} display="flex">
              <Icon as={GoHeart} color="secondary.500" fontSize="2xl" />
            </Link>
            <Divider orientation="vertical" borderColor="gray.600" />
          </HStack>
        </Stack>
      </Stack>
      <Divider />
      <Favorites onToggle={onToggle} isOpen={isOpen} />
    </>
  );
};
export default Header;
