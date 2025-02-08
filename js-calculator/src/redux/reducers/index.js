import { EQUALS } from "../actions";
import { CHANGE_EXPRESSION } from "../actions";
import { CHANGE_CURRENT_NUMBER } from "../actions";
import { CLEAR } from "../actions";

const initialState = {
  currentExpression: "",
  current_number: "0",
};

const calculatorReducer = (state = initialState, action) => {
  const lastDotIndex = state.currentExpression.lastIndexOf(".");
  const lastOperatorIndex = Math.max(
    state.currentExpression.lastIndexOf("+"),
    state.currentExpression.lastIndexOf("-"),
    state.currentExpression.lastIndexOf("*"),
    state.currentExpression.lastIndexOf("/")
  );

  const lastDotIndex2 = state.current_number.indexOf(".");
  const lastOperatorIndex2 = Math.max(
    state.current_number.lastIndexOf("+"),
    state.current_number.lastIndexOf("-"),
    state.current_number.lastIndexOf("*"),
    state.current_number.lastIndexOf("/")
  );

  switch (action.type) {
    case CHANGE_EXPRESSION:
      if (action.payload == "." && state.currentExpression.length == 0) {
        return {
          ...state,
          currentExpression: "0.",
        };
      } else if (
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

    case CHANGE_CURRENT_NUMBER:
      if (state.current_number.charAt(0) == ".") {
        return {
          ...state,
          current_number: action?.payload,
        };
      } else if (
        state.current_number.length == 1 &&
        state.current_number.charAt(0) == "0" &&
        !isNaN(action.payload)
      ) {
        return {
          ...state,
          current_number: action?.payload,
        };
      } else if (
        ((!isNaN(
          state.current_number.charAt(state.current_number.length - 1)
        ) ||
          state.current_number.charAt(state.current_number.length - 1) ==
            ".") &&
          !isNaN(action.payload)) ||
        (action.payload == "." &&
          !isNaN(
            state.current_number.charAt(state.current_number.length - 1)
          ) &&
          lastDotIndex2 == -1)
      ) {
        return {
          ...state,
          current_number: state.current_number + action?.payload,
        };
      } else {
        return {
          ...state,
          current_number: action?.payload,
        };
      }

    case CLEAR:
      return {
        currentExpression: "",
        current_number: "0",
      };

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
