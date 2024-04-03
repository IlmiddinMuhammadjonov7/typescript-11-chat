import ChatItem from "../components/ChatItem";
import {
  Grid,
  List,
  Paper,
  Box,
  IconButton,
  Typography,
  Stack,
  TextField,
} from "@mui/material";
import { ArrowBackSharp, Send } from "@mui/icons-material";
import Message from "../components/Message";

const Chats = () => {
  const test = () => {
    
  }
  return (
    <div>
      <Grid container>
        <Grid sm={4}>
          <List sx={{}}>
            <ChatItem onClick={test}/>
            <ChatItem />
            <ChatItem />
          </List>
        </Grid>
        <Grid sm={8} >
          <Paper sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
            <Paper sx={{ p: 2 }}>
              <Box display="flex" alignItems={"center"} gap={2}>
                <IconButton color="primary" sx={{ display: { sm: "none" } }}>
                  <ArrowBackSharp />
                </IconButton>
                <Typography>Alex</Typography>
              </Box>
            </Paper>
            <Stack justifyContent={"flex-end"} spacing={2} sx={{ p: 2, flex: 1 }}>
              <Message sender={"me"}/>
              <Message />
              <Message sender={"me"}/>
              <Message />
            </Stack>
            <Box display={"flex"} m={2}>
              <TextField
                fullWidth
                label="Outlined"
                variant="outlined"
                size="small" 
                placeholder="Messages..."
              />
              <IconButton>
                <Send/>
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Chats;
