import {
  ADD_SESSION,
  ADD_BREAK,
  SUBTRACT_TIME,
  CHANGE_STATE,
  INCREMENT_SESSION,
  INCREMENT_BREAK,
  DECREMENT_BREAK,
  DECREMENT_SESSION,
} from "../actions";

const initialState = {
  currentTimer: "25:00",
  stateNow: "session",
  breakLength: 5,
  sessionLength: 25,
};

const clockReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SESSION:
      return {
        ...state,
      };
    case ADD_BREAK:
      return {
        ...state,
      };
    case SUBTRACT_TIME:
      return {
        ...state,
      };
    case CHANGE_STATE:
      return {
        ...state,
      };
    case INCREMENT_SESSION:
      return {
        ...state,
      };
    case DECREMENT_SESSION:
      return {
        ...state,
      };
    case INCREMENT_BREAK:
      return {
        ...state,
      };
    case DECREMENT_BREAK:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default clockReducer;
