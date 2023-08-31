const express = require('express');
const router = express.Router();

//importing our task
 const homepage = require('../controllers/Homepage_controller');

 const newtask = require('../controllers/CreateTask');

 const deletetask = require('../controllers/deletetask_controller');

 //to check file is running correctly
console.log('router loaded');

//route for homepage controller
router.get('/' , homepage.home);

//route for createtask
router.post('/createtask' , newtask.create);

//route for deletetask
router.get('/delete' , deletetask.delete);

//export the file to use outside
module.exports = router;