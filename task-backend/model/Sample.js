const mongoose = require('mongoose');

const SampleDataSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId, 
    default: () => new mongoose.Types.ObjectId()
  },
  ts: {
    type: Date,
    default: Date.now
  },
  machine_status: {
    type: Number,
    required: true
  },
  vibration: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("details", SampleDataSchema);
