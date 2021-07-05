import React from "react";

export default function TypeImage(props) {
  const { item } = props;
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={item.name}>
        {item.label}
      </label>
      <input
        type={item.type}
        id={item.name}
        src={item.src}
        name={item.name}
        alt={item.alt}
        width={item.width}
        height={item.height}
      />
    </div>
  );
}
