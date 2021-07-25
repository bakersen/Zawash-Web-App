const mongoose = require('mongoose');

const washerSchema = new mongoose.Schema({

    washername: {
        type: String,
        trim: true,
        required:true
    },
    phonenumber: {
        type: Number,
    },
    nationalid: {
        type: String,
        trim: true
    },
    zawashid: {
        type: String,
        trim: true
    },
    dob: {
        type: Date,
    },
    gender: {
        type: String
    },
    nextofkin: {
        type: String,
        trim: true
    },
    nextofnumber: {
        type: Number,
    },
    residence: {
        type: String,
        trim: true
    }
})

module.exports = mongoose.model('Washer', washerSchema);