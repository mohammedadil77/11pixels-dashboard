import { Box, Grid, Stack, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { height } from '@mui/system';
import React from 'react';

let paperStyles = {
  width: '290px',
  height: '134px',
  background: '#FCFCFC',
  border: '1px solid #DFE0EB',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
};

let siteStatistics = [
  {
    title: 'Site Visits',
    value: 60,
  },
  {
    title: 'Employees',
    value: 16,
  },
  {
    title: 'Clients',
    value: 43,
  },
  {
    title: 'Site Visits',
    value: '$678',
  },
];

const Home = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight={'700'}>
        Overview
      </Typography>

      <Grid container sx={{ mt: 4 }}>
        {siteStatistics?.map((data, i) => (
          <Grid item xs={3} key={i}>
            <Paper elevation={3} sx={paperStyles}>
              <Typography> {data.title} </Typography>
              <Typography variant="h4" fontWeight={'700'}>
                {data.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper
        sx={{
          width: '100%',
          height: '400px',
          background: '#FCFCFC',
          border: '1px solid #DFE0EB',
          borderRadius: '8px',
          mt: 3,
        }}
      >
        <Typography variant="h4" fontWeight={'700'} padding={2}>
          {' '}
          Tasks{' '}
        </Typography>
      </Paper>
    </Box>
  );
};

export default Home;
