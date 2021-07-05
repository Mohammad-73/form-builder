import React from "react";

export default function TypeText(props) {
  const { item, value, handleChange } = props;

  return (
    <div className="form-group">
      <label className="form-label" htmlFor={item.name}>
        {item.label}
      </label>
      <input
        type={item.type}
        className="form-control"
        placeholder={item.placeholder}
        id={item.name}
        name={item.name}
        value={value}
        onChange={handleChange}
      />
      <div id={`${item.name}Help`} className="form-text text-black-50">
        {item.help}
      </div>
    </div>
  );
}
