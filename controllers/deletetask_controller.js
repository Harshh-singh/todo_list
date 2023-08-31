const Task = require("../Models/Todo_Task");

module.exports.delete = async function (req, res) {
    let id = req.query.id;

    try {
        // Use async/await to await the Promise
        await Task.findByIdAndDelete(id);
        res.redirect('back');
    } catch (err) {
        console.log('Error in deleting task from db:', err);
        // Handle the error, you can also send an error response to the client if needed.
    }
}

