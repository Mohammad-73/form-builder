import React from "react";
import { v4 as uuid } from "uuid";
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
  const { inputs, dispatchInputs, showResult } = props;

  const handleValue = (obj) => {
    // console.log(obj);
  };

  return (
    <form onSubmit={(e) => showResult(e)}>
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
                key={uuid()}
                item={item}
                handleValue={(obj) => handleValue(obj)}
                dispatchInputs={dispatchInputs}
              />
            );
          case "color":
            return (
              <TypeColor
                key={uuid()}
                item={item}
                handleValue={(obj) => handleValue(obj)}
              />
            );
          case "checkbox":
            return (
              <TypeCheck
                key={uuid()}
                item={item}
                handleValue={(obj) => handleValue(obj)}
              />
            );
          case "radio":
            return (
              <TypeRadio
                key={uuid()}
                item={item}
                handleValue={(obj) => handleValue(obj)}
              />
            );
          case "submit":
          case "reset":
          case "button":
            return <TypeButton key={uuid()} item={item} />;
          case "image":
            return <TypeImage key={uuid()} item={item} />;
          case "range":
            return (
              <TypeRange
                key={uuid()}
                item={item}
                handleValue={(obj) => handleValue(obj)}
              />
            );
          case "search":
            return (
              <TypeSearch
                key={uuid()}
                item={item}
                handleValue={(obj) => handleValue(obj)}
              />
            );
          case "tel":
            return (
              <TypeTel
                key={uuid()}
                item={item}
                handleValue={(obj) => handleValue(obj)}
              />
            );
          case "textarea":
            return (
              <Textarea
                key={uuid()}
                item={item}
                handleValue={(obj) => handleValue(obj)}
              />
            );
          case "select":
            return (
              <Select
                key={uuid()}
                item={item}
                handleValue={(obj) => handleValue(obj)}
              />
            );
          default:
            return <></>;
        }
      })}
    </form>
  );
}
