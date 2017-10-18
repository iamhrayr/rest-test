import {GET_USER} from '../actions/user';

const initialState = {};

export function userReducer(state = initialState, action){
  switch (action.type) {
    case GET_USER:
        return {...action.user};
    default:
        return state;
  }
}
