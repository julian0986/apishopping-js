const Product = require('./product.model');

const index = (req, res) => Product.find().exec()
  .then((products) => res.status(200).json(products))
  .catch((error) => res.status(500).json({ error }));

const create = (req, res) => {
  console.log(req.body);
  if (req.body) {
    return Product.create(req.body)
      .then(() => res.status(201).json({ message: 'producto creado con exito' }))
      .catch((error) => res.status(500).json({ message: 'no se pudo crear', error }));
  }
  return res.status(400).json({ message: 'missing product' });
};

const showById = (req, res) => Product.find({ _id: req.params.id }).exec()
  .then((product) => res.status(200).json(product))
  .catch((error) => res.status(500).json({ error }));

const deleteProduct = (req, res) => Product.deleteOne({ _id: req.params.id }).exec()
  .then(() => res.status(201).json({ message: 'producto borrado con exito' }))
  .catch((error) => res.status(500).json({ message: 'no se pudo borrar', error }));

const updateById = (req, res) => Product
  .updateOne(
    { _id: req.params.id },
    { [req.body.field]: req.body.value },
  )
  .exec()
  .then((product) => res.status(200).json({ message: 'producto actualizado con exito', product }))
  .catch((error) => res.status(500).json({ message: 'no se pudo borrar', error }));

// export default index;

module.exports = {
  index,
  create,
  showById,
  deleteProduct,
  updateById,
};
