import { extendTheme } from '@chakra-ui/react';

const colors = {
  text: {
    orange: '#EE9938',
    gold: '#A36620',
    blue: '#F5F7FF',
    gray: '#767474'
  },
};


const styles = {
  global: {
    html: {
      overflowX: 'hidden',
    },
    'html, body': {
      fontSize: '16px',
      fontFamily: "'Poppins', sans-serif",
      fontWeight: '400',
      height: '100%',
    },
    'a': {
      // _hover: { textDecoration: "none" }
    }
  }
}
export const theme = extendTheme({ colors, styles });