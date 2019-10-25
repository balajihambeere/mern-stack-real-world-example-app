import * as actionTypes from './topicActionTypes';
import axios from 'axios';

export function getTopics() {
    return async (dispatch) => {
        const res = await axios.get(`http://localhost:3200/api/topics`);
        dispatch({ type: actionTypes.FETCH_TOPICS_SUCCESS, payload: res.data });
    };
};

export function addTopic(item) {
    return async (dispatch) => {
        const res = await axios.post(`http://localhost:3200/api/topic`, item);
        dispatch({ type: actionTypes.ADD_TOPIC_SUCCESS, payload: res.data });
    };
};
