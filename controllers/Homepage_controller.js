const Task = require("../Models/Todo_Task")

module.exports.home = async function(req, res) {
    try {
        //use await to wait for the promise to resolve
        let tasks = await Task.find({});
        //if there is no error, render the homepage with the tasks array
        return res.render('Homepage', {
            title: "Todo_List",
            Task_List: tasks
        });
    } catch (err) {
        //if there is an error, log it and return
        console.log('Error in finding task in from db');
        return;
    }
}

