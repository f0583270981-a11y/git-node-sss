const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    username: {
        type: String,
       required: true,
       unique:true
    },
    email:  {
        type:String,
        lowercase: true,
        trim: true
    },
    address:{
        type:String
    //     // street:String,
    //     // building:Number,
    //     // city:String
     },
    phone:{
        type:String,
        required:true

    }
}, {
    timestamps: true
})
module.exports = mongoose.model('User', UserSchema)