import React, { useState, useEffect } from "react";

export default function TypeSearch(props) {
  const { item, handleValue } = props;

  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    let obj = {
      type: item.type,
      label: item.label,
      id: item.id,
      name: item.name,
      value: searchVal,
    };
    handleValue(obj);
  }, [searchVal]);

  return (
    <div className="form-group">
      <label className="form-label" htmlFor={item.id}>
        {item.label}
      </label>
      <div className="input-group ">
        <input
          type={item.type}
          id={item.id}
          className="form-control"
          placeholder={item.type}
          name={item.name}
          value={searchVal}
          onChange={(evt) => setSearchVal(evt.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-success" type="submit">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
