import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import FancyDataGrid from '../components/table';
import AddIcon from '@mui/icons-material/Add';

const Tasks = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" fontWeight={'700'}>
          Tasks
        </Typography>

        <Button variant="contained" startIcon={<AddIcon />}>
          {' '}
          Add Task{' '}
        </Button>
      </Box>

      <Box sx={{ mt: 5 }}>
        <FancyDataGrid />
      </Box>
    </Box>
  );
};

export default Tasks;
