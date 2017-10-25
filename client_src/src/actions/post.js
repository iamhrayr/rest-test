import axios from 'axios';

export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const ADD_POST = 'ADD_POST';

export function getPosts(){
  return dispatch => {
    axios.get('http://localhost:3000/api/posts', {
      // headers: {
      //   'Authorization': `${localStorage.getItem('token')}`
      // }
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
<<<<<<< HEAD
    axios.post('http://localhost:3000/api/posts', {
=======
    return axios.post('http://localhost:3000/api/posts', {
>>>>>>> 664d70af0f8d663483d998527052c7a4fbfb6c52
      ...postDetails,
      userId: 'test'
    }, {
      // headers: {
      //   'Authorization': `${localStorage.getItem('token')}`
      // }
    })
  }
}
