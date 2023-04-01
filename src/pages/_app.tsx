import '@/styles/globals.css';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import RouteGuard from '../base/route_guard';
import Layout from '../components/layout';
import _11PixelsAppTheme from '../core/appTheme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={_11PixelsAppTheme}>
      <RouteGuard>
        <Layout>
          {/* <CssBaseline /> */}
          <Component {...pageProps} />
        </Layout>
      </RouteGuard>
    </ThemeProvider>
  );
}
