const mongoose = require('mongoose');

const phoneSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, required: true },
    ramId: { type: mongoose.Schema.Types.ObjectId, required: true },
    battery: { type: String, required: true },
    origin: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Phone', phoneSchema); 