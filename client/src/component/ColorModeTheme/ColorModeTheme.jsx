import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/core';

const styles = {
  global: props => ({
    body: {
      color: mode('blackAlpha.900', 'whiteAlpha.900')(props),//esta es linea que deberias cambiar para modifcar el dark que tienes por default
      bg: mode('whiteAlpha.900', 'blackAlpha.900')(props),
    },
  }),
};

const theme = extendTheme({
  styles,
});

export default theme