import * as actionTypes from './topicActionTypes';

const topicReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TOPICS_SUCCESS:
            return Object.assign({}, state, {
                topics: action.payload,
            });
        case actionTypes.ADD_TOPIC_SUCCESS:
            return Object.assign({}, state, {
                topic: action.payload,
            });
        default:
            return state;
    }
};

export default topicReducer;