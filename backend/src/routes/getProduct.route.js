import express from "express";
import { getProductById } from "../controllers/product.controller.js";

const router = express.Router()

router.get('/:productId', getProductById)

export default router;

