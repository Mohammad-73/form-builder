import React from "react";

export default function FormBuilder(props) {
  const { inputs } = props;

  return (
    <div>
      <form>
        {inputs.map((item) => {
          switch (item.type) {
            case "text":
            case "email":
            case "password":
            case "number":
            case "date":
            case "datetime-local":
            case "file":
            case "hidden":
            case "time":
            case "url":
            case "week":
              return (
                <div className="form-group">
                  <label className="form-label" htmlFor={item.id}>
                    {item.label}
                  </label>
                  <input
                    type={item.type}
                    className="form-control"
                    placeholder={item.placeholder}
                    id={item.id}
                  />
                </div>
              );
            case "color":
              return (
                <div className="form-group">
                  <label htmlFor={item.id} class="form-label">
                    {item.label}
                  </label>
                  <input
                    style={{ width: "70px" }}
                    type={item.type}
                    class="form-control form-control-color"
                    id={item.id}
                    value="#563d7c"
                    title="Choose your color"
                  ></input>
                </div>
              );
            case "checkbox":
            case "radio":
              return (
                <div className="form-group form-check">
                  <label className="form-check-label">
                    <input
                      className="form-check-input"
                      type={item.type}
                      name={item.name}
                    />{" "}
                    {item.label}
                  </label>
                </div>
              );
            case "submit":
            case "reset":
            case "button":
              return (
                <div className="form-group my-2">
                  <input
                    type={item.type}
                    className={`btn btn-outline-${item.colorName}`}
                    id={item.id}
                    value={item.label}
                  />
                </div>
              );
            case "image":
              return (
                <div className="form-group">
                  <label className="form-label" htmlFor={item.id}>
                    {item.label}
                  </label>
                  <input
                    type={item.type}
                    // className="form-control"
                    id={item.id}
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                  />
                </div>
              );
            case "range":
              return (
                <>
                  <label className="form-label" htmlFor={item.id}>
                    {item.label}
                  </label>
                  <input
                    type={item.type}
                    className="form-control-range"
                    id={item.id}
                  />
                </>
              );
            case "search":
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
            case "tel":
              return (
                <div className="input-group my-3">
                  <label className="form-label mb-2" htmlFor={item.id}>
                    {item.label}
                    <input
                      type={item.type}
                      id={item.id}
                      className="form-control mt-2"
                      placeholder={item.placeholder}
                    />
                  </label>
                </div>
              );
            case "textarea":
              return (
                <div class="form-group">
                  <label htmlFor="comment">{item.label}</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    id={item.id}
                  ></textarea>
                </div>
              );
            case "select":
              return (
                <div className="form-group">
                  <label for={item.id}>{item.label}</label>
                  <select className="form-control" id={item.id}>
                    {item.option.map((opt) => (
                      <option>{opt}</option>
                    ))}
                  </select>
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
