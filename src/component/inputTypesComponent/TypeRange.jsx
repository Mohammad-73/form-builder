import React, { useState, useEffect } from "react";

export default function TypeRange(props) {
  const { item, handleValue } = props;

  const [rangeVal, setRangeVal] = useState("");

  useEffect(() => {
    let obj = {
      type: item.type,
      label: item.label,
      id: item.id,
      name: item.name,
      value: rangeVal,
    };
    handleValue(obj);
  }, [rangeVal]);

  return (
    <div className="form-group">
      <label className="form-label" htmlFor={item.id}>
        {item.label}
      </label>
      <input
        type={item.type}
        name={item.name}
        className="form-control-range"
        id={item.id}
        value={rangeVal}
        onChange={(evt) => setRangeVal(evt.target.value)}
      />
    </div>
  );
}
