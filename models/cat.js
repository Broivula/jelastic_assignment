const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const catSchema = new Schema({
  name: String,
  age: Number,
  owner: {
    type: mongoose.ObjectId,
    ref: 'User',
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Unkown'],
    required: true,
  },
  color: String,
  weight: Number
});

module.exports = mongoose.model('Cat', catSchema);
