import products from '../data/products.js'
import { handleError } from '../utils/errorHandler.js'

export const getAllProducts = (req, res) => {
    try {
        console.log("procedo a traer objetos productos")
        res.json(products)
    } catch(error) {
      handleError(res, error, "Error retrieving products");
    }
}



