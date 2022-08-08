import { Link, useLinkClickHandler } from 'react-router-dom';
import {
  Container,
  Typography,
  Stack,
  Box,
  TextField,
  Grid,
  Avatar,
} from '@mui/material';
import { UserList } from '../interface';

function ChatList() {
  const userList: UserList[] = [
    { name: 'John', messege: 'I am John' },
    { name: 'Jack', messege: 'Hi! I am Jack' },
    { name: 'Jack', messege: 'Hi! I am Jack' },
    { name: 'Jack', messege: 'Hi! I am Jack' },
    { name: 'Jack', messege: 'Hi! I am Jack' },
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

          {userList.map((user, index) => (
            <Link
              to={`${index}`}
              style={{ textDecoration: 'none', paddingRight: '10px' }}
            >
              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
                mb={3}
                onClick={() => clickHandler(index)}
              >
                <Grid item xs={2}>
                  <Stack direction="row" justifyContent="center">
                    <Avatar
                      alt={user.name}
                      src="./static/images/user.png"
                      // style={{
                      //   backgroundColor: '#333',
                      //   color: '#fff',
                      //   border: '1px solid #fff',
                      // }}
                      sx={{ width: 56, height: 56 }}
                    ></Avatar>
                  </Stack>
                </Grid>
                <Grid item xs={10}>
                  <Stack>
                    <Typography style={{ marginBottom: '5px' }}>
                      {user.name}
                    </Typography>
                    <TextField
                      // inputProps={{ color: "#fff"}}
                      // style={{
                      //   backgroundColor: '#333',
                      //   color: '#fff',
                      //   border: '1px solid #fff',
                      //   borderRadius: "7px"
                      // }}
                      value={user.messege}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Link>
          ))}
        </Box>
      </Stack>
      {/* <Stack direction="row">
        <Avatar alt="Remy Sharp" src="/static/images/user.png" />
        <Stack>
            <Typography>Name</Typography>
            <TextField />
          </Stack>
      </Stack> */}
    </Container>
  );
}

export default ChatList;
