import { EQUALS } from "../actions";
import { CHANGE } from "../actions";

const initialState = {
  currentExpression: "",
  current_number: 0,
};

const calculatorReducer = (state = initialState, action) => {
  const lastDotIndex = state.currentExpression.lastIndexOf(".");
  const lastOperatorIndex = Math.max(
    state.currentExpression.lastIndexOf("+"),
    state.currentExpression.lastIndexOf("-"),
    state.currentExpression.lastIndexOf("*"),
    state.currentExpression.lastIndexOf("/")
  );

  switch (action.type) {
    case CHANGE:
      if (
        (state.currentExpression.length == 1 &&
          action.payload == "0" &&
          state.currentExpression.charAt(state.currentExpression.length - 1) ==
            "0") ||
        (isNaN(
          state.currentExpression.charAt(state.currentExpression.length - 1)
        ) &&
          action.payload ===
            state.currentExpression.charAt(
              state.currentExpression.length - 1
            )) ||
        (isNaN(
          state.currentExpression.charAt(state.currentExpression.length - 2)
        ) &&
          state.currentExpression.charAt(state.currentExpression.length - 1) ==
            "0" &&
          action.payload == "0") ||
        (action.payload === "." && lastDotIndex > lastOperatorIndex) ||
        (isNaN(
          state.currentExpression.charAt(state.currentExpression.length - 1)
        ) &&
          isNaN(action.payload))
      ) {
        return state;
      } else {
        return {
          ...state,
          currentExpression: state.currentExpression + action.payload,
        };
      }

    case EQUALS:
      return {
        ...state,
        current_number: action.payload?.current_number,
      };

    default:
      return state;
  }
};

export default calculatorReducer;
