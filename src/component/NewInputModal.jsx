import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const inputTypesArr = [
  "text",
  "button",
  "checkbox",
  "color",
  "date",
  "datetime-local",
  "email",
  "file",
  "hidden",
  "image",
  "month",
  "number",
  "password",
  "radio",
  "range",
  "reset",
  "search",
  "submit",
  "tel",
  "time",
  "url",
  "textarea",
  "select",
];
export default function NewInputModal(props) {
  const { dispatchInputs } = props;

  const [selectType, setSelectType] = useState("text");
  const [formState, setFormState] = useState({
    label: "",
    placeholder: "",
    name: "",
    maxlength: "",
    min: "",
    max: "",
    pattern: "",
    step: "",
    width: "",
    height: "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    const name = evt.target.name;

    setFormState({ ...formState, [name]: value });
  };

  const handleAdd = () => {
    if (formState.name) {
      setFormState({ type: "", label: "", placeholder: "", name: "" });
      dispatchInputs({
        type: "add",
        payload: {
          type: selectType,
          label: formState.label,
          placeholder: formState.placeholder,
          name: formState.name,
          maxlength: formState.maxlength,
          min: formState.min,
          max: formState.max,
          pattern: formState.pattern,
          step: formState.step,
          width: formState.width,
          height: formState.height,
        },
      });
    } else {
      alert("please insert a name");
    }
  };
  return (
    <div id="myModal" className="modal fade" role="dialog">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Input your attributes</h4>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="selectType">Select input type:</label>
                <select
                  style={{ width: "100%", display: "block" }}
                  className="form-control"
                  id="selectType"
                  name="selectInputType"
                  value={selectType}
                  onChange={(evt) => setSelectType(evt.target.value)}
                >
                  {inputTypesArr.map((opt) => (
                    <option key={uuid()} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <hr />
              <div className="form-inline">
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
                <div className="input-group mb-2 mr-2 input-group-sm">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Unique name</span>
                  </div>
                  <input
                    value={formState.name}
                    onChange={handleChange}
                    type="text"
                    name="name"
                    className="form-control"
                    required
                  />
                </div>
                <div className="input-group mb-2 mr-2 input-group-sm">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Pattern</span>
                  </div>
                  <input
                    value={formState.pattern}
                    onChange={handleChange}
                    type="text"
                    name="pattern"
                    className="form-control"
                  />
                </div>
                <div className="input-group mb-2 mr-2 input-group-sm">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Maxlength</span>
                  </div>
                  <input
                    value={formState.maxlength}
                    onChange={handleChange}
                    type="number"
                    name="maxlength"
                    className="form-control"
                  />
                </div>
                <div className="input-group mb-2 mr-2 input-group-sm">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Min</span>
                  </div>
                  <input
                    value={formState.min}
                    onChange={handleChange}
                    type="number"
                    name="min"
                    className="form-control"
                  />
                </div>
                <div className="input-group mb-2 mr-2 input-group-sm">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Max</span>
                  </div>
                  <input
                    value={formState.max}
                    onChange={handleChange}
                    type="number"
                    name="max"
                    className="form-control"
                  />
                </div>

                <div className="input-group mb-2 mr-2 input-group-sm">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Step</span>
                  </div>
                  <input
                    value={formState.step}
                    onChange={handleChange}
                    type="number"
                    name="step"
                    className="form-control"
                  />
                </div>
                <div className="input-group mb-2 mr-2 input-group-sm">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Width</span>
                  </div>
                  <input
                    value={formState.width}
                    onChange={handleChange}
                    type="number"
                    name="width"
                    className="form-control"
                  />
                </div>
                <div className="input-group mb-2 mr-2 input-group-sm">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Height</span>
                  </div>
                  <input
                    value={formState.height}
                    onChange={handleChange}
                    type="number"
                    name="height"
                    className="form-control"
                  />
                </div>
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
              onClick={handleAdd}
              type="button"
              className="btn btn-success"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
