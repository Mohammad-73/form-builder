import React from "react";

export default function PlusAndClose(props) {
  const { closeTheForm } = props;
  return (
    <div className="container">
      <div className="plusAndClose">
        <span className="float-right">
          <button
            onClick={closeTheForm}
            type="button"
            className="btn btn-outline-warning  mx-2"
          >
            <i className="fa fa-arrow-left"></i>
          </button>
          <button
            data-toggle="modal"
            data-target="#myModal"
            type="button"
            className="btn btn-outline-success  mx-2"
          >
            <i className="fa fa-plus"></i>
          </button>
        </span>
      </div>
    </div>
  );
}
