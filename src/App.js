import { useState, useReducer } from "react";
import "./App.css";
import FormBuilder from "./component/FormBuilder";
import inputReducer from "./reducers/inputReducer";
import PlusAndClose from "./component/PlusAndClose";
import NewForm from "./component/NewForm";
import NewInputModal from "./component/NewInputModal";

// import imageSrc from "./image/planets.png";

// input types section
const inputValues = [
  {
    type: "radio",
    label: "male",
    defaultValue: "male",
    name: "gender",
    placeholder: "",
  },
  {
    type: "radio",
    label: "female",
    defaultValue: "female",
    name: "gender",
    placeholder: "",
  },
  {
    type: "checkbox",
    label: "I have a car",
    defaultValue: false,
    name: "have car?",
    placeholder: "",
  },
  {
    type: "checkbox",
    label: "I have a bike",
    defaultValue: false,
    name: "have bike?",
    placeholder: "",
  },
  // {
  //   type: "text",
  //   label: "First name:",
  //   name: "fName",
  //   placeholder: "Enter your first name",
  // },
  // {
  //   type: "text",
  //   label: "Last name:",
  //   name: "lName",
  //   placeholder: "Enter your last name",
  // },
  // {
  //   type: "number",
  //   label: "Age:",
  //   name: "age",
  //   placeholder: "Enter your Age",
  // },
  // {
  //   type: "email",
  //   label: "Email address:",
  //   name: "eAddress",
  //   placeholder: "Enter email",
  // },
  // {
  //   type: "password",
  //   label: "Password:",
  //   name: "pass",
  //   placeholder: "Enter password",
  // },
  // {
  //   type: "checkbox",
  //   label: "I have a car",
  //   id: "",
  //   placeholder: "",
  // },
  // {
  //   type: "checkbox",
  //   label: "I have a bike",
  //   id: "",
  //   placeholder: "",
  // },

  // {
  //   type: "color",
  //   label: "Select your favorite color:",
  //   name: "cName",
  //   title: "chose your color",
  //   placeholder: "",
  // },
  // {
  //   type: "date",
  //   label: "Birthday:",
  //   name: "bDate",
  //   placeholder: "",
  // },
  // {
  //   type: "datetime-local",
  //   label: "Birthday:",
  //   name: "birthdayDate",
  //   placeholder: "",
  // },
  // {
  //   type: "file",
  //   label: "Chose your file:",
  //   name: "files",
  //   placeholder: "",
  // },
  // {
  //   type: "hidden",
  //   name: "hide",
  //   value: "hide",
  //   label: "",
  //   id: "file",
  //   placeholder: "",
  // },

  // {
  //   type: "range",
  //   name: "range",
  //   label: "range",
  //   id: "range",
  // },
  // {
  //   type: "search",
  //   name: "search",
  //   label: "search",
  //   id: "search",
  //   placeholder: "search",
  // },
  // {
  //   type: "tel",
  //   name: "telephone",
  //   label: "Enter your tel number:",
  //   id: "tel",
  //   placeholder: "tel number",
  // },
  // {
  //   type: "time",
  //   name: "time",
  //   label: "Select time:",
  //   id: "time",
  //   placeholder: "",
  // },
  // {
  //   type: "url",
  //   name: "homepage",
  //   label: "Add your homepage:",
  //   id: "homepage",
  //   placeholder: "",
  // },
  // {
  //   type: "week",
  //   name: "week",
  //   label: "Select a week:",
  //   id: "week",
  //   placeholder: "",
  // },
  // {
  //   type: "textarea",
  //   name: "comment",
  //   label: "Comment:",
  //   id: "textarea",
  //   placeholder: "",
  // },
  // {
  //   type: "select",
  //   name: "flavorSelect",
  //   label: "Pick your favorite flavor::",
  //   id: "select",
  //   option: ["Grapefruit", "Lime", "Coconut", "Mango"],
  // },
  // {
  //   type: "button",
  //   label: "Cancel",
  //   colorName: "danger",
  //   id: "",
  //   placeholder: "",
  // },
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
];

function App() {
  const [inputs, dispatchInputs] = useReducer(inputReducer, inputValues);
  const [createForm, setCreateForm] = useState(false);
  const [closeForm, setCloseForm] = useState(true);

  const onSubmit = (values) => {
    console.log(values);
  };

  const showTheForm = () => {
    setCreateForm(true);
    setCloseForm(false);
  };

  const closeTheForm = () => {
    setCreateForm(false);
    setCloseForm(true);
    dispatchInputs({ type: "delete" });
  };

  return (
    <div className="container-fluid bg-dark py-5">
      <div className="row bg-dark">
        <div className="col-lg-12 bg-dark">
          {closeForm && <NewForm showTheForm={showTheForm} />}
          {createForm && (
            <>
              <PlusAndClose closeTheForm={closeTheForm} />
              <div className="App container bg-light p-5 rounded center">
                <FormBuilder inputs={inputs} onSubmit={onSubmit} />
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
