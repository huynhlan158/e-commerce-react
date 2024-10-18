import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import App from '~/App.tsx';
import AuthProvider from '~/contexts/auth/AuthProvider';
import {
  commonTheme,
  fontSize,
  spacing,
  buttonTheme,
} from '~/config/customTheme';
import '~/config/localization/i18n';
import '~/index.css';

/** Custom Chakra theme */
const ChakraTheme = extendTheme({
  ...commonTheme,
  fontSizes: fontSize,
  space: spacing,
  components: {
    Button: buttonTheme,
  },
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={ChakraTheme}>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
        <Toaster gutter={16} />
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);
