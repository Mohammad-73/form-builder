import React from "react";

export default function TypeButton(props) {
  const { item } = props;
  return (
    <div className="form-group mr-2 float-left">
      <input
        type={item.type}
        className={`btn btn-outline-${item.colorName}`}
        id={item.name}
        value={item.label}
      />
    </div>
  );
}
