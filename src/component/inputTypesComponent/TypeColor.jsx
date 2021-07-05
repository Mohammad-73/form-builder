import React from "react";

export default function TypeColor(props) {
  const { item, value, handleChange } = props;

  return (
    <div className="form-group">
      <label htmlFor={item.name} className="form-label">
        {item.label}
      </label>
      <input
        style={{ width: "70px" }}
        type={item.type}
        className="form-control form-control-color"
        id={item.name}
        title={item.title}
        name={item.name}
        vlaue={value}
        onChange={handleChange}
      ></input>
    </div>
  );
}
