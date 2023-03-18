const Product = require('./product.model');

const index = (req, res) => {
  /* implemets show by id in mongo or ahother db */
  console.log('ss');
  return res.status(200).json({ message: 'hello from products' });
};

const create = (req, res) => {
  console.log(req.body);
  if (req.body) {
    return Product.create(req.body)
      .then(() => res.status(201).json({ message: 'producto creado con exito' }))
      .catch((error) => res.status(500).json({ message: 'no se pudo crear', error }));
  }
  return res.status(400).json({ message: 'missing product' });
};

const showById = (req, res) => {
  /* implemets find by id in mongo or ahother db */
  console.log('ss');
  return res.status(201).json({ id: req.params.id, name: 'laptop' });
};

// export default index;
module.exports = {
  index,
  create,
  showById,
};
