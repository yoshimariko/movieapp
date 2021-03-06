import { extendTheme, ComponentStyleConfig } from '@chakra-ui/react';

// ================================================
// Components
// ================================================
const Button: ComponentStyleConfig = {
  variants: {
    solid: {
      backgroundColor: 'secondary.500',
      _hover: {
        backgroundColor: 'secondary.50'
      }
    },
    outline: {
      borderColor: 'secondary.500',
      color: 'secondary.500',
      _hover: {
        backgroundColor: 'secondary.500',
        color: '#FFFFFF'
      }
    }
  }
};

const Input: ComponentStyleConfig = {
  variants: {
    outline: {
      field: {
        backgroundColor: 'tertiary.500',
        borderColor: 'primary.50',
        color: 'white',
        _focus: {
          backgroundColor: 'tertiary.500'
        }
      }
    }
  },
  defaultProps: {
    variant: 'outline'
  }
};

const Link: ComponentStyleConfig = {
  baseStyle: {
    _hover: {
      textDecoration: 'none'
    },
    _focus: {
      boxShadow: 'none'
    }
  }
};

// ================================================
// Theme
// ================================================
export const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: 'white',
        bg: '#041C32'
      }
    }
  },
  fonts: {
    body: 'Raleway, system-ui, sans-serif'
  },
  colors: {
    primary: {
      50: '#064663',
      500: '#041C32'
    },
    secondary: {
      50: '#ECB365',
      500: '#E4A043'
    },
    tertiary: {
      500: '#04293A',
      700: '#042939'
    }
  },
  components: {
    Button,
    Input,
    Link
  }
});
