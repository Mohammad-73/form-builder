import { useReducer } from "react";
import "./App.css";
import FormBuilder from "./component/FormBuilder";
import inputReducer from "./reducers/inputReducer";
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
    type: "text",
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
    type: "button",
    label: "Cancel",
    colorName: "danger",
    id: "",
    placeholder: "",
  },
  {
    type: "button",
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
