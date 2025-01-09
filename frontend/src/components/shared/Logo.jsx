import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <Link to="/">
        <img src="/logo.jpg" alt="openai" width="30px" />
      </Link>
      <Typography variant="h6" component="div">
        ChatGuru
      </Typography>
    </div>
  );
};

export default Logo;
