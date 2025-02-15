export const ADD_SESSION = "ADD_SESSION";
export const ADD_BREAK = "ADD_BREAK";
export const SUBTRACT_TIME = "SUBTRACT_TIME";
export const CHANGE_STATE_NOW = "CHANGE_STATE_NOW";

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

export const changeStateNow = () => {
  return {
    type: CHANGE_STATE_NOW,
  };
};
