import {GET_POSTS_SUCCESS} from '../actions/post';

export function postReducer(state={}, action){
  switch (action.type) {
    case GET_POSTS_SUCCESS:
        return {...action.payload};
    default:
        return state;
  }
}
