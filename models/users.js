const mongoose = require('mongoose')


const usersschema = new mongoose.Schema({

    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true

    },
    email_id: {
        type: String,
        required: true,
        unique: true

        
    },
    user_id: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true

    }



})
module.exports = mongoose.model('User', usersschema)