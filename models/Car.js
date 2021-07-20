const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    numberplate: {
    type: String,
    trim: true,
    },
    cartype: {
    type: String,
    trim: true,
    },
    doa: {
        type: Date,
    },
    datetimeArrival: {
        type: Date,
    },
    washer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Washer',
    },
    gender: {
        type: String,
        trim: true,
    },
    package: {
        type: String,
        trim: true,
    },
    packagePrice: {
        type: Number,
    },
    washerFee: {
        type: Number,
    },
})

module.exports = mongoose.model('Car', carSchema);