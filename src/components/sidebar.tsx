import {
  Box,
  Drawer,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';
import { WithAnimation } from '../core/hoc/with_animation';
import AppsIcon from '@mui/icons-material/Apps';
import AppLogo from '../static/logo';
interface ISidebarProps {}

const Sidebar = (props: ISidebarProps) => {
  const router = useRouter();
  let theme = useTheme();

  const handleRouting = (route: string | null = null) => {
    if (route) {
      router.push(route);
    }
  };

  const getActiveColor = (active: boolean | undefined) =>
    active ? theme?.palette?.primary?.main : theme?.typography?.caption?.color;

  const getIcon = (name: string, isActive?: boolean) => {
    switch (name) {
      case 'Overview':
        return (
          <Stack direction={'row'} alignItems={'center'}>
            <AppsIcon htmlColor="#fff" />
            <Typography
              variant="caption"
              sx={{ color: '#fff', ml: 2 }}
              //sx={{ color: getActiveColor(isActive) }}
            >
              Overview
            </Typography>
          </Stack>
        );

      case 'Mailers':
        return (
          <Stack direction={'row'} alignItems={'center'}>
            <AppsIcon htmlColor="#fff" />
            <Typography
              variant="caption"
              sx={{ color: '#fff', ml: 2 }}
              //sx={{ color: getActiveColor(isActive) }}
            >
              Mailers
            </Typography>
          </Stack>
        );

      case 'Tasks':
        return (
          <Stack direction={'row'} alignItems={'center'}>
            <AppsIcon htmlColor="#fff" />
            <Typography
              variant="caption"
              sx={{ color: '#fff', ml: 2 }}
              //sx={{ color: getActiveColor(isActive) }}
            >
              Tasks
            </Typography>
          </Stack>
        );

      case 'Customer Support':
        return (
          <Stack direction={'row'} alignItems={'center'}>
            <AppsIcon htmlColor="#fff" />
            <Typography
              variant="caption"
              sx={{ color: '#fff', ml: 2 }}
              //sx={{ color: getActiveColor(isActive) }}
            >
              Customer Support
            </Typography>
          </Stack>
        );
    }
  };

  const sideMenuItems = [
    { name: 'Overview', link: '/home' },
    { name: 'Tasks', link: '/tasks' },
    {
      name: 'Mailers',
      link: `/mailers`,
    },

    { name: 'Customer Support', link: '/support' },
  ];

  if (router.pathname.includes('/login')) return <></>;

  return (
    <Drawer
      sx={{ mt: '3rem' }}
      variant="permanent"
      PaperProps={{
        sx: {
          backgroundColor: (theme) => theme.palette.primary.main,
          width: '255px',
          color: '#fff',
        },
      }}
    >
      <Stack spacing={2} direction="column">
        <Box
          sx={{
            border: '1px solid red',
            height: '8rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            color: '#fff',
          }}
        >
          <Typography variant="h4"> 11pixels </Typography>
        </Box>
        {sideMenuItems.map(
          (text: { name: string; link: string }, key: number) => {
            const active =
              text?.link?.split('?')?.[0] === router?.pathname?.split('?')?.[0];
            return (
              <>
                <Box key={key} sx={{ color: '#fff' }}>
                  <IconButton onClick={() => handleRouting(text?.link)}>
                    <Stack alignItems={'center'} direction="column">
                      {getIcon(text.name, active)}
                    </Stack>
                  </IconButton>
                </Box>
              </>
            );
          },
        )}
      </Stack>
    </Drawer>
  );
};

export default Sidebar;
