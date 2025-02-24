import React, { useState } from 'react';

function Budget() {
  const [budget, setBudget] = useState('');

  const handleBudgetSubmit = (e) => {
    e.preventDefault();
    // Handle budget submission logic (e.g., store it in the context or local state)
    console.log(`Budget set to: $${budget}`);
  };

  return (
    <div className="budget">
      <h1>Set Your Budget</h1>
      <form onSubmit={handleBudgetSubmit}>
        <label htmlFor="budget">Monthly Budget: </label>
        <input
          type="number"
          id="budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          required
        />
        <button type="submit">Save Budget</button>
      </form>
    </div>
  );
}

export default Budget;
