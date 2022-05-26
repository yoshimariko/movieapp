import React from 'react';
import {
  Stack,
  HStack,
  Input,
  Button,
  Divider,
  Text
} from '@chakra-ui/react';

const Header: React.FC = () => {
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
        <Text
          fontSize="3xl"
          fontWeight="bold"
          alignSelf="center"
          m="0"
        >
          MY MOVIES
        </Text>
        <HStack spacing="10px" w={['100%', '100%', '40%']}>
          <Input type="text" size={['md', 'lg', 'lg']} />
          <Button size={['md', 'lg', 'lg']}>Search</Button>
        </HStack>
      </Stack>
      <Divider />
    </>
  )
};
export default Header;