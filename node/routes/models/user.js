const mongoose = require('mongoose');



const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String
    },
});

const User = module.exports = mongoose.model('User',UserSchema);