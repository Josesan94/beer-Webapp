import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import productRoutes from'./routes/product.route.js';
import stockPriceRoutes from'./routes/stockPrice.route.js';

dotenv.config();
const app = express()

app.use(cors());
app.use(express.json());


//Routing
app.use('/api/products', productRoutes);
app.use('/api/stock-price', stockPriceRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;