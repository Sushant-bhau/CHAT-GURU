import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { toast } from "react-hot-toast";
import { sendChatRequest, deleteUserChats } from "../helpers/api-communicator";

const Chat = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [content, setContent] = useState("");

  const handleSendChat = async () => {
    try {
      const chatData = await sendChatRequest(content);
      setChatMessages(chatData.chats || []);
    } catch (error) {
      console.error("Error sending chat request:", error);
      toast.error("Failed to send message");
    }
  };

  const handleDeleteChats = async () => {
    try {
      toast.loading("Deleting Chats...");
      await deleteUserChats();
      setChatMessages([]);
      toast.dismiss();
      toast.success("Chats deleted successfully");
    } catch (error) {
      console.error("Error deleting chats:", error);
      toast.dismiss();
      toast.error("Failed to delete chats");
    }
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Chat
      </Typography>
      <Box component="form" onSubmit={(e) => e.preventDefault()} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="content"
          label="Type your message"
          name="content"
          autoComplete="off"
          autoFocus
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button
          type="button"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleSendChat}
        >
          Send
        </Button>
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="secondary"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleDeleteChats}
        >
          Delete Chats
        </Button>
      </Box>
      <Box>
        {chatMessages.map((message, index) => (
          <Typography key={index} variant="body1">
            {message}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Chat;
