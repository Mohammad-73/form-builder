import React from "react";

export default function TypeSearch(props) {
  const { item, value, handleChange } = props;

  return (
    <div className="form-group">
      <label className="form-label" htmlFor={item.name}>
        {item.label}
      </label>
      <div className="input-group ">
        <input
          type={item.type}
          id={item.name}
          className="form-control"
          placeholder={item.type}
          name={item.name}
          value={value}
          onChange={handleChange}
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
