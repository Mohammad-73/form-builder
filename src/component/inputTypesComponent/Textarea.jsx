import React from "react";

export default function Textarea(props) {
  const { item, value, handleChange } = props;

  return (
    <div className="form-group">
      <label htmlFor={item.name}>{item.label}</label>
      <textarea
        className="form-control"
        rows="5"
        id={item.name}
        name={item.name}
        placeholder={item.placeholder}
        value={value}
        onChange={handleChange}
      ></textarea>
    </div>
  );
}
