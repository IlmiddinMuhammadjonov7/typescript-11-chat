import { ListItem, ListItemAvatar, Avatar, ListItemText, Divider } from "@mui/material";
import { Person } from "@mui/icons-material";

const ChatItem = ({onClick}:any) => {
  return (
    <>
      <ListItem onClick={onClick} sx={{ cursor: "pointer" }}>
        <ListItemAvatar>
          <Avatar src="https://randomuser.me/api/portraits/men/33.jpg">
            <Person />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <Divider></Divider>
    </>
  );
};

export default ChatItem;
