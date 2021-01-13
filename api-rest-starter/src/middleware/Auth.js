const jwt = require('jsonwebtoken');
const secret = 'minhastringdeseguranca101010';

exports.auth = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'Essa rota requer autenticação.'});
  jwt.verify(token, secret, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Token não autorizado'});

    req.currentUser = decoded.userId;
    next();
  });
}