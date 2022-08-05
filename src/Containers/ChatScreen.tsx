import {
  Button,
  Container,
  Typography,
  Stack,
  Box,
  TextField,
  Grid,
  Avatar,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserList } from '../interface';

function ChatScreen() {
 const {id} = useParams();
  useEffect(() => {
    console.log("ID", id);
    
  }, [])
  return (  
    <Container>
      <Typography>ID: {id}</Typography>
      
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

export default ChatScreen;
