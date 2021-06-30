import React, { useState, useEffect } from "react";

export default function TypeText(props) {
  const { item, handleValue } = props;

  const [textVal, setTextVal] = useState("");

  useEffect(() => {
    let obj = {
      type: item.type,
      id: item.id,
      value: textVal,
      name: item.name,
      placeholde: item.placeholder,
      label: item.label,
    };
    handleValue(obj);
  }, [textVal]);

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
        value={textVal}
        onChange={(e) => setTextVal(e.target.value)}
        required
      />
    </div>
  );
}
