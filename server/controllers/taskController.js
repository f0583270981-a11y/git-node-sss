const tasksSchema = require("../models/Task")

const getAllTasks = async (req, res) => {
    const tasks = await tasksSchema.find()
    res.json(tasks)
}

const getTaskById = async (req, res) => {
    const { id } = req.params
    const task = await tasksSchema.findById(id)
    if (!task) {
        return res.send("Not found")
    }
    res.send(task)
}

const createTask = async (req, res) => {
    const { name, complete, tags } = req.body
    if (!name) {
        return res.send("name is require")
    }
    const task = await tasksSchema.create({ name, complete, tags })
    res.json(task)
}

const updateTask = async (req, res) => {
    const { _id,name, complete, tags } = req.body
    if (!_id || !name) {
        return res.send("id and name are require")
    }
    const task = await tasksSchema.findById(_id)
    if (!task) {
        return res.send("Not found")
    }
    task.name = name
    task.complete=complete
    task.tags = tags
    const newTask = await task.save()
    res.json(newTask)
}

const deleteTask = async (req, res) => {
    const { id } = req.params
    const task = await tasksSchema.findById(id)
    if (!task) {
        return res.send("Not found")
    }
    await task.deleteOne()
    res.send("success")
}

// const updateTaskComplete = async (req, res) =>{
//     const {id} = req.params
//     const task = await tasksSchema.findById(id)
//     if (!task) {
//         return res.send("Not found")
//     }
//     task.complete = true
//     const newTask = await task.save()
//     res.json(newTask)
// }

module.exports = { getAllTasks, createTask, getTaskById, updateTask, deleteTask }