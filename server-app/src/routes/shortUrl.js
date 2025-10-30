import express from "express";
import { createUrl, deleteUrl, getAll, getUrl } from "../controllers/shortUrl.js";


const router = express.Router();

router.post("/shortUrl", createUrl)
router.get("/shortUrl", getAll)
router.get("/shortUrl/:id", getUrl)
router.post("/shortUrl/:id", deleteUrl)

export default router