import express from "express";
import { getSesamiens, getSesamienById, updateSesamien, createSesamien , searchSesamiens} from "../controllers/sesamien/sesamienController";

const router = express.Router();

router.get("/", getSesamiens);

router.get("/:sesamienId", getSesamienById);

router.get('/search', searchSesamiens);

router.put("/:sesamienId", updateSesamien);

router.post("/", createSesamien);

export default router;
