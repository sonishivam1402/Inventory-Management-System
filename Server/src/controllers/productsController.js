import pool from '../db.js';

export const getAllProducts = async (req, res, next) => {
  try {
    const result = await pool.query('SELECT * FROM products ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const { name, sku, category, description, unit_price, quantity_in_stock, location } = req.body;
    const result = await pool.query(
      `INSERT INTO products (name, sku, category, description, unit_price, quantity_in_stock, location)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [name, sku, category, description, unit_price, quantity_in_stock, location]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    if (err.code === '23505') {
      // Unique violation (e.g., SKU)
      return res.status(400).json({ error: 'SKU must be unique' });
    }
    next(err);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, sku, category, description, unit_price, quantity_in_stock, location } = req.body;
    const result = await pool.query(
      `UPDATE products SET name = $1, sku = $2, category = $3, description = $4, unit_price = $5, quantity_in_stock = $6, location = $7
       WHERE id = $8 RETURNING *`,
      [name, sku, category, description, unit_price, quantity_in_stock, location, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    if (err.code === '23505') {
      return res.status(400).json({ error: 'SKU must be unique' });
    }
    next(err);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    next(err);
  }
};

export const getLowStockProducts = async (req, res, next) => {
  try {
    const threshold = parseInt(req.query.threshold, 10) || 5;
    const result = await pool.query('SELECT * FROM products WHERE quantity_in_stock <= $1 ORDER BY quantity_in_stock ASC', [threshold]);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
};

export const searchProducts = async (req, res, next) => {
  try {
    const q = req.query.q || '';
    const result = await pool.query(
      `SELECT * FROM products WHERE LOWER(name) LIKE LOWER($1) OR LOWER(sku) LIKE LOWER($1) ORDER BY id`,
      [`%${q}%`]
    );
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
}; 