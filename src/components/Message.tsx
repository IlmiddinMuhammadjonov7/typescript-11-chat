import { Paper, Stack } from "@mui/material";

const Message = ({ sender }: { sender?: string }) => {
  return (
    <Stack direction={sender === "me" ? "row-reverse" : "row"}>
      <Paper sx={{ py: 1, px: 2, bgcolor: sender ? "primary.main" : "",color:sender?"#fff":"" }}>
        Hello Alex
      </Paper>
    </Stack>
  );
};

export default Message;
