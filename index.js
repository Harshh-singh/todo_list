const express = require('express');
const path = require('path');
const port = 8500;

const Task = require('./Models/Todo_Task');

const db = require('./config/mongoose');
const app = express();

app.set('view engine' , 'ejs');
app.set('views' , './views');

var Task_List = [];

app.use(express.urlencoded());

app.use(express.static('./public'));

app.use('/' , require('./routes/index'));

app.listen(port , function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`server is running on port: ${port}`);
});