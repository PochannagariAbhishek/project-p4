import React, { useState } from 'react';
import './TransactionForm.css';

function TransactionForm({ onSubmit }) {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || !category || !description) {
      alert("Please fill in all fields.");
      return;
    }

    const newTransaction = {
      amount: parseFloat(amount),
      category,
      description,
      date: new Date().toLocaleString(),
    };

    onSubmit(newTransaction);
    setAmount('');
    setCategory('');
    setDescription('');
  };

  return (
    <div className="transaction-form">
      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Category (e.g., Groceries)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default TransactionForm;



