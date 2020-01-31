const express = require('express');
const app = express();

const userRoutes = require('./api/routes/routes');

/**
 * @swagger
 * /user/all:
 *  get:
 *    description: Use to request all users
 *    responses:
 *      '200':
 *        description: A successful response
 *
 * /user/roles:
 *  get:
 *    description: Use to request all user roles
 *    responses:
 *      '200':
 *        description: A successful response
 * /user:
 *  post:
 *    description: Use to register user
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.use('/user', userRoutes);

module.exports = app;

