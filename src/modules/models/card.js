const mongoose = require('mongoose')

const card = new mongoose.Schema({
  id: { type: String, required: true },
  object: { type: String, required: true },
  brand: { type: String, required: true },
  holder_name: { type: String, required: true },
  last_digits: { type: String, required: true },
  country: { type: String, required: true },
  cvv: { type: String, required: true },
  deleted: { type: Boolean, default: false }
}, {
  timestamps: true
})

module.exports = mongoose.model('card', card)
