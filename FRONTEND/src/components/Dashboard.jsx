import React, { useState } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [transaction, setTransaction] = useState({ type: 'income', amount: '' });

  const handleIncomeChange = (e) => {
    setTransaction({ ...transaction, amount: e.target.value });
  };

  const handleAddTransaction = () => {
    if (transaction.amount === '') {
      alert("Please enter a valid amount.");
      return;
    }

    if (transaction.type === 'income') {
      setIncome(income + parseFloat(transaction.amount));
    } else {
      setExpenses(expenses + parseFloat(transaction.amount));
    }

    setTransaction({ ...transaction, amount: '' }); // Reset after adding
  };

  return (
    <div className="dashboard">
      <h1>Welcome to Your Finance Dashboard</h1>
      <p>Your financial overview will be displayed here.</p>

      {/* Input form for transactions */}
      <div className="transaction-input">
        <select 
          value={transaction.type} 
          onChange={(e) => setTransaction({ ...transaction, type: e.target.value })}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        
        <input 
          type="number" 
          placeholder="Amount" 
          value={transaction.amount} 
          onChange={handleIncomeChange}
        />
        
        <button onClick={handleAddTransaction}>Add {transaction.type}</button>
      </div>

      {/* Financial Overview */}
      <div className="summary">
        <div className="summary-item">
          <h3>Total Income</h3>
          <p>${income}</p>
        </div>
        <div className="summary-item">
          <h3>Total Expenses</h3>
          <p>${expenses}</p>
        </div>
        <div className="summary-item">
          <h3>Net Balance</h3>
          <p>${income - expenses}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

