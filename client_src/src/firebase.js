import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyD8bImoVPcZygruCya8CDsS7fQ7P9LrU0Y",
  authDomain: "test-44c8c.firebaseapp.com",
  databaseURL: "https://test-44c8c.firebaseio.com",
  projectId: "test-44c8c",
  storageBucket: "test-44c8c.appspot.com",
  messagingSenderId: "834792468582"
};
firebase.initializeApp(config);

export const db = firebase.database();
export const auth = firebase.auth();
export const storageKey = 'AUTH_STORAGE_KEY';

export const isAuthenticated = () => {
  return !!auth.currentUser || !!localStorage.getItem(storageKey);
}
