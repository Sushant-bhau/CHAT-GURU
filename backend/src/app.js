const express = require("express");
const { config } = require("dotenv");
const morgan = require("morgan");
const appRouter = require("./routes/index.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");

config();
const app = express();

// Middlewares
app.use(cors({ origin: "http://localhost:5174", credentials: true }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

// Remove it in production
app.use(morgan("dev"));

app.use("/api/v1", appRouter);

module.exports = app;
