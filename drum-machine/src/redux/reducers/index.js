import { CHANGE } from "../actions";
import { SET_ACTIVE } from "../actions";
import { SET_BANKING } from "../actions";
import { SET_VOLUME } from "../actions";

const initialState = {
  elementId: "",
  description: "",
  active: true,
  banking: false,
  volume: 0.5,
};

const displayReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        elementId: action.payload?.elementId,
        description: action.payload?.description,
      };
    case SET_ACTIVE:
      return {
        ...state,
        active: action.payload,
      };
    case SET_BANKING:
      return {
        ...state,
        banking: action.payload,
      };
    case SET_VOLUME:
      return {
        ...state,
        volume: action.payload,
      };
    default:
      return state;
  }
};

export default displayReducer;
