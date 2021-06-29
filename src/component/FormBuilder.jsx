import React from "react";
import { v4 as uuid } from "uuid";
import TypeText from "./TypeText";
import TypeColor from "./TypeColor";
import TypeCheck from "./TypeCheck";
import TypeButton from "./TypeButton";
import TypeImage from "./TypeImage";
import TypeRange from "./TypeRange";
import TypeSearch from "./TypeSearch";
import TypeTel from "./TypeTel";
import Textarea from "./Textarea";
import Select from "./Select";

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
