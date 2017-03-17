module.exports = function(app, express) {
      let router = express.Router();
      let routeObj = require(APP_PATH + '/server/api/controller/AuthController.js');
      let userAuth =  require(APP_PATH + '/server/api/middlewares/user_token.js');
     router.post('/auth/register', routeObj.register);
     router.post('/auth/login',routeObj.login);
     router.get('/user/list',userAuth,routeObj.userList);
     router.get('/user/delete',routeObj.deleteUser);
     router.get('/user/profile',userAuth,routeObj.userProfile);
     router.post('/user/update',userAuth,routeObj.updateProfile);
     app.use('/api', router);
}
