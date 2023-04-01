import LockIcon from '@mui/icons-material/Lock';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import {
  loginAvatorBoxStyle,
  loginBtnStyle,
  loginForgetPasswordStyle,
  loginStyles,
  loginSubContainerStyle,
  loginTextStyle,
} from '../styles/login.style';

const Login = () => {
  let router = useRouter();
  return (
    <Stack
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      height={'100vh'}
    >
      <Box sx={loginStyles}>
        <Box sx={loginSubContainerStyle}>
          <Box padding={2} sx={{ textAlign: 'center' }}>
            <Typography
              variant="h5"
              color="secondary"
              fontWeight={600}
              marginTop={2}
            >
              Welcome !
            </Typography>
            <Typography variant="h6" sx={loginTextStyle}>
              Sign in to continue to 11pixels
            </Typography>
          </Box>
        </Box>
        <Box sx={loginAvatorBoxStyle}>
          <Avatar
            alt="11pixels user"
            src={'/logo.png'}
            sx={{ width: 90, height: 90 }}
          />
        </Box>

        <Stack sx={{ textAlign: 'center', p: 2 }} spacing={2}>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type={'password'}
          />

          <Stack direction={'row'} justifyContent={'space-between'}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember me"
              />
            </FormGroup>

            <Button
              variant={'contained'}
              sx={loginBtnStyle}
              onClick={() => router.push('/home')}
            >
              Log In
            </Button>
          </Stack>

          <Stack
            direction={'row'}
            alignItems={'center'}
            sx={{ color: '#626ED4' }}
          >
            <LockIcon style={{ color: '#626ED4' }} />
            <Typography sx={loginForgetPasswordStyle}>
              Forgot Password ?
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Login;
