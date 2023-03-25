const User = require('./user.model');

const respondWithResultUser = (res, code) => (thenResponse) => {
  if (thenResponse) {
    res.status(code).json(thenResponse);
  }
};

const handleErrorUser = (res, code) => (error) => {
  if (error) {
    res.status(code).json(error);
  }
};

const index = (req, res) => User.find()
  .exec()
  .then(respondWithResultUser(res, 200))
  .catch(handleErrorUser(res, 500));

const createUser = (req, res) => {
  if (req.body) {
    return User.create(req.body)
      .then(respondWithResultUser(res, 200))
      .catch(handleErrorUser(res, 500));
  }
  return res.status(400).json({ message: 'missing user' });
};

const showById = (req, res) => User.find({ _id: req.params.id }).exec()
  .then(respondWithResultUser(res, 200))
  .catch(handleErrorUser(res, 500));

const deleteUser = (req, res) => User.deleteOne({ _id: req.params.id }).exec()
  .then(respondWithResultUser(res, 200))
  .catch(handleErrorUser(res, 500));

const updateById = (req, res) => User
  .updateOne(
    { _id: req.params.id },
    { [req.body.field]: req.body.value },
  )
  .exec()
  .then(respondWithResultUser(res, 200))
  .catch(handleErrorUser(res, 500));

module.exports = {
  index,
  createUser,
  showById,
  deleteUser,
  updateById,
};
