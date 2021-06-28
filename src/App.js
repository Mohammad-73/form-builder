import { useState, useReducer } from "react";
import "./App.css";
import FormBuilder from "./component/FormBuilder";
import inputReducer from "./reducers/inputReducer";
import PlusAndClose from "./component/PlusAndClose";
import NewForm from "./component/NewForm";
import NewInputModal from "./component/NewInputModal";
import { v4 as uuid } from "uuid";
import imageSrc from "./image/planets.png";

// input types section
const inputValues = [
  {
    type: "text",
    label: "First name:",
    id: uuid(),
    placeholder: "Enter your first name",
  },
  {
    type: "text",
    label: "Last name:",
    id: uuid(),
    placeholder: "Enter your last name",
  },
  {
    type: "number",
    label: "Age:",
    id: uuid(),
    placeholder: "Enter your Age",
  },
  {
    type: "checkbox",
    label: "I have a car",
    id: "",
    placeholder: "",
  },
  {
    type: "checkbox",
    label: "I have a bike",
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
];

function App() {
  const [inputs, dispatchInputs] = useReducer(inputReducer, inputValues);
  const [newForm, setNewForm] = useState(false);
  const [closeForm, setCloseForm] = useState(true);

  const showTheForm = () => {
    setNewForm(true);
    setCloseForm(false);
  };
  const closeTheForm = () => {
    setNewForm(false);
    setCloseForm(true);
  };
  return (
    <div className="container-fluid bg-dark py-5">
      <div className="row bg-dark">
        <div className="col-lg-12 bg-dark">
          {closeForm && <NewForm showTheForm={showTheForm} />}
          {newForm && (
            <>
              <PlusAndClose closeTheForm={closeTheForm} />
              <div className="App container bg-light p-5 rounded center">
                <FormBuilder inputs={inputs} />
              </div>
            </>
          )}
          <NewInputModal dispatchInputs={dispatchInputs} />
        </div>
      </div>
    </div>
  );
}

export default App;
