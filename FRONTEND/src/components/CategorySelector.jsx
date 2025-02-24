import React from 'react';
import './CategorySelector.css';

function CategorySelector({ categories, onSelect }) {
  return (
    <div className="category-selector">
      <h3>Filter by Category</h3>
      <select 
        onChange={(e) => onSelect(e.target.value)} 
        defaultValue=""
        className="category-dropdown"
      >
        <option value="">All</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategorySelector;
