export const EQUALS = "EQUALS";
export const CHANGE = "CHANGE";

export const equalsAction = (data) => {
  return {
    type: EQUALS,
    payload: data,
  };
};

export const changeAction = (data) => {
  return {
    type: CHANGE,
    payload: data,
  };
};

