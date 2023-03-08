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
import Link from 'next/link';
import React from 'react';

let loginStyles = {
  width: '540px',
  height: '600px',
  background: '#FCFCFC',
  borderRadius: '10px',
};

const Login = () => {
  return (
    <Stack
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      height={'100vh'}
    >
      <Box sx={loginStyles}>
        <Box
          sx={{
            height: '150px',
            background: '#2E1F1F',
            borderRadius: '10px 10px 0px 0px',
          }}
        >
          <Box padding={2} sx={{ textAlign: 'center' }}>
            <Typography
              variant="h5"
              color="secondary"
              fontWeight={600}
              marginTop={2}
            >
              Welcome !
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '27px',
                textAlign: 'center',
                color: '#FCFCFC',
              }}
            >
              Sign in to continue to 11pixels
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            top: -45,
          }}
        >
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
              sx={{
                width: '138px',
                height: '44px',
                borderRadius: '6px',
                textTransform: 'capitalize',
              }}
            >
              Log In
            </Button>
          </Stack>

          <Link href={''}>
            <Typography sx={{ textAlign: 'left', mt: 6 }}>
              Forgot Password ?
            </Typography>
          </Link>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Login;
