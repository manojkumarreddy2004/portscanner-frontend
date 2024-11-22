import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';

import {Link} from 'react-router-dom'

const Header = () => {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Cyber Tools AU
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/scan">
            Port Scanner
          </Button>
        </Toolbar>
      </AppBar>
    );
  };

  export default Header