import {SET_FILTER} from './actionTypes.js';
import {FilterTypes} from '../constants'

export default (state = FilterTypes.ALL, action) => {
    switch(action.type) {
        case SET_FILTER: {
            return action.data;
        }
        default:
            return state;
    }
}
