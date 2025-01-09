import React from "react";
import { Box, Button, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  // Media queries for responsiveness
  const isLargeScreen = useMediaQuery("(min-width:960px)");

  return (
    <Box width={"100%"} height={"100%"}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          mt: 3,
        }}
      >
        <Box
          sx={{
            fontSize: isLargeScreen ? "40px" : "20px", // Larger text on large screen
            fontWeight: "bold",
          }}
        >
          YOUR PERSONAL AI ASSISTANT
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: isLargeScreen ? "row" : "column", // Image and text in row for large screens
            alignItems: "center",
            justifyContent: "center",
            gap: 0.5, // Reduced gap significantly (to 0.5)
            mt: isLargeScreen ? 10 : 3,
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-start",
              marginRight: 1, // Adjust this value to reduce the gap
            }}
          >
            <img
              src="airobot.jpg"
              alt="chatbot"
              style={
                {
                  // existing styles
                }
              }
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: 1, // Adjust this value to reduce the gap
            }}
          >
            <Box
              sx={{
                flex: 1,
                fontSize: isLargeScreen ? "30px" : "15px", // Larger text on large screens
                fontWeight: "bold",
                textAlign: "center",
                width: "600px",
              }}
            >
              <Box sx={{ whiteSpace: "nowrap" }}>
                Hi, I am your personal AI ChatBot.
              </Box>
              <Box
                sx={{
                  fontSize: isLargeScreen ? "20px" : "10px", // Larger text on large screens
                  whiteSpace: "nowrap",
                }}
              >
                I can help you with your daily tasks, doubts and queries.
              </Box>
              <Box
                sx={{
                  fontSize: isLargeScreen ? "20px" : "10px",
                  whiteSpace: "nowrap", // Larger text on large screens
                }}
              >
                You can ask me anything, and I will do my best to help you.
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            "&:hover": {
              backgroundColor: "black",
            },
            backgroundColor: "#129585",
          }}
          onClick={() => navigate("/signin")}
        >
          <Link to="/signin" style={{ color: "white", textDecoration: "none" }}>
            Let's get started
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
