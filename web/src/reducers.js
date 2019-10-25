import {combineReducers } from "redux";

import skillReducer from "./containers/skill/skillReducers";
import topicReducer from "./containers/topic/topicReducers";

const rootReducer = combineReducers({
    skillReducer,
    topicReducer
});

export default rootReducer;