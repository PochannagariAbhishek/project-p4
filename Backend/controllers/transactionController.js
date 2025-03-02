const Transaction = require("../models/Transaction");

exports.addTransaction = async (req, res) => {
  const { title, amount, type, category } = req.body;

  try {
    const transaction = new Transaction({ user: req.user.id, title, amount, type, category });
    await transaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user.id }).sort({ date: -1 });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
