const mongoose = require('mongoose')
const articleSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true,
    },
    body: {
        type:String,
        required:true,
    },
    aouthor:{
        type:String,
        default:"anonimi"
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('Article', articleSchema)