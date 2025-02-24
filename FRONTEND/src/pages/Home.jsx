import { useState } from "react";
import "./Home.css";

function Home() {
  const [transactions, setTransactions] = useState([]);
  const [frequency, setFrequency] = useState("Last Week");
  const [type, setType] = useState("All");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionType, setTransactionType] = useState("Credit");
  const [category, setCategory] = useState("");

  // Add transaction function
  const addTransaction = () => {
    if (!title || !amount || !category) return;

    const newTransaction = {
      id: transactions.length + 1,
      date: new Date().toISOString().split("T")[0],
      title,
      amount: `$${parseFloat(amount).toFixed(2)}`,
      type: transactionType,
      category,
    };

    setTransactions([...transactions, newTransaction]);

    // Clear input fields after adding
    setTitle("");
    setAmount("");
    setTransactionType("Credit");
    setCategory("");
  };

  // Delete transaction function
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div className="home-container">
      {/* Filters Section */}
      <div className="filters">
        <div className="filter-item">
          <label>Select Frequency</label>
          <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
            <option value="Last Week">Last Week</option>
            <option value="Last Month">Last Month</option>
            <option value="Last Year">Last Year</option>
          </select>
        </div>

        <div className="filter-item">
          <label>Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="All">All</option>
            <option value="Credit">Credit</option>
            <option value="Debit">Debit</option>
          </select>
        </div>

        <button className="reset-btn">Reset Filter</button>

        <div className="graph-icon">📊</div>

        <button className="add-btn">Add New</button>
      </div>

      {/* Transaction Input Form */}
      <div className="transaction-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select value={transactionType} onChange={(e) => setTransactionType(e.target.value)}>
          <option value="Credit">Credit</option>
          <option value="Debit">Debit</option>
        </select>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button onClick={addTransaction} className="add-btn">Add Transaction</button>
      </div>

      {/* Transactions Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length === 0 ? (
              <tr>
                <td colSpan="6" className="no-data">No Transactions Yet</td>
              </tr>
            ) : (
              transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.date}</td>
                  <td>{transaction.title}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.type}</td>
                  <td>{transaction.category}</td>
                  <td>
                    <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
