import pool from '../db.js';

export const getAllSuppliers = async (req, res, next) => {
  try {
    const result = await pool.query('SELECT * FROM suppliers ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
};

export const getSupplierById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM suppliers WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Supplier not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

export const createSupplier = async (req, res, next) => {
  try {
    const { name, contact_email, phone } = req.body;
    const result = await pool.query(
      `INSERT INTO suppliers (name, contact_email, phone)
       VALUES ($1, $2, $3) RETURNING *`,
      [name, contact_email, phone]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

export const updateSupplier = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, contact_email, phone } = req.body;
    const result = await pool.query(
      `UPDATE suppliers SET name = $1, contact_email = $2, phone = $3
       WHERE id = $4 RETURNING *`,
      [name, contact_email, phone, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Supplier not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

export const deleteSupplier = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM suppliers WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Supplier not found' });
    }
    res.json({ message: 'Supplier deleted successfully' });
  } catch (err) {
    next(err);
  }
}; 