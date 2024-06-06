import React from "react";

const Input = ({ label, type = "text", placeholder, state, setState }) => {
  return (
    <div className="form-floating mb-3">
      <input
        type={type}
        className="form-control"
        id="floatingInput"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder={placeholder}
      />
      <label htmlFor="floatingInput">{label}</label>
    </div>
  );
};

export default Input;
