import * as actionType from "../constants/actionType";

const emailReducer = (state = { emailData: null }, action) => {
  switch (action.type) {
    case actionType.MAIL:
      return { ...state, emailData: action.data, loading: false, errors: null };

    default:
      return state;
  }
};

export default emailReducer;
