import React, { useState, useEffect } from "react";

export default function TypeRadio(props) {
  const { item, handleValue } = props;

  const [radioVal, setRadioVal] = useState(item.label);

  useEffect(() => {
    let obj = {
      type: item.type,
      checked: radioVal,
      value: item.label,
      name: item.name,
      label: item.label,
    };
    handleValue(obj);
  }, [radioVal]);

  return (
    <div className="form-group form-check">
      <label className="form-check-label">
        <input
          className="form-check-input"
          type={item.type}
          name={item.name}
          checked={item.label}
          onChange={() => setRadioVal(item.label)}
        />{" "}
        {item.label}
      </label>
    </div>
  );
}
