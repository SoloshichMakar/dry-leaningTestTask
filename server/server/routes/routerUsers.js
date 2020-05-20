const express = require('express');
const { userController } = require('../controllers');
const { userMiddleware } = require('../middleware');


const routerUsers = express.Router();


routerUsers.post('/login', userController.userAuthorization);

routerUsers.post('/signup', userMiddleware.userCreateValidation, userController.createUser);

routerUsers.post('/forgotPassword', userController.sendEmailPasswordRestore);

routerUsers.post('/resetPassword', userController.passwordRestore);

module.exports = routerUsers;
