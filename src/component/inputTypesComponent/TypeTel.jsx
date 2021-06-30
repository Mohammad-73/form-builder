import React, { useState, useEffect } from "react";

export default function TypeTel(props) {
  const { item, handleValue } = props;

  const [telVal, setTelVal] = useState("");

  useEffect(() => {
    let obj = {
      type: item.type,
      label: item.label,
      id: item.id,
      name: item.name,
      value: telVal,
    };
    handleValue(obj);
  }, [telVal]);

  return (
    <div className="input-group my-3">
      <label className="form-label mb-2" htmlFor={item.id}>
        {item.label}
        <input
          type={item.type}
          id={item.id}
          className="form-control mt-2"
          placeholder={item.placeholder}
          name={item.name}
          value={telVal}
          onChange={(evt) => setTelVal(evt.target.value)}
        />
      </label>
    </div>
  );
}
