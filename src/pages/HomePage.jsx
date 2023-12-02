import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/login');
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography
            sx={{ fontSize: 48, textAlign: 'center' }}
            color="text.secondary"
            gutterBottom
          >
            Welcome, to your personal PhoneBook.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            sx={{ marginRight: 'auto', marginLeft: 'auto' }}
            size="medium"
            onClick={onLogin}
          >
            Get Started
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
export default HomePage;
