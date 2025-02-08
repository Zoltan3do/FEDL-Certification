export const EQUALS = "EQUALS";
export const CHANGE_EXPRESSION = "CHANGE_EXPRESSION";
export const CHANGE_CURRENT_NUMBER = "CHANGE_CURRENT_NUMBER";
export const CLEAR = "CLEAR";

export const equalsAction = (data) => {
  return {
    type: EQUALS,
    payload: data,
  };
};

export const changeAction = (data) => {
  return {
    type: CHANGE_EXPRESSION,
    payload: data,
  };
};

export const numberAction = (data) => {
  return {
    type: CHANGE_CURRENT_NUMBER,
    payload: data,
  };
};

export const clearAction = () => {
  return {
    type: CLEAR,
  };
};
