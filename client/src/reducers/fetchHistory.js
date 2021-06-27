import { FETCH_HISTORY } from "../constants/actionType";

const fetchHistory = (history = [], action) => {
  switch (action.type) {
    case FETCH_HISTORY:
      return action.payload;
    default:
      return history;
  }
};

export default fetchHistory;
