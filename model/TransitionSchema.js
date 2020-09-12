const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Please add some Text'],
  },
  amount: {
    type: Number,
    required: [true, 'Please add a Income or Expense'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
const Model = mongoose.model('Transaction', TransactionSchema);

module.exports = Model;
