export const CHANGE = "CHANGE";

export const changeAction = (data) => {
  return {
    type: CHANGE,
    payload: data,
  };
};
