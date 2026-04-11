import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// routes
import AuthRoute from './routes/AuthRoute.js'
import UserRoute from './routes/UserRoute.js'
import PostRoute from './routes/PostRoute.js'
import UploadRoute from './routes/UploadRoute.js'
import ChatRoute from './routes/ChatRoute.js'
import MessageRoute from './routes/MessageRoute.js'

// ✅ initialize app FIRST
const app = express();

// ✅ load env variables
dotenv.config();

// ✅ middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// static files
app.use(express.static('public'));
app.use('/images', express.static('images'));

// ✅ health check (for Kubernetes)
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// ✅ routes
app.use('/auth', AuthRoute);
app.use('/user', UserRoute);
app.use('/posts', PostRoute);
app.use('/upload', UploadRoute);
app.use('/chat', ChatRoute);
app.use('/message', MessageRoute);

// ✅ config
const PORT = process.env.PORT || 5000;
const CONNECTION = process.env.MONGO_URI;

// ✅ DB connection + server start
mongoose
  .connect(CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("DB connection failed:", error);
  });
