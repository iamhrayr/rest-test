import axios from 'axios';

export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const ADD_POST = 'ADD_POST';

export function getPosts(){
  return dispatch => {
    axios.get('http://localhost:3000/api/posts', {
      headers: {
        'Authorization': `${localStorage.getItem('token')}`
      }
    }).then(res => {
      dispatch({
        type: GET_POSTS_SUCCESS,
        payload: res.data
      })
    })
  }
}

export function addPost(postDetails){
  return dispatch => {
    axios.post('http://localhost:3000/api/posts', {
      ...postDetails,
      userId: 'test'
    }, {
      headers: {
        'Authorization': `${localStorage.getItem('token')}`
      }
    })
  }
}
