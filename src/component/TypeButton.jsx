import React from "react";

export default function TypeButton(props) {
  const { item } = props;
  return (
    <div className="form-group my-2">
      <input
        type={item.type}
        className={`btn btn-outline-${item.colorName}`}
        id={item.id}
        value={item.label}
      />
    </div>
  );
}
