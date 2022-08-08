import { BrowserRouter, Routes, Route, Router, Link } from 'react-router-dom';
import {
  Button,
  Container,
  Typography,
  Stack,
  Box,
  TextField,
  Grid,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { User, UserDetails } from '../interface';
import { TurnLeft } from '@mui/icons-material';

function LoginPage() {
  const [name, setName] = useState<string>('');
  const [nameError, setNameError] = useState<boolean>();
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>();
  const [userDetail, setUserDetail] = useState<UserDetails[]>([]);
  const [status, setStatus] = useState<boolean>(false)

  const nameChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log('NAME ===>', e.target.value);
    setName(e.target.value);
    if(name !== '') {
      setNameError(false)
    }
    if(email !== '') {
      setStatus(true)
    }
  };

  const emailChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(e.target.value);
    if(email !== '') {
      setEmailError(false)
    }
    if(name !== '') {
      setStatus(true)
    }
  };

  const submitHandler = () => {
    const arry: UserDetails[] = [...userDetail]
    console.log('SUBMIT ===>');
    if (name == '') {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (email == '') {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (name !== '' && email !== '') {
      setStatus(true)
    } else {
      setStatus(false)
    }
    if(name !== '' && email !== '' ) {
      arry.push({
        name: name,
        email: email,
      })
    }
    console.log("STATUS", status);
    setUserDetail(arry)
  };

  useEffect(() => {
    console.log('NAME ERROR', userDetail);
  }, [userDetail]);

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
              border: '1px solid rgb(14,23,171)',
              p: 8,
              borderRadius: '18px',
              boxShadow: "-8px -38px 242px -48px rgba(77,74,204,0.32)"
              // boxShadow: "-8px -38px 242px -48px rgba(204,139,229,0.32)"
            }}
          >
            <Stack>
              <Typography variant="h5" textAlign="center">
                LogIn into account
              </Typography>
              <Stack direction="column">
                {nameError ? (
                  <TextField
                    error
                    id="name"
                    label="Name"
                    variant="outlined"
                    style={{ marginTop: '30px' }}
                    type="text"
                    onChange={(e) => nameChangeHandler(e)}
                    value={name}
                    helperText="Please Enter your name."
                  />
                ) : (
                  <TextField
                    id="name"
                    label="Name"
                    variant="outlined"
                    style={{ marginTop: '30px' }}
                    type="text"
                    onChange={(e) => nameChangeHandler(e)}
                    value={name}
                  />
                )}
                {emailError ? (
                  <TextField
                    error
                    id="email"
                    label="Email"
                    variant="outlined"
                    style={{ marginTop: '30px' }}
                    type="email"
                    value={email}
                    onChange={(e) => emailChangeHandler(e)}
                    helperText="Please Enter your email."
                  />
                ) : (
                  <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    style={{ marginTop: '30px' }}
                    type="email"
                    value={email}
                    onChange={(e) => emailChangeHandler(e)}
                  />
                )}
              </Stack>
              <Stack direction="row" justifyContent="center">
                <Link to={!status ? "/logIn" : "/chatList"} style={{ textDecoration: 'none' }}>
                  <Button
                    variant="outlined"
                    style={{ marginTop: '30px' }}
                    onClick={() => submitHandler()}
                  >
                    Submit
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LoginPage;
