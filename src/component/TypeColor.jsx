import React from "react";

export default function TypeColor(props) {
  const { item } = props;
  return (
    <div className="form-group">
      <label htmlFor={item.id} class="form-label">
        {item.label}
      </label>
      <input
        style={{ width: "70px" }}
        type={item.type}
        class="form-control form-control-color"
        id={item.id}
        value="#563d7c"
        title="Choose your color"
      ></input>
    </div>
  );
}
