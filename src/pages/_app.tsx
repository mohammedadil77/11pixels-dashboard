import '@/styles/globals.css';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import _11PixelsAppTheme from '../core/appTheme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={_11PixelsAppTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
