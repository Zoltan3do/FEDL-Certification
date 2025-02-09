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
    state.currentExpression.lastIndexOf("x"),
    state.currentExpression.lastIndexOf("/")
  );

  const lastDotIndex2 = state.current_number.indexOf(".");

  function calculate(expression) {
    try {
      // Rimuovi eventuali spazi e sostituisci 'x' con '*'
      expression = expression.trim().replace(/x/g, "*");

      // Implementa la precedenza degli operatori
      let tokens = [];
      let currentNumber = "";

      // Tokenizzazione dell'espressione
      for (let i = 0; i < expression.length; i++) {
        const char = expression[i];
        if ("0123456789.".includes(char)) {
          currentNumber += char;
        } else if ("+-*/".includes(char)) {
          if (currentNumber !== "") {
            tokens.push(parseFloat(currentNumber));
            currentNumber = "";
          }
          tokens.push(char);
        }
      }
      if (currentNumber !== "") {
        tokens.push(parseFloat(currentNumber));
      }

      // Prima passa: moltiplicazione e divisione
      for (let i = 1; i < tokens.length - 1; i += 2) {
        if (tokens[i] === "*" || tokens[i] === "/") {
          const left = tokens[i - 1];
          const right = tokens[i + 1];
          let result;

          if (tokens[i] === "*") {
            result = left * right;
          } else if (tokens[i] === "/") {
            if (right === 0) throw new Error("Division by zero");
            result = left / right;
          }

          tokens.splice(i - 1, 3, result);
          i -= 2;
        }
      }

      // Seconda passa: addizione e sottrazione
      let result = tokens[0];
      for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const operand = tokens[i + 1];

        if (operator === "+") {
          result += operand;
        } else if (operator === "-") {
          result -= operand;
        }
      }

      // Arrotonda a 10 decimali per evitare imprecisioni dei numeri in virgola mobile
      return Math.round(result * 1e10) / 1e10;
    } catch (error) {
      console.error("Errore nel calcolo:", error);
      return NaN;
    }
  }

  switch (action.type) {
    case CHANGE_EXPRESSION:
      if (action.payload === "." && state.currentExpression.length === 0) {
        return {
          ...state,
          currentExpression: "0.",
        };
      } else if (
        (state.currentExpression.length === 1 &&
          action.payload === "0" &&
          state.currentExpression.charAt(state.currentExpression.length - 1) ===
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
          state.currentExpression.charAt(state.currentExpression.length - 1) ===
            "0" &&
          action.payload === "0") ||
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
      if (state.current_number.charAt(0) === ".") {
        return {
          ...state,
          current_number: action.payload,
        };
      } else if (
        state.current_number.length === 1 &&
        state.current_number.charAt(0) === "0" &&
        !isNaN(action.payload)
      ) {
        return {
          ...state,
          current_number: action.payload,
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
          current_number: state.current_number + action.payload,
        };
      } else {
        return {
          ...state,
          current_number: action.payload,
        };
      }

    case CLEAR:
      return {
        ...state,
        currentExpression: "",
        current_number: "0",
      };

    case EQUALS:
      const result = calculate(state.currentExpression);
      if (isNaN(result)) {
        return {
          ...state,
          current_number: "Error",
          currentExpression: "",
        };
      }
      return {
        ...state,
        currentExpression: state.currentExpression + "=" + result,
        current_number: result.toString(),
      };

    default:
      return state;
  }
};

export default calculatorReducer;
