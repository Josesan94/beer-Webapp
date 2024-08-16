import stockPrice from '../data/stock-price.js'
import { handleError } from '../utils/errorHandler.js';

export const getStockPriceBySku = (req,res) => {
    try {
        const {sku} = req.params;

        const variant = stockPrice[sku]
    
        if(!variant) {
            return res.status(404).json({error: 'SKU not found'})
        }
    
        res.json(variant)
    } catch(error) {
        console.error(`Error retrieving stock and price for SKU ${req.params.sku}:`, error);
        handleError(res, error, `Error retrieving stock and price for SKU ${req.params.sku}`);
    }
   
};


