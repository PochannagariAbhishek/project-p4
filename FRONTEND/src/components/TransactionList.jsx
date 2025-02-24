import React from 'react';
import './TransactionList.css';

function TransactionList({ transactions }) {
  return (
    <div className="transaction-list">
      <h2>Your Transactions</h2>
      {transactions.length === 0 ? (
        <p>No transactions to display.</p>
      ) : (
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index} className="transaction-item">
              <div>
                <p><strong>Amount:</strong> ${transaction.amount}</p>
                <p><strong>Category:</strong> {transaction.category}</p>
                <p><strong>Description:</strong> {transaction.description}</p>
                <p><strong>Date:</strong> {transaction.date}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TransactionList;
