import express from 'express';
import * as purchasesController from '../controllers/purchasesController.js';

const router = express.Router();

router.get('/', purchasesController.getAllPurchases);
router.get('/:id', purchasesController.getPurchaseById);
router.post('/', purchasesController.createPurchase);
router.put('/:id', purchasesController.updatePurchase);
router.delete('/:id', purchasesController.deletePurchase);

export default router; 