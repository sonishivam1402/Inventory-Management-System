import pool from '../db.js';

export const getAllPurchases = async (req, res, next) => {
  try {
    const result = await pool.query('SELECT * FROM purchases ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
};

export const getPurchaseById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM purchases WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Purchase not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

export const createPurchase = async (req, res, next) => {
  try {
    const { product_id, supplier_id, quantity, purchase_date, total_cost } = req.body;
    const result = await pool.query(
      `INSERT INTO purchases (product_id, supplier_id, quantity, purchase_date, total_cost)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [product_id, supplier_id, quantity, purchase_date, total_cost]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    if (err.code === '23503') {
      // Foreign key violation
      return res.status(400).json({ error: 'Invalid product_id or supplier_id' });
    }
    next(err);
  }
};

export const updatePurchase = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { product_id, supplier_id, quantity, purchase_date, total_cost } = req.body;
    const result = await pool.query(
      `UPDATE purchases SET product_id = $1, supplier_id = $2, quantity = $3, purchase_date = $4, total_cost = $5
       WHERE id = $6 RETURNING *`,
      [product_id, supplier_id, quantity, purchase_date, total_cost, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Purchase not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    if (err.code === '23503') {
      return res.status(400).json({ error: 'Invalid product_id or supplier_id' });
    }
    next(err);
  }
};

export const deletePurchase = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM purchases WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Purchase not found' });
    }
    res.json({ message: 'Purchase deleted successfully' });
  } catch (err) {
    next(err);
  }
}; 