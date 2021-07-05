import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import PropTypes, { func } from "prop-types";
import TypeText from "./inputTypesComponent/TypeText";
import TypeColor from "./inputTypesComponent/TypeColor";
import TypeCheck from "./inputTypesComponent/TypeCheck";
import TypeRadio from "./inputTypesComponent/TypeRadio";
import TypeButton from "./inputTypesComponent/TypeButton";
import TypeImage from "./inputTypesComponent/TypeImage";
import TypeRange from "./inputTypesComponent/TypeRange";
import TypeSearch from "./inputTypesComponent/TypeSearch";
import TypeTel from "./inputTypesComponent/TypeTel";
import Textarea from "./inputTypesComponent/Textarea";
import Select from "./inputTypesComponent/Select";

export default function FormBuilder(props) {
  const { inputs, onSubmit } = props;

  const [formData, setFormData] = useState(initialFormData);

  function handleChange(event) {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setFormData({ ...formData, [event.target.name]: value });
  }

  function initialFormData() {
    let initialValue = {};
    inputs.forEach((input) => {
      if (input.type === "checkbox") {
        initialValue[input.name] = input.defaultValue;
      } else {
        initialValue[input.name] = input.defaultValue || "";
      }
    });
    return initialValue;
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(formData);
  }
  
  return (
    <form onSubmit={handleSubmit}>
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
          case "month":
            return (
              <TypeText
                key={item.name}
                item={item}
                value={formData[item.name]}
                handleChange={handleChange}
              />
            );
          case "color":
            return (
              <TypeColor
                key={item.name}
                item={item}
                value={formData[item.name]}
                handleChange={handleChange}
              />
            );
          case "checkbox":
            return (
              <TypeCheck
                key={item.name}
                item={item}
                value={formData[item.name]}
                handleChange={handleChange}
              />
            );
          case "radio":
            return (
              <TypeRadio
                key={item.label}
                item={item}
                value={formData[item.name]}
                handleChange={handleChange}
              />
            );
          case "submit":
          case "reset":
          case "button":
            return <TypeButton key={item.name} item={item} />;
          case "image":
            return <TypeImage key={item.name} item={item} />;
          case "range":
            return (
              <TypeRange
                key={item.name}
                item={item}
                value={formData[item.name]}
                handleChange={handleChange}
              />
            );
          case "search":
            return (
              <TypeSearch
                key={item.name}
                item={item}
                value={formData[item.name]}
                handleChange={handleChange}
              />
            );
          case "tel":
            return (
              <TypeTel
                key={item.name}
                item={item}
                value={formData[item.name]}
                handleChange={handleChange}
              />
            );
          case "textarea":
            return (
              <Textarea
                key={item.name}
                item={item}
                value={formData[item.name]}
                handleChange={handleChange}
              />
            );
          case "select":
            return (
              <Select
                key={item.name}
                item={item}
                value={formData[item.name]}
                handleChange={handleChange}
              />
            );
          default:
            return <p>{item.type} is not supported!</p>;
        }
      })}
    </form>
  );
}

FormBuilder.propTypes = {
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf([
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
      ]),
    })
  ),
  showResult: PropTypes.func,
};
