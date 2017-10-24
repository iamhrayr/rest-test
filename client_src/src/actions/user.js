import axios from 'axios';

export const GET_USER = 'GET_USER';

export function getUser(){

}

export function login(email, password){
  return dispatch => {
    return axios.post('http://localhost:3000/api/appusers/login', {
      email,
      password
    }).then(res => {
      localStorage.setItem('token', res.data.id);
      console.log(res.data.id)
    }).catch(err => {
      console.error(err);
    });
  }
}

export function signup(email, password){
  return dispatch => {
    return axios.post('http://localhost:3000/api/appusers/login', {
      email,
      password
    });
  }
}

export function signout(){
  return dispatch => {
    return axios.post(`http://localhost:3000/api/appusers/logout?access_token=${localStorage.getItem('token')}`, {
      headers: {
        'Authorization': `${localStorage.getItem('token')}`
      }
    });
  }
}
