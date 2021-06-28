import React, { useState } from "react";

export default function NewInputModal(props) {
  const { dispatchInputs } = props;
  const [formState, setFormState] = useState({
    type: "",
    label: "",
    placeholder: "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    const name = evt.target.name;

    setFormState({ ...formState, [name]: value });
  };
  return (
    <div id="myModal" className="modal fade" role="dialog">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Input your attributes</h4>
          </div>
          <div className="modal-body">
            <form className="form-inline">
              <div className="input-group mb-2 mr-2 input-group-sm">
                <div className="input-group-prepend">
                  <span className="input-group-text">Type</span>
                </div>
                <input
                  value={formState.type}
                  onChange={handleChange}
                  type="text"
                  name="type"
                  className="form-control"
                />
              </div>
              <div className="input-group mb-2 mr-2 input-group-sm">
                <div className="input-group-prepend">
                  <span className="input-group-text">Label</span>
                </div>
                <input
                  value={formState.label}
                  onChange={handleChange}
                  type="text"
                  name="label"
                  className="form-control"
                />
              </div>
              <div className="input-group mb-2 mr-2 input-group-sm">
                <div className="input-group-prepend">
                  <span className="input-group-text">Placeholder</span>
                </div>
                <input
                  value={formState.placeholder}
                  onChange={handleChange}
                  type="text"
                  name="placeholder"
                  className="form-control"
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              onClick={() =>
                dispatchInputs({
                  type: "add",
                  payload: {
                    type: formState.type,
                    label: formState.label,
                    placeholder: formState.placeholder,
                  },
                })
              }
              type="button"
              className="btn btn-success"
              data-dismiss="modal"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
