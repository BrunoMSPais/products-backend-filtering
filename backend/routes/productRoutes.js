const express = require('express');
const productControllers = require('../controllers/productControllers');

const router = express.Router();

// @route - /api/v1/products/
// - GET all products and ADD a product
router
  .route('/')
  .get(productControllers.getAllProducts)
  .post(productControllers.createNewProduct);

// @route - /api/v1/product/<product_id>
// - UPDATE a product and DELETE a product
router
  .route('/:id')
  .put(productControllers.updateProductById)
  .delete(productControllers.deleteProductById);

module.exports = router;
