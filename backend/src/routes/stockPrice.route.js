import express from 'express';
import { getStockPriceBySku } from '../controllers/stockPrice.controller.js';

const router = express.Router();

router.get('/:sku', getStockPriceBySku);

export default router;

