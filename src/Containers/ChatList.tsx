import { Link, useLinkClickHandler } from 'react-router-dom';
import {
  Button,
  Container,
  Typography,
  Stack,
  Box,
  TextField,
  Grid,
  Avatar,
  styled,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { UserList } from '../interface';

function ChatList() {
  const userList: UserList[] = [
    { name: 'John', messege: 'I am John' },
    { name: 'Jack', messege: 'Hi! I am Jack' },
    { name: 'Jack', messege: 'Hi! I am Jack' },
    { name: 'Jack', messege: 'Hi! I am Jack' },
  ];
  const clickHandler = (id: number) => {
    console.log('CLICK HANDLER!', id);
  };
  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
  return (
    <Container>
      <Stack direction="column">
        <Box
          sx={{
            marginBottom: '20px',
            border: '2px solid #e5e5e5',
            p: 2,
            backgroundColor: '#f5f5f5',
            width: '100%',
          }}
        >
          <Stack direction="row" justifyContent="center" alignItems="center">
            <Typography variant="h5" textAlign="center">
              Chat List
            </Typography>
          </Stack>
        </Box>
        {userList.map((user, index) => (
          <Link to={`${index}`} style={{textDecoration: "none"}}>
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
                    src="/static/images/user.png"
                    // sx={{ width: 56, height: 56 }}
                  />
                </Stack>
              </Grid>
              <Grid item xs={10}>
                <Stack>
                  <Typography>{user.name}</Typography>
                  <TextField value={user.messege} />
                </Stack>
              </Grid>
            </Grid>
          </Link>
        ))}
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
