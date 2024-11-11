import { Box } from "@mui/material";

import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <Box width={"100%"} height={"100%"}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          mt: 3,
        }}
      >
        <Box sx={{ fontSize: "40px", fontWeight: "bold" }}>
          YOUR PERSONAL AI ASSISTANT
        </Box>

        <Box sx={{ display: "flex", mx: "auto" }}>
          <img
            src="airobot.jpg"
            alt="chatbot"
            style={{
              display: "flex",
              margin: "auto",
              width: "50vh",
              height: "70vh",
              borderRadius: 20,

              marginTop: 20,
              marginBottom: 20,
              padding: 10,
            }}
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
