import { combineReducers } from "redux";

import auth from "./authentication";
import mail from "./emailService";
import fetch from "./fetchEmail";
import fetchHistory from "./fetchHistory";

export const reducers = combineReducers({ auth, mail, fetch, fetchHistory });
