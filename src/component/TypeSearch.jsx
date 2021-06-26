import React from "react";

export default function TypeSearch(props) {
  const { item } = props;
  return (
    <div className="input-group my-3">
      <input
        type={item.type}
        className="form-control"
        placeholder={item.type}
      />
      <div className="input-group-append">
        <button className="btn btn-success" type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}
