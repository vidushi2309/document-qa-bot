const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    filename: String,
    content: String
});

module.exports = mongoose.model('Document', documentSchema);
