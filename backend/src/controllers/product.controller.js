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

export const getProductById = (req, res) => {
  try {
    const productId = parseInt(req.params.productId, 10)
    const product = products.find(p => p.id === productId)

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch(error) {
    handleError(res, error, "Error retrieving product");
  }
}



