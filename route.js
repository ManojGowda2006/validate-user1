const express = require('express')
const register = require('./usercontrol.js')
const route = express.Router();

route.post("/auth/signup",register);

module.exports = route;