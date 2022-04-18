import { extendTheme } from '@chakra-ui/react';

const colors = {
  text: {
    orange: '#EE9938',
    gold: '#A36620',
    blue: '#F5F7FF',
    lightBlue: "#F7F9FB",
    deepBlue: "#0B0966",
    gray: '#767474',
    pink: "#FFF9FD",
    black100: "#050911"
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
      _hover: { textDecoration: "none !important" }
    }
  }
}
export const theme = extendTheme({ colors, styles });