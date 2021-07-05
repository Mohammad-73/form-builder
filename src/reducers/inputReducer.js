export default function inputReducer(state, action) {
  switch (action.type) {
    case "add": {
      return [
        ...state,
        {
          type: action.payload.type,
          label: action.payload.label,
          placeholder: action.payload.placeholder,
          name: action.payload.name,
          maxlength: action.payload.maxlength,
          max: action.payload.max,
          min: action.payload.min,
          pattern: action.payload.pattern,
          step: action.payload.step,
          width: action.payload.width,
          height: action.payload.height,
          colorName: action.payload.buttonColor,
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
