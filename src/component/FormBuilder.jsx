import React from "react";
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
              return <TypeText item={item} />;
            case "color":
              return <TypeColor item={item} />;
            case "checkbox":
            case "radio":
              return <TypeCheck item={item} />;
            case "submit":
            case "reset":
            case "button":
              return <TypeButton item={item} />;
            case "image":
              return <TypeImage item={item} />;
            case "range":
              return <TypeRange item={item} />;
            case "search":
              return <TypeSearch item={item} />;
            case "tel":
              return <TypeTel item={item} />;
            case "textarea":
              return <Textarea item={item} />;
            case "select":
              return <Select item={item} />;
            default:
              console.log("error");
          }
        })}
      </form>
    </div>
  );
}
