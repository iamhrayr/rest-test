import {auth, storageKey} from '../firebase';

export const GET_USER = 'GET_USER';

export function getUser(){
  return dispatch => {
    auth.onAuthStateChanged(user => {
      if (user) {
        localStorage.setItem(storageKey, user.uid);
        console.log(user.getToken());
      } else {
        localStorage.removeItem(storageKey);
      }
      dispatch({
        type: GET_USER,
        payload: user
      });
    })
  }
}

export function login(email, password){
  return dispatch => auth.signInWithEmailAndPassword(email, password);
}

export function signup(email, password){
  return dispatch => auth.createUserWithEmailAndPassword(email, password);
}

export function signout(){
  return dispatch => auth.signOut()
}
