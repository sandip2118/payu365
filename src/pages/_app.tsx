import '../styles/global.css';
import AppProvider from '../context/AppProvider';
import type { AppProps } from 'next/app';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ThemeProvider } from '@mui/material';
import theme from '@/themes/theme'
import "rsuite/dist/rsuite.min.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  </ThemeProvider>
);

export default MyApp;
