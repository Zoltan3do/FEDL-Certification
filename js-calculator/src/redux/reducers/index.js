import { EQUALS } from "../actions";

const initialState = {
  currentOperation: "",
  total: 0,
  current_number: null,
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case EQUALS:
      return {
        ...state,
        currentOperation: "=",
        total: action.payload?.total,
      };
    default:
      return state;
  }
};

export default calculatorReducer;
