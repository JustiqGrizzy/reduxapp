import React from "react";

const Input = ({ label, type = "text", placeholder, state, setState }) => {
  return (
    <div>
      <label htmlFor="genInput" className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id="genInput"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
