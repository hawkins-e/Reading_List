const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: { type: String },
    author: { type: String },
    publishingcompany: { type: String }
});

module.exports = mongoose.model('Book', bookSchema);