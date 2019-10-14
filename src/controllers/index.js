const router = require('express').Router;
const userController = require('./user');

const allRoutes = router();
allRoutes.use('/user', userController);

module.exports = allRoutes;