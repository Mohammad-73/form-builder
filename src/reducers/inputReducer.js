import { v4 as uuid } from "uuid";
export default function inputReducer(state, action) {
  switch (action.type) {
    case "add": {
      return [
        ...state,
        {
          type: action.payload.type,
          label: action.payload.label,
          placeholder: action.payload.placeholder,
          id: uuid(),
        },
      ];
    }
    case "delete": {
      return [];
    }
    case "update": {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
    }
    default:
      return state;
  }
}
