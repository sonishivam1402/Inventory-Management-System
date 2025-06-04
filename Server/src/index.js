import express from 'express';
import dotenv from 'dotenv';
import productsRouter from './routes/products.js';
import errorHandler from './middleware/errorHandler.js';
import suppliersRouter from './routes/suppliers.js';
import purchasesRouter from './routes/purchases.js';
import stockMovementRouter from './routes/stock_movement.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Routes
app.use('/products', productsRouter);
app.use('/suppliers', suppliersRouter);
app.use('/purchases', purchasesRouter);
app.use('/stock-movement', stockMovementRouter);

app.get('/', (req, res) => {
  res.send('IMS Backend API');
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 