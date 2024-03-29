'use client';
import { Box } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { WithAnimation } from '../core/hoc/with_animation';
import Sidebar from './sidebar';
import Topbar from './topbar';
interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = (props): JSX.Element => {
  const { children } = props;

  const router = useRouter();
  let routeName = router?.pathname?.split?.('/')[1] || 'Home';

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/assets/favicon/favicon.svg" />
        <title>{`${routeName?.[0]?.toUpperCase?.()}${routeName?.slice?.(
          1,
        )}`}</title>
      </Head>
      <Topbar />
      <Sidebar />

      {router?.asPath === '/login' ? (
        children
      ) : (
        <WithAnimation type={'fade'}>
          <Box sx={{ ml: 32, p: 5 }}>{children}</Box>
        </WithAnimation>
      )}
    </>
  );
};

export default Layout;
