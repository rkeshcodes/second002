import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./dbConfig.js";
import shortUrl from "./routes/shortUrl.js"

dotenv.config();
connectDB();

const port = process.env.PORT || 5050;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/", shortUrl);

app.listen(port, () => {
  console.log(`Server Started at on port ${port}`);
});
