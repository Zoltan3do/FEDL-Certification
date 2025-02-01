export const CHANGE = "CHANGE";
export const SET_ACTIVE = "SET_ACTIVE";
export const SET_BANKING = "SET_BANKING";
export const SET_VOLUME = "SET_VOLUME";

export const changeAction = (data) => {
  return {
    type: CHANGE,
    payload: data,
  };
};

export const setActiveAction = (active) => {
  return {
    type: SET_ACTIVE,
    payload: active,
  };
};

export const setBankingAction = (banking) => {
  return {
    type: SET_BANKING,
    payload: banking,
  };
};

export const setVolumeAction = (volume) => {
  return {
    type: SET_VOLUME,
    payload: volume,
  };
};
