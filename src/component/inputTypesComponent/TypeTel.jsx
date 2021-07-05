import React from "react";

export default function TypeTel(props) {
  const { item, value, handleChange } = props;

  return (
    <div className="input-group my-3">
      <label className="form-label mb-2" htmlFor={item.name}>
        {item.label}
        <input
          type={item.type}
          id={item.name}
          className="form-control mt-2"
          placeholder={item.placeholder}
          name={item.name}
          value={value}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
