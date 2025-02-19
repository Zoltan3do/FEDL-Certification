export const ADD_SESSION = "ADD_SESSION";
export const ADD_BREAK = "ADD_BREAK";
export const SUBTRACT_TIME = "SUBTRACT_TIME";
export const CHANGE_STATE = "CHANGE_STATE";
export const INCREMENT_SESSION = "INCREMENT_SESSION";
export const DECREMENT_SESSION = "DECREMENT_SESSION";
export const INCREMENT_BREAK = "INCREMENT_BREAK";
export const DECREMENT_BREAK = "DECREMENT_BREAK";
export const RESET = "RESET";

export const addSessionAction = (data) => {
  return {
    type: ADD_SESSION,
    payload: data,
  };
};

export const addBreakAction = (data) => {
  return {
    type: ADD_BREAK,
    payload: data,
  };
};

export const subtractTimeAction = () => {
  return {
    type: SUBTRACT_TIME,
  };
};

export const changeStateAction = () => {
  return {
    type: CHANGE_STATE,
  };
};

export const incrementSessionAction = () => {
  return {
    type: INCREMENT_SESSION,
  };
};

export const decrementSessionAction = () => {
  return {
    type: DECREMENT_SESSION,
  };
};

export const incrementBreakAction = () => {
  return {
    type: INCREMENT_BREAK,
  };
};

export const decrementBreakAction = () => {
  return {
    type: DECREMENT_BREAK,
  };
};

export const resetAction = () => {
  return {
    type: RESET,
  };
};
