const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false
    },
    tags: {
        type: [String]
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('Task', taskSchema)