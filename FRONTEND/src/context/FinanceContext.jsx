import React, { createContext, useState, useContext } from 'react';

// Create the context
const FinanceContext = createContext();

// Provider component to wrap the app with the context provider
export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');

  // Sample categories (could be dynamic or fetched from a backend)
  const categories = ['Groceries', 'Rent', 'Entertainment', 'Salary', 'Utilities'];

  // Function to add transaction
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setCategoryFilter(category);
  };

  // Filtered transactions based on category
  const filteredTransactions = categoryFilter
    ? transactions.filter((transaction) => transaction.category === categoryFilter)
    : transactions;

  return (
    <FinanceContext.Provider
      value={{
        transactions: filteredTransactions,
        addTransaction,
        categories,
        categoryFilter,
        setCategoryFilter,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};

// Custom hook to use the context
export const useFinanceContext = () => {
  return useContext(FinanceContext);
};
