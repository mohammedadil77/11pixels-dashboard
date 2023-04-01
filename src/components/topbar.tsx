import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import {
  AppBar,
  Box,
  Divider,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';

interface ITopBarProps {}
const Topbar = ({}: any): JSX.Element => {
  const router = useRouter();
  if (router.pathname.includes('/login')) return <></>;

  return (
    <AppBar position="fixed" color="transparent" sx={{ boxShadow: 'none' }}>
      <Toolbar variant="dense" sx={{ ml: 34, mt: 2 }}>
        <Typography
          color={'primary'}
          sx={{
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '36px',
            letterSpacing: '0.3px',
          }}
        >
          {' '}
          Good Morning, Team 11pixels
        </Typography>
        <Box sx={{ flexGrow: 1 }}></Box>

        <Stack direction="row" alignItems={'center'} spacing={3}>
          <Divider sx={{ height: '2rem' }} orientation="vertical" />

          <Stack spacing={1} alignItems={'center'} direction="row">
            <Typography variant="subtitle2">11pixels</Typography>
            <Tooltip title="Logout">
              <IconButton onClick={() => router?.push('/login')}>
                <PowerSettingsNewIcon color="primary" />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
