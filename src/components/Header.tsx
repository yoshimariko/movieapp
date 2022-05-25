import React from 'react';
import {
  Stack,
  HStack,
  Input,
  Button,
  Divider,
  Link,
  Text
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const Header: React.FC = () => {
  return (
    <>
      <Stack
        direction={['column-reverse', 'column-reverse', 'row']}
        justifyContent={['initial', 'initial', 'space-between']}
        alignItems={['center', 'center', 'initial']}
        spacing="20px"
        w="100%"
        p="25px"
      >
        <Link display="flex" alignItems="center">
          <StarIcon color="secondary.500" me="5px" />
          <Text
            as="span"
            color="secondary.500"
            fontWeight="bold"
          >
            My Favorites
          </Text>
        </Link>
        <HStack spacing="10px" w={['100%', '100%', '55%']}>
          <Input type="text" size={['md', 'lg', 'lg']} />
          <Button size={['md', 'lg', 'lg']}>Search</Button>
        </HStack>
      </Stack>
      <Divider />
    </>
  )
};
export default Header;