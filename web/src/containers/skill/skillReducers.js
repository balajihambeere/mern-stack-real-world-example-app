import * as actionTypes from './skillActionTypes';

const skillReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.FETCH_SKILLS_SUCCESS:
            return Object.assign({}, state, {
                skillsCollection: action.payload,
            });
        case actionTypes.ADD_SKILL_SUCCESS:
            return Object.assign({}, state, {
                skill: action.payload,
            });
        case actionTypes.UPDATE_SKILL_SUCCESS:
            return Object.assign({}, state, {
                skill: action.payload,
            });
        default:
            return state;
    }
};

export default skillReducer;