import express from 'express';
import * as suppliersController from '../controllers/suppliersController.js';

const router = express.Router();

router.get('/', suppliersController.getAllSuppliers);
router.get('/:id', suppliersController.getSupplierById);
router.post('/', suppliersController.createSupplier);
router.put('/:id', suppliersController.updateSupplier);
router.delete('/:id', suppliersController.deleteSupplier);

export default router; 