import React from "react";

export default function TypeCheck(props) {
  const { item, value, handleChange } = props;

  return (
    <div className="form-group form-check">
      <label className="form-check-label">
        <input
          className="form-check-input"
          type={item.type}
          name={item.name}
          checked={value}
          onChange={handleChange}
        />{" "}
        {item.label}
      </label>
    </div>
  );
}
