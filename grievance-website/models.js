const mongoose = require('mongoose');

const grievanceSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    description: String,
    file: String // Optional for file paths
});

module.exports = mongoose.model('Grievance', grievanceSchema);
