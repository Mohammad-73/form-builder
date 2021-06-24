import { useReducer } from "react";
import "./App.css";
import FormBuilder from "./component/FormBuilder";
import inputReducer from "./reducers/inputReducer";
import imageSrc from "./image/planets.png";
// input types section
const inputValues = [
  {
    type: "text",
    label: "First name:",
    id: "text",
    placeholder: "Enter your first name",
  },
  {
    type: "text",
    label: "Last name:",
    id: "text",
    placeholder: "Enter your last name",
  },
  {
    type: "number",
    label: "Age:",
    id: "text",
    placeholder: "Enter your Age",
  },
  {
    type: "email",
    label: "Email address:",
    id: "email",
    placeholder: "Enter email",
  },
  {
    type: "password",
    label: "Password:",
    id: "password",
    placeholder: "Enter password",
  },
  {
    type: "checkbox",
    label: "Remember me",
    id: "",
    placeholder: "",
  },
  {
    type: "checkbox",
    label: "Remember me",
    id: "",
    placeholder: "",
  },
  {
    type: "button",
    label: "Cancel",
    colorName: "danger",
    id: "",
    placeholder: "",
  },
  {
    type: "submit",
    label: "Submit",
    colorName: "primary",
    id: "",
    placeholder: "",
  },
  {
    type: "reset",
    colorName: "warning",
    id: "reset",
  },
  {
    type: "radio",
    label: "male",
    id: "",
    placeholder: "",
  },
  {
    type: "radio",
    label: "female",
    id: "",
    placeholder: "",
  },
  {
    type: "color",
    label: "Select your favorite color:",
    id: "facColor",
    placeholder: "",
  },
  {
    type: "date",
    label: "Birthday:",
    id: "birthday",
    placeholder: "",
  },
  {
    type: "datetime-local",
    label: "Birthday:",
    id: "birthday",
    placeholder: "",
  },
  {
    type: "file",
    label: "Chose your file:",
    id: "file",
    placeholder: "",
  },
  {
    type: "hidden",
    name: "hide",
    value: "hide",
    label: "",
    id: "file",
    placeholder: "",
  },
  {
    type: "image",
    name: "image",
    id: "image",
    src: imageSrc,
    alt: "image",
    width: "500",
    height: "300",
  },
  {
    type: "range",
    name: "range",
    label: "range",
    id: "range",
  },
  {
    type: "search",
    name: "search",
    label: "search",
    id: "search",
    placeholder: "search",
  },
];

function App() {
  const [inputs, dispatchInputs] = useReducer(inputReducer, inputValues);
  return (
    <div className="container-fluid bg-dark py-5">
      <div className="row bg-dark">
        <div className="col-lg-12 bg-dark">
          <div className="App container bg-light p-5 rounded center">
            <FormBuilder inputs={inputs} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
