import React, { useState, useEffect } from "react";

export default function TypeColor(props) {
  const { item, handleValue } = props;

  const [colorVal, setColorVal] = useState("#563d7c");

  useEffect(() => {
    let obj = {
      type: item.type,
      label: item.label,
      id: item.id,
      title: item.title,
      name: item.name,
      value: colorVal,
    };
    handleValue(obj);
  }, [colorVal]);

  return (
    <div className="form-group">
      <label htmlFor={item.id} className="form-label">
        {item.label}
      </label>
      <input
        style={{ width: "70px" }}
        type={item.type}
        className="form-control form-control-color"
        id={item.id}
        title={item.title}
        name={item.name}
        value={colorVal}
        onChange={(evt) => setColorVal(evt.target.value)}
      ></input>
    </div>
  );
}
