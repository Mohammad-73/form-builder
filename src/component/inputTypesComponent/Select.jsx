import React from "react";
import { v4 as uuid } from "uuid";

export default function Select(props) {
  const { item, value, handleChange } = props;

  return (
    <div className="form-group">
      <label htmlFor={item.name}>{item.label}</label>
      <select
        value={value}
        onChange={handleChange}
        className="form-control"
        id={item.name}
        name={item.name}
      >
        {item.option.map((opt) => (
          <option key={uuid()} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
