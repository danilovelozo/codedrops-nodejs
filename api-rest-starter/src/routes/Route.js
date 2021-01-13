const UserController = require('../controllers/UserController');
const AuthController = require('../controllers/AuthController');
const auth = require('../middleware/Auth');

module.exports = (app) => {
  app.post('/login', AuthController.login);
  app.post('/user', UserController.post);
  app.put('/user/:id', UserController.put);
  app.delete('/user/:id', UserController.delete);
  app.get('/users', UserController.get);
  app.get('/user/:id', UserController.getById);
}