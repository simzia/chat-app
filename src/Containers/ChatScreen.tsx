import {
  Button,
  Container,
  Typography,
  Stack,
  Box,
  TextField,
  Grid,
  Avatar,
  Paper,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MessageLeft, MessageRight } from '../Components/Message';
import SendIcon from '@material-ui/icons/Send';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapForm: {
      display: 'flex',
      justifyContent: 'center',
      width: '95%',
      margin: `${theme.spacing(0)} auto`,
    },
    wrapText: {
      width: '100%',
    },
    button: {
      //margin: theme.spacing(1),
    },
  })
);

function ChatScreen() {
  const classes = useStyles();
  const { id } = useParams();
  const [message, setMessage] = useState<string>("");
  const [messageArry, setMessageArry] = useState<string[]>(["Hey, hii I have received your message", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan gravida orci vitae sagittis. Integer."]);

  const onMessageChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // console.log('MESSAGE', e.target.value);
    setMessage(e.target.value);
  };

  const onSendHandler = () => {
    const arry: string[] = [...messageArry]
    arry.push(message)
    setMessage("")
    setMessageArry(arry)
  };

  useEffect(() => {
    console.log('ID', id);
  }, []);

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ height: '100vh' }}
    >
      <Paper
        style={{
          width: '80vw',
          height: '80vh',
          maxWidth: '500px',
          maxHeight: '700px',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        <Paper
          style={{
            width: 'calc( 100% - 20px )',
            margin: 10,
            overflowY: 'scroll',
            height: 'calc( 100% - 80px )',
          }}
        >
          <MessageLeft
            message="Hi, Jack! Here I am sending you a message."
            timestamp="MM/DD 10:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="Jack"
            avatarDisp={true}
          />
          <MessageLeft
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan gravida orci vitae sagittis."
            timestamp="MM/DD 12:01"
            photoURL=""
            displayName="Jack"
            avatarDisp={false}
          />
          {messageArry?.map((message) => (
            <MessageRight
            message={message}
            timestamp="MM/DD 11:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="John"
            avatarDisp={true}
          />
          ))}
          
        </Paper>
        <Container
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '0px',
            paddingRight: '7px',
            paddingLeft: '7px',
          }}
        >
          <TextField
            id="standard-text"
            label="Type here ..."
            className={classes.wrapText}
            style={{ flex: 'flex1', marginRight: '7px' }}
            value={message}
            onChange={(e) => onMessageChangeHandler(e)}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => onSendHandler()}
          >
            <SendIcon />
          </Button>
        </Container>
      </Paper>
    </Stack>
  );
}

export default ChatScreen;
