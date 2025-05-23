const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  userId: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('Task', taskSchema);