import {
  ADD_SESSION,
  ADD_BREAK,
  SUBTRACT_TIME,
  CHANGE_STATE,
  INCREMENT_SESSION,
  INCREMENT_BREAK,
  DECREMENT_BREAK,
  DECREMENT_SESSION,
  RESET,
  PLAY_PAUSE,
} from "../actions";

const initialState = {
  stateNow: "Session",
  breakLength: 5,
  sessionLength: 25,
  paused: true,
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
        stateNow: state.stateNow == "Session" ? "Break" : "Session",
      };
    case INCREMENT_SESSION:
      if (state.sessionLength < 60 && state.paused) {
        return {
          ...state,
          sessionLength: state.sessionLength + 1,
        };
      } else {
        return {
          ...state,
        };
      }
    case DECREMENT_SESSION:
      if (state.sessionLength > 1 && state.paused) {
        return {
          ...state,
          sessionLength: state.sessionLength - 1,
        };
      } else {
        return {
          ...state,
        };
      }
    case INCREMENT_BREAK:
      if (state.breakLength < 60 && state.paused) {
        return {
          ...state,
          breakLength: state.breakLength + 1,
        };
      } else {
        return {
          ...state,
        };
      }
    case DECREMENT_BREAK:
      if (state.breakLength > 1 && state.paused) {
        return {
          ...state,
          breakLength: state.breakLength - 1,
        };
      } else {
        return {
          ...state,
        };
      }

    case RESET:
      return {
        ...state,
        breakLength: 5,
        sessionLength: 25,
        paused: true,
        stateNow: "Session",
      };

    case PLAY_PAUSE:
      return {
        ...state,
        paused: !state.paused,
      };

    default:
      return state;
  }
};

export default clockReducer;
