import React from 'react';
import logo from './logo.svg';
// import { Stack } from '@mui/material';
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Typography,
  Stack,
  Box,
  TextField,
  Grid,
} from '@mui/material';

function Home() {
  return (
    <Container
      maxWidth="sm"
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid grey',
              p: 2,
            }}
          >
            <Stack>
              <Typography variant="h5" textAlign="center">
                Register your account
              </Typography>
              <Stack direction="column">
                <TextField
                  id="name"
                  label="Name"
                  variant="outlined"
                  style={{ marginTop: '30px' }}
                />
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  style={{ marginTop: '30px' }}
                />
              </Stack>
              <Link to="logIn">
                <Button variant="outlined" style={{ marginTop: '30px' }}>
                  Submit
                </Button>
              </Link>
              
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
