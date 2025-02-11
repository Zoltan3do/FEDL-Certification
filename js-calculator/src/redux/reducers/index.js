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

  function calculate(expression) {
    try {
      return eval(expression);
    } catch (error) {
      console.error("Errore nella valutazione dell'espressione:", error);
      return "Error";
    }
  }

  switch (action.type) {
    case CHANGE_EXPRESSION:
      const lastChar = state.currentExpression.slice(-1);
      const isOperator = ["+", "-", "*", "/"].includes(action.payload);
      const isLastCharOperator = ["+", "-", "*", "/"].includes(lastChar);

      if (isLastCharOperator && isOperator) {
        if (action.payload === "-") {
          return {
            ...state,
            currentExpression: state.currentExpression + action.payload,
          };
        } else {
          return {
            ...state,
            currentExpression:
              state.currentExpression.slice(0, -1) + action.payload,
          };
        }
      } else {
        return {
          ...state,
          currentExpression: state.currentExpression + action.payload,
        };
      }

    case CHANGE_CURRENT_NUMBER:
      if (state.current_number.includes(".") && action.payload === ".") {
        return state;
      } else if (state.current_number.charAt(0) === ".") {
        return {
          ...state,
          current_number: action?.payload,
        };
      } else if (
        state.current_number.length === 1 &&
        state.current_number.charAt(0) === "0" &&
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
          state.current_number.charAt(state.current_number.length - 1) ===
            ".") &&
          !isNaN(action.payload)) ||
        (action.payload === "." &&
          !isNaN(
            state.current_number.charAt(state.current_number.length - 1)
          ) &&
          lastDotIndex2 === -1)
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
        ...state,
        currentExpression: "",
        current_number: "0",
      };

    case EQUALS:
      try {
        const result = calculate(state.currentExpression);
        return {
          ...state,
          currentExpression: result.toString(),
          current_number: result.toString(),
        };
      } catch (error) {
        return {
          ...state,
          currentExpression: "Error",
          current_number: "0",
        };
      }

    default:
      return state;
  }
};

export default calculatorReducer;
