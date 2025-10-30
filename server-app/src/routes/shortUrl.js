import express from "express";


const router = express.Router();

router.post("/shortUrl", createUrl)
router.get("/shortUrl", getAll)
router.get("/shortUrl/:id", getUrl)
router.post("/shortUrl/:id", deleteUrl)

export default router