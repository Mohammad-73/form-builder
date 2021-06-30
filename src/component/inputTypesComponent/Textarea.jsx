import React, { useState, useEffect } from "react";

export default function Textarea(props) {
  const { item, handleValue } = props;

  const [textareaVal, setTextareaVal] = useState("");

  useEffect(() => {
    let obj = {
      type: item.type,
      label: item.label,
      id: item.id,
      name: item.name,
      value: textareaVal,
    };
    handleValue(obj);
  }, [textareaVal]);

  return (
    <div className="form-group">
      <label htmlFor="comment">{item.label}</label>
      <textarea
        className="form-control"
        rows="5"
        id={item.id}
        name={item.name}
        placeholder={item.placeholder}
        value={textareaVal}
        onChange={(evt) => setTextareaVal(evt.target.value)}
      ></textarea>
    </div>
  );
}
