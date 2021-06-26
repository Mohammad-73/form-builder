import React from "react";

export default function Select(props) {
  const { item } = props;
  return (
    <div className="form-group">
      <label for={item.id}>{item.label}</label>
      <select className="form-control" id={item.id}>
        {item.option.map((opt) => (
          <option>{opt}</option>
        ))}
      </select>
    </div>
  );
}
