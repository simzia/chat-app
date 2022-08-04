import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Typography,
  Stack,
  Box,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { UserLoginDetail } from '../interface';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import OutlinedInput from '@mui/material/OutlinedInput';

function Home() {
  const [name, setName] = useState<string>('');
  const [email, setemail] = useState<string>('');
  const [nameError, setNameError] = useState<boolean>();
  const [emailError, setEmailError] = useState<boolean>();
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>();
  const [userArray, setUserArray] = useState<UserLoginDetail[]>([]);

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
      console.log('Email error');
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (password == '') {
      setPasswordError(true);
    } else {
      setPasswordError(false)
    }
    // if (nameError && emailError) {
    //   console.log('NAME AND ERROR TRUE');
    // } else {
    //   console.log('NAME AND ERROR FALSE');
    // }
    // console.log('name && email', nameError && emailError);
    arry.push({
      name: name,
      email: email,
      password: password
    })
    console.log("ARRAY ==>", arry);
    
    setUserArray(arry)
  };
  useEffect(() => {
    console.log('NAME ERROR', nameError);
  }, [nameError]);
  // const [values, setValues] = useState({
  //   name: '',
  //   email: '',
  //   showPassword: false,
  // });
  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log('password change handler');
    setPassword(e.target.value)
  };
  // const handleClickShowPassword = () => {
  //   console.log('HANDLE CLICK PASSWORD!');
  // };
  // const handleMouseDownPassword = () => {
  //   console.log('HANDLE MOUSEDOWN PASSWORD');
  // };
  // const handleNameChange = () => {
  //   console.log('HANDLE NAME CHANGE');
  // };
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
                <TextField
                    id="password"
                    label="Password"
                    variant="outlined"
                    style={{ marginTop: '30px' }}
                    onChange={(e) => passwordChangeHandler(e)}
                    value={password}
                    type="password"
                  />
                {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">
                    Password
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type="password"
                    // value={values.password}
                    onChange={() => passwordChangeHandler()}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => handleClickShowPassword()}
                          onMouseDown={() => handleMouseDownPassword()}
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl> */}
              </Stack>
              <Stack direction="row" justifyContent="center">
                <Link
                  to={name == '' && email == '' ? '/' : 'logIn'}
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
