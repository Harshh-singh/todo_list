const express = require('express');
const port = 8500;
const app = express();

app.use('/' , require('./routes/index'));

app.listen(port , function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`server is running on port: ${port}`);
});