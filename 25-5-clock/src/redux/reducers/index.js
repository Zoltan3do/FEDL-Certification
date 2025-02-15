import {
  ADD_SESSION,
  ADD_BREAK,
  SUBTRACT_TIME,
  CHANGE_STATE_NOW,
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
    case CHANGE_STATE_NOW:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default clockReducer;
