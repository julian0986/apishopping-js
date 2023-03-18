const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, uppercase: true, require: true },
  price: { type: Number, require: true },
  description: { type: String, required: true },
  stock: { type: Number, require: true },
  image: String,
});

ProductSchema
  .path('stock')
  .validate((stockValue) => stockValue > 0, 'El Stock debe ser mayor que 0');

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
