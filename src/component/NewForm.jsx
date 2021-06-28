import React from "react";

export default function NewForm(props) {
  const { showTheForm } = props;
  return (
    <div className="pNewForm container p-5 bg-dark">
      <div className="newForm">
        <span onClick={showTheForm} className="bg-light">
          <i className="fa fa-wpforms text-dark"></i>
        </span>
        <p className="m-4">Click to create new form</p>
      </div>
    </div>
  );
}
