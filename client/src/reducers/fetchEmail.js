import { FETCH_SCHEDULE } from "../constants/actionType";

const fetchReducer = (schedule = [], action) => {
  switch (action.type) {
    case FETCH_SCHEDULE:
      return action.payload;
    default:
      return schedule;
  }
};

export default fetchReducer;
