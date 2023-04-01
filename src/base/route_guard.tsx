import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

type ComponentWithChildProps = React.PropsWithChildren<{ example?: string }>;

const PUBLIC_ROUTES = ['/login'];

const RouteGuard = ({ children }: ComponentWithChildProps) => {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const checkUserSession = async () => {
      try {
        const isAuth = JSON.parse(
          localStorage.getItem('isAuthenticated') as any,
        );
        if (isAuth) {
          if (PUBLIC_ROUTES.includes(router.pathname))
            //   return router.push('/home');
            setAuthenticated(true);
          // authStore.setIsAuthenticated(true);
          return isAuth;
        } else if (PUBLIC_ROUTES.includes(router.pathname)) return true;
        router.replace('/login');
      } catch (e: unknown) {
        router.replace('/login');
        setAuthenticated(false);
      }
    };
    //  checkUserSession();
  }, [authenticated, router, router.pathname]);

  const renderRoutes = (path: string) => {
    if ((!authenticated && PUBLIC_ROUTES.includes(path)) || authenticated) {
      return children;
    }
    //  return <></>;
    return children;
  };

  return <Box>{renderRoutes(router.pathname)}</Box>;
};

export default RouteGuard;
