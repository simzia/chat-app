import { Link, useLinkClickHandler } from 'react-router-dom';
import {
  Container,
  Typography,
  Stack,
  Box,
  TextField,
  Grid,
  Avatar,
  FormControl,
  InputAdornment,
} from '@mui/material';
import { UserList } from '../interface';
import { MessageRight } from '../Components/Message';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useState } from 'react';

// const useStyles = makeStyles(() => {
//   return createStyles({
//     search: {
//       margin: '0',
//     },
//   });
// });

function ChatList() {
  // const { search } = useStyles();
  const [showClearIcon, setShowClearIcon] = useState('none');
  const [searchName, setSearchName] = useState<string>();

  const userList: UserList[] = [
    { name: 'John', messege: 'I am John' },
    { name: 'Jack', messege: 'Hi! I am Jack' },
    { name: 'Jack', messege: 'Hi! I am Jack' },
    { name: 'Jack', messege: 'Hi! I am Jack' },
    { name: 'Jack', messege: 'Hi! I am Jack' },
    { name: 'Jack', messege: 'Hi! I am Jack' },
    { name: 'Jack', messege: 'Hi! I am Jack' },
    { name: 'Jack', messege: 'Hi! I am Jack' },
  ];

  const clickHandler = (id: number) => {
    console.log('CLICK HANDLER!', id);
  };

  const handleSearch = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearchName(e.target.value)
    setShowClearIcon(e.target.value === "" ? "none" : "flex")
    console.log('HANDLE SEARCH', e.target.value);
  };

  const handleInputClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setSearchName("")
    console.log('HANDLE INPUT CLICK');
  };
  return (
    <Container>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Box
          sx={{
            marginBottom: '20px',
            border: '5px solid #cdcdcd',
            // p: 2,
            // backgroundColor: '#232323',
            height: '800px',
            overflowY: 'auto',
            width: '500px',
            borderRadius: '7px',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
          }}
        >
          <Stack
            style={{ marginBottom: '30px', borderBottom: '2px solid #cdcdcd' }}
          >
            <Typography
              variant="h5"
              textAlign="center"
              style={{
                padding: '20px',
              }}
            >
              User List
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="center" mb={2}>
            <FormControl>
              <TextField
                size="small"
                variant="outlined"
                onChange={(e) => handleSearch(e)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      style={{ display: showClearIcon }}
                      onClick={(e) => handleInputClick(e)}
                    >
                      <ClearIcon />
                    </InputAdornment>
                  ),
                }}
                value={searchName}
              />
            </FormControl>
          </Stack>
          {userList.map((user, index) => (
            <Link
              to={`${index}`}
              style={{
                textDecoration: 'none',
                paddingRight: '10px',
                color: '#333',
              }}
            >
              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
                onClick={() => clickHandler(index)}
                p={1}
              >
                <Grid xs={2}>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Avatar
                      alt={user.name}
                      src="./static/images/user.png"
                      // style={{
                      //   backgroundColor: '#333',
                      //   color: '#fff',
                      //   border: '1px solid #fff',
                      // }}
                      sx={{ width: 45, height: 45 }}
                    ></Avatar>
                  </Stack>
                </Grid>
                <Grid xs={10}>
                  <Stack>
                    <Typography style={{ marginBottom: '5px' }}>
                      {user.name}
                    </Typography>
                    <TextField value={user.messege} />
                  </Stack>
                </Grid>
              </Grid>
            </Link>
          ))}
        </Box>
      </Stack>
    </Container>
  );
}

export default ChatList;
