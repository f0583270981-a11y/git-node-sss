const usersSchema = require("../models/User")

const getAllUsers = async (req, res) => {
    const users = await usersSchema.find()
    res.json(users)
}

const getUserById = async (req, res) => {
    const { id } = req.params
    const user = await usersSchema.findById(id)
    if (!user) {
        return res.send("Not found")
    }
    res.send(user)
}

const createUser = async (req, res) => {
    const { name, username ,phone,email,address} = req.body
    if (!name||!username ||!phone) {
        return res.send("name userNme and phone is require")
    }
    const user = await usersSchema.create({ name, username ,phone,email,address })
    res.json(user)
}

const updateUser = async (req, res) => {
    const { id,name, username ,phone,email,address} = req.body
    if (!id||!name||!username ||!phone) {
        return res.send("id and name are require")
    }
    const user = await usersSchema.findById(id)
    if (!user) {
        return res.send("Not found")
    }
    user.name = name
    user.phone=phone
    user.username=username
    user.address=address
    user.email=email
    const newUser = await user.save()
    res.json(newUser)
}

const deleteUser = async (req, res) => {
    const { id } = req.params
    const user = await usersSchema.findById(id)
    if (!user) {
        return res.send("Not found")
    }
    await user.deleteOne()
    res.send("success")
}

// const updateUserComplete = async (req, res) => {
//     const { id } = req.params
//     const user = await usersSchema.findById(id)
//     if (!user) {
//         return res.send("Not found")
//     }
//     user.complete = true
//     const newUser = await user.save()
//     res.json(newUser)
// }

module.exports = { getAllUsers, createUser, getUserById, updateUser, deleteUser }