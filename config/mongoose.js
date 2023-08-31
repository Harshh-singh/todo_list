//require the library
const mongoose = require('mongoose');

//connect to db
mongoose.connect('mongodb://127.0.0.1/Todo_list_db');

//aquire the connection(to check if it is successful)
const db = mongoose.connection;


//error
db.on('error' , console.error.bind(console , 'error connecting to db'));


//up and running
db.once('open' , function(){
    console.log('successfully connected to db');
});