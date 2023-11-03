import express from "express";
import { getSesamiens, getSesamienById, updateSesamien, createSesamien } from "../controllers/sesamienController";

const router = express.Router();

router.get("/", getSesamiens);

router.get("/:sesamienId", getSesamienById);

router.put("/:sesamienId", updateSesamien);

router.post("/", createSesamien);

export default router;
