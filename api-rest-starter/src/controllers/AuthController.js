const UserModel = require('../models/User');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const secret = 'minhastringdeseguranca101010';

exports.login = async (req, res, next) => {
  const { password, name } = req.body;
  const hash = crypto.createHmac('sha256', secret)
    .update(password)
    .digest('hex');

  const user = await UserModel.findOne({ name, password: hash});
  if (user) {
    const token = jwt.sign({ userId: user._id}, secret);
    res.send({ auth: true, token})
  } else {
    res.status(401).send({ auth: false, error: 'Nome ou senha inválidos'})
  }
};