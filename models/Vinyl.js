const mongoose = require('mongoose');

const vinylSchema = new mongoose.Schema({
    title: { type: String, required: true },
    group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group', required: true },
    releaseDate: { type: Number, min: 0, required: true },
    condition: { 
        type: String, 
        enum: ['neuf', 'bon', 'usé'],
        required: true 
    },
    price: { type: Number, min: 0, required: true },
    stock: { type: Number, default: 0 }
});

module.exports = mongoose.model('Vinyl', vinylSchema);