import React from "react";

export default function TypeText(props) {
  const { item } = props;
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={item.id}>
        {item.label}
      </label>
      <input
        type={item.type}
        className="form-control"
        placeholder={item.placeholder}
        id={item.id}
        name={item.name}
      />
    </div>
  );
}
