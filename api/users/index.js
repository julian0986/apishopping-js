const { Router } = require('express');
const controller = require('./users.controller');

const router = new Router();

router.get('/', controller.index);
router.get('/:id', controller.showById);
router.post('/', controller.create);
router.delete('/:id', controller.deleteProduct);
router.put('/:id', controller.updateById);
// router.get('/', (req, res) => res.status(200).json({ message: 'hello from products' });

module.exports = router;
// export default router;
