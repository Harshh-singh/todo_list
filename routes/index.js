const express = require('express');
const router = express.Router();

//importing our task
 const homepage = require('../controllers/Homepage_controller')

console.log('router loaded');

router.get('/' , homepage.home)

module.exports = router;