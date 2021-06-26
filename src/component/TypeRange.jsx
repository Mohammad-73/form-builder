import React from "react";

export default function TypeRange(props) {
  const { item } = props;
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={item.id}>
        {item.label}
      </label>
      <input type={item.type} className="form-control-range" id={item.id} />
    </div>
  );
}
