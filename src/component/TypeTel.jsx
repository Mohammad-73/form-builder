import React from "react";

export default function TypeTel(props) {
  const { item } = props;
  return (
    <div className="input-group my-3">
      <label className="form-label mb-2" htmlFor={item.id}>
        {item.label}
        <input
          type={item.type}
          id={item.id}
          className="form-control mt-2"
          placeholder={item.placeholder}
        />
      </label>
    </div>
  );
}
