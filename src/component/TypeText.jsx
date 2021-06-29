import React, { useState, useEffect } from "react";

export default function TypeText(props) {
  const { item, handleValue } = props;

  const [val, setVal] = useState();

  useEffect(() => {
    let obj = {
      type: item.type,
      id: item.id,
      value: val,
      name: item.name,
      placeholde: item.placeholder,
      label: item.label,
    };
    handleValue(obj);
  }, [val]);

  return (
    <div className="form-group">
      <label className="form-label" htmlFor={item.id}>
        {item.label}
      </label>
      <input
        type={item.type}
        className="form-control"
        placeholder={item.placeholder}
        id={item.id}
        name={item.name}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        required
      />
      {val}
    </div>
  );
}
