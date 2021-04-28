const Product = require('../models/Product');
const asyncHandler = require('../middleware/asyncHandler');
const ErrorResponse = require('../utils/errorResponse');

exports.getAllProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    data: products,
  });
});

exports.createNewProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    data: product,
  });
});

exports.updateProductById = asyncHandler(async (req, res, next) => {
  const { id } = req.params.id;
  let product = await Product.findById(id);

  if (!product) {
    return next(new ErrorResponse(`Product with id ${id}`, 404));
  }

  product = await Product.findById(id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(201).json({
    success: true,
    data: product,
  });
});

exports.deleteProductById = asyncHandler(async (req, res, next) => {
  const { id } = req.params.id;
  const product = await Product.findById(id);

  if (!product) {
    return next(new ErrorResponse(`Product with id ${id}`, 404));
  }

  await product.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});
