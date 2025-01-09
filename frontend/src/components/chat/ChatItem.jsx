import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";

function extractCodeFromString(message) {
  if (message.includes("```")) {
    const blocks = message.split("```");
    return blocks;
  }
}

// function isCodeBlock(str) {
//   if (str.includes("```")) {
//     return true;
//   }
//   return false;
// }

const ChatItem = ({ message }) => {
  const auth = useAuth();
  const blocks = extractCodeFromString(message);

  return (
    <Box>
      <Avatar />
      <Typography>{message}</Typography>
    </Box>
  );
};

export default ChatItem;
