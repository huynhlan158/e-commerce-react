import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import App from '~/App.tsx';
import DisclosureProvider from '~/contexts/disclosure/DisclosureProvider';
import { store } from '~/state/store';
import {
  commonTheme,
  fontSize,
  spacing,
  screens,
  buttonTheme,
  drawerTheme,
  modalTheme,
} from '~/config/customTheme';
import '~/config/localization/i18n';
import '~/index.css';

/** Custom Chakra theme */
const ChakraTheme = extendTheme({
  ...commonTheme,
  fontSizes: fontSize,
  space: spacing,
  breakpoints: screens,
  components: {
    Button: buttonTheme,
    Drawer: drawerTheme,
    Modal: modalTheme,
  },
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={ChakraTheme}>
      <QueryClientProvider client={queryClient}>
        <ReduxProvider store={store}>
          <DisclosureProvider>
            <App />
            <Toaster gutter={16} />
          </DisclosureProvider>
        </ReduxProvider>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
