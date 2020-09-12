const express = require('express');

const router = express.Router();
const {
  getTransaction,
  addTransaction,
  deleteTransaction,
} = require('../controllers/transcation-controller.js');
router.route('/').get(getTransaction).post(addTransaction);

router.route('/:id').delete(deleteTransaction);
module.exports = router;
