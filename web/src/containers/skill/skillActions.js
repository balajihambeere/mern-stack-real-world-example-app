import * as actionTypes from './skillActionTypes';
import axios from 'axios';

export function getSkills() {
    return async (dispatch) => {
        const res = await axios.get(`http://localhost:3200/api/skills`);
        dispatch({ type: actionTypes.FETCH_SKILLS_SUCCESS, payload: res.data });
    };
};

export function addSkill(item) {
    return async (dispatch) => {
        const res = await axios.post(`http://localhost:3200/api/skill`, item);
        dispatch({ type: actionTypes.ADD_SKILL_SUCCESS, payload: res.data });
    };
};

export function updateSkill(item) {
    return async (dispatch) => {
        const res = await axios.put(`http://localhost:3200/api/skill/${item._id}`, item);
        dispatch({ type: actionTypes.UPDATE_SKILL_SUCCESS, payload: res.data });
    };
};

