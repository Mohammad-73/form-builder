import React from "react";

export default function FormBuilder(props) {
  const { inputs } = props;

  return (
    <div>
      <form key={inputs.id}>
        {inputs.map((item) => {
          switch (item.type) {
            case "text":
            case "email":
            case "password":
              return (
                <div className="form-group">
                  <label htmlFor={item.id}>{item.label}</label>
                  <input
                    type={item.type}
                    className="form-control"
                    placeholder={item.placeholder}
                    id={item.id}
                  />
                </div>
              );
            case "checkbox":
              return (
                <div className="form-group form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type={item.type} />{" "}
                    {item.label}
                  </label>
                </div>
              );
            case "button":
              return (
                <div className="btn-group mr-2">
                  <button
                    type={item.type}
                    className={`btn btn-outline-${item.colorName}`}
                  >
                    {item.label}
                  </button>
                </div>
              );
            case "reset":
              return (
                <div className="form-group mt-2">
                  <input
                    type={item.type}
                    className={`btn btn-outline-${item.colorName}`}
                    id={item.id}
                  />
                </div>
              );
            default:
              console.log("error");
          }
        })}
      </form>
    </div>
  );
}
