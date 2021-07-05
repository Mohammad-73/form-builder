import React from "react";

export default function TypeRadio(props) {
  const { item, value, handleChange } = props;

  return (
    <div className="form-group form-check">
      <label className="form-check-label">
        <input
          className="form-check-input"
          type={item.type}
          name={item.name}
          value={item.label}
          onChange={handleChange}
        />{" "}
        {item.label}
      </label>
    </div>
  );
}
