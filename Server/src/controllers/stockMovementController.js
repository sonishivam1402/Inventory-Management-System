import pool from '../db.js';

export const getAllStockMovements = async (req, res, next) => {
  try {
    const result = await pool.query('SELECT * FROM stock_movement ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
};

export const getStockMovementById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM stock_movement WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Stock movement not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

export const createStockMovement = async (req, res, next) => {
  try {
    const { product_id, change_type, quantity, reason, movement_date } = req.body;
    if (!['in', 'out'].includes(change_type)) {
      return res.status(400).json({ error: "change_type must be 'in' or 'out'" });
    }
    const result = await pool.query(
      `INSERT INTO stock_movement (product_id, change_type, quantity, reason, movement_date)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [product_id, change_type, quantity, reason, movement_date]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    if (err.code === '23503') {
      // Foreign key violation
      return res.status(400).json({ error: 'Invalid product_id' });
    }
    next(err);
  }
};

export const updateStockMovement = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { product_id, change_type, quantity, reason, movement_date } = req.body;
    if (!['in', 'out'].includes(change_type)) {
      return res.status(400).json({ error: "change_type must be 'in' or 'out'" });
    }
    const result = await pool.query(
      `UPDATE stock_movement SET product_id = $1, change_type = $2, quantity = $3, reason = $4, movement_date = $5
       WHERE id = $6 RETURNING *`,
      [product_id, change_type, quantity, reason, movement_date, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Stock movement not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    if (err.code === '23503') {
      return res.status(400).json({ error: 'Invalid product_id' });
    }
    next(err);
  }
};

export const deleteStockMovement = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM stock_movement WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Stock movement not found' });
    }
    res.json({ message: 'Stock movement deleted successfully' });
  } catch (err) {
    next(err);
  }
}; 