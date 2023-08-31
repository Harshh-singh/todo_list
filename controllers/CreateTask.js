const Task = require("../Models/Todo_Task")

module.exports.create = async function(req, res) {
    try {
        //use await to wait for the promise to resolve
        let newtask = await Task.create({
            description: req.body.description,
            taskcategory: req.body.taskcategory,
            dateoftask: req.body.dateoftask
        });
        //if there is no error, log the new task and redirect back
        console.log('*****', newtask);
        return res.redirect('back');
    } catch (err) {
        //if there is an error, log it and return
        console.log('error in creating new task!');
        return;
    }
}


