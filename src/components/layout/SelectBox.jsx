import React from "react";

const Selectbox = ({ options, handleChange }) => {
  return (
    <label>
      <select required onChange={handleChange}>
        {options.map((opt, index) => (
          <option value={opt[1]} key={index}>
            {opt[0]}
          </option>
        ))}
      </select>
      <i className="fas fa-angle-down"></i>
    </label>
  );
};

export default Selectbox;
