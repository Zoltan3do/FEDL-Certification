export const EQUALS = "EQUALS";

export const equalsAction = (data) => {
  return {
    type: EQUALS,
    payload: data,
  };
};
