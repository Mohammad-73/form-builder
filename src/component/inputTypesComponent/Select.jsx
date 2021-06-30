import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

export default function Select(props) {
  const { item, handleValue } = props;

  const [selectVal, setSelectVal] = useState("Grapefruit");

  useEffect(() => {
    let obj = {
      type: item.type,
      label: item.label,
      id: item.id,
      name: item.name,
      value: selectVal,
    };
    handleValue(obj);
  }, [selectVal]);

  return (
    <div className="form-group">
      <label htmlFor={item.id}>{item.label}</label>
      <select
        className="form-control"
        id={item.id}
        name={item.name}
        value={selectVal}
        onChange={(evt) => setSelectVal(evt.target.value)}
      >
        {item.option.map((opt) => (
          <option key={uuid()} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
