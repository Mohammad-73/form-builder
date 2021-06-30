import React, { useState, useEffect } from "react";

export default function TypeCheck(props) {
  const { item, handleValue } = props;

  const [checkVal, setCheckVal] = useState(false);

  useEffect(() => {
    let obj = {
      type: item.type,
      checked: checkVal,
      name: item.name,
      label: item.label,
    };
    handleValue(obj);
  }, [checkVal]);

  return (
    <div className="form-group form-check">
      <label className="form-check-label">
        <input
          className="form-check-input"
          type={item.type}
          name={item.name}
          checked={checkVal}
          onChange={() => setCheckVal(!checkVal)}
        />{" "}
        {item.label}
      </label>
    </div>
  );
}
