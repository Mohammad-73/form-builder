import React from "react";

export default function TypeRange(props) {
  const { item, value, handleChange } = props;

  return (
    <div className="form-group">
      <label className="form-label" htmlFor={item.name}>
        {item.label}
      </label>
      <input
        type={item.type}
        name={item.name}
        className="form-control-range"
        id={item.name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
