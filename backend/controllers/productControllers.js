const Product = require('../models/Product');
const asyncHandler = require('../middleware/asyncHandler');
const ErrorResponse = require('../utils/errorResponse');

exports.getAllProducts = asyncHandler(async (req, res, next) => {
  // Queries for filtering the data from the db
  let query;

  const reqQuery = { ...req.query };

  const removeFields = ['sort', 'page'];

  removeFields.forEach((val) => delete reqQuery[val]);

  let queryString = JSON.stringify(reqQuery);

  queryString = queryString.replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    (match) => `$${match}`,
  );

  // End of filtering queries

  // Sorting products
  query = Product.find(JSON.parse(queryString));

  if (req.query.sort) {
    const sortByArr = req.query.sort.split(
      ',',
    ); /* wen doing the sort on the request the sorting query params will be separated by ','
    like '.../products?sort=price,-rating' */

    const sortByStr = sortByArr.join(
      ' ',
    ); /* joins the previous created array values in a string that matches the mongoDB sintaxe */

    query = query.sort(sortByStr);
  } else {
    query = query.sort('-price'); /* default sorting -> by descending price */
  }
  // End of sorting products

  // const products = await Product.find();
  const products = await query; /* replaces the previous commented line to retrieve the data from mongoDB
  according to the query instead of 'Product.find()' */

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
