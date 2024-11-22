import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Header Component


// Home Window Component
const Home = () => {
  return (
    <Container sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Web Port Scanner
      </Typography>
      <Typography variant="body1" gutterBottom>
        Use this tool to scan open ports on any host. Navigate to the "Port Scanner" tab to get started.
      </Typography>
    </Container>
  );
};



export default Home;
