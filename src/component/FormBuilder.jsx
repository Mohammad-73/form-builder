import React from "react";
import { v4 as uuid } from "uuid";
import TypeText from "./inputTypesComponent/TypeText";
import TypeColor from "./inputTypesComponent/TypeColor";
import TypeCheck from "./inputTypesComponent/TypeCheck";
import TypeButton from "./inputTypesComponent/TypeButton";
import TypeImage from "./inputTypesComponent/TypeImage";
import TypeRange from "./inputTypesComponent/TypeRange";
import TypeSearch from "./inputTypesComponent/TypeSearch";
import TypeTel from "./inputTypesComponent/TypeTel";
import Textarea from "./inputTypesComponent/Textarea";
import Select from "./inputTypesComponent/Select";

export default function FormBuilder(props) {
  const { inputs } = props;

  const handleValue = (obj) => {
    // console.log(obj);
  };

  return (
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
              <TypeText
                key={uuid()}
                item={item}
                handleValue={(obj) => handleValue(obj)}
              />
            );
          case "color":
            return <TypeColor key={uuid()} item={item} />;
          case "checkbox":
          case "radio":
            return <TypeCheck key={uuid()} item={item} />;
          case "submit":
          case "reset":
          case "button":
            return <TypeButton key={uuid()} item={item} />;
          case "image":
            return <TypeImage key={uuid()} item={item} />;
          case "range":
            return <TypeRange key={uuid()} item={item} />;
          case "search":
            return <TypeSearch key={uuid()} item={item} />;
          case "tel":
            return <TypeTel key={uuid()} item={item} />;
          case "textarea":
            return <Textarea key={uuid()} item={item} />;
          case "select":
            return <Select key={uuid()} item={item} />;
          default:
            return <></>;
        }
      })}
    </form>
  );
}
