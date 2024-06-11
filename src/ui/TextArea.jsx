import React from "react";

const TextArea = ({
  label,
  state,
  setState,
  placeholder,
  height = "100px",
}) => {
  return (
    <div>
      <div className="form-floating">
        <textarea
          className="form-control mb-3"
          id="floatingTextarea2"
          style={{ height: `${height}` }}
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder={placeholder}
        ></textarea>
        <label htmlFor="floatingTextarea2">{label}</label>
      </div>
    </div>
  );
};

export default TextArea;
