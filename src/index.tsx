import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import App from '~/App.tsx';
import { commonTheme, fontSize, spacing } from '~/config/customTheme';
import '~/config/localization/i18n';
import '~/index.css';

/** Custom Chakra theme */
const ChakraTheme = extendTheme({
  ...commonTheme,
  fontSizes: fontSize,
  space: spacing,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={ChakraTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
