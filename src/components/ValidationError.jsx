import React, { useCallback } from "react";
import { useSelector } from "react-redux";

const ValidationError = ({ width }) => {
  const { error } = useSelector((state) => state.auth);

  const errorMessage = useCallback(() => {
    return Object.keys(error).map((name) => {
      const msg = error[name].join(", ");
      return `${name} ${msg}`;
    });
  }, [error]);

  return (
    error !== null &&
    errorMessage().map((error) => (
      <div
        className="alert alert-danger mx-auto py-2 my-1 rounded-0 text-start"
        role="alert"
        style={{ width: `${width}` }}
        key={error}
      >
        <h6> {error}</h6>
      </div>
    ))
  );
};

export default ValidationError;
