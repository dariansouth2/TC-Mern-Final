const TodoModel = require('../models/TodoModel');


module.exports = async (req,res) =>{
    const todo = await TodoModel.find();
    res.json(todo);
}