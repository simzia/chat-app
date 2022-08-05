import { Link } from 'react-router-dom';
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
import { UserLoginDetail } from '../interface';

function Home() {
  const [name, setName] = useState<string>('');
  const [email, setemail] = useState<string>('');
  const [nameError, setNameError] = useState<boolean>();
  const [emailError, setEmailError] = useState<boolean>();
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>();
  const [userArray, setUserArray] = useState<UserLoginDetail[]>([]);
  const [status, setStatus] = useState<boolean>(false)

  const nameChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log('NAME CHANGE HANDLER', e.target.value);
    setName(e.target.value);
  };
  const emailChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log('EMAIL CHANGE HANDLER', e.target.value);
    setemail(e.target.value);
  };
  const submitHandler = () => {
    const arry: UserLoginDetail[] = [...userArray]

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
    if (password == '') {
      setPasswordError(true);
    } else {
      setPasswordError(false)
    }
    if(name !== '' && email !== '' && password !== '') {
      setStatus(true)
    }
    if(name !== '' && email !== '' && password !=='') {
      arry.push({
        name: name,
        email: email,
        password: password
      })
    }
    
    setUserArray(arry)
  };
  useEffect(() => {
    console.log('NAME ERROR', userArray);
  }, []);
  
  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log('password change handler');
    setPassword(e.target.value)
  };
  
  return (
    <Container
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
                {nameError ? (
                  <TextField
                    error
                    id="name"
                    label="Name"
                    variant="outlined"
                    style={{ marginTop: '30px' }}
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
                    helperText="Please Enter your email."
                    onChange={(e) => emailChangeHandler(e)}
                    value={email}
                  />
                ) : (
                  <TextField
                    id="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    style={{ marginTop: '30px' }}
                    onChange={(e) => emailChangeHandler(e)}
                    value={email}
                  />
                )}
                {passwordError ? (
                  <TextField
                    error
                    id="password"
                    label="Password"
                    variant="outlined"
                    style={{ marginTop: '30px' }}
                    onChange={(e) => passwordChangeHandler(e)}
                    value={password}
                    type="password"
                    helperText="Please Enter your password."
                    />

                ) : (
                  <TextField
                    id="password"
                    label="Password"
                    variant="outlined"
                    style={{ marginTop: '30px' }}
                    onChange={(e) => passwordChangeHandler(e)}
                    value={password}
                    type="password"
                  />
                )}
              </Stack>
              <Stack direction="row" justifyContent="center">
                <Link
                  to={!status ? '/' : 'logIn' }
                  style={{ textDecoration: 'none' }}
                >
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

export default Home;
