const mongoose = require('mongoose')
const PhotoSchema = new mongoose.Schema({
    title: {
        type:String,
    },
    imageUrl: {
        type:String,
         required: true,
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('Photo', PhotoSchema)