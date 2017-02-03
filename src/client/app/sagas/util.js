import {ActionTypes} from '../constants';

let token = window.localStorage.getItem('authToken');
let userType = window.localStorage.getItem('userType');

export function getToken() {
  token = token || window.localStorage.getItem('authToken');
  return token;
}

export function setToken(token) {
  token = token;
  window.localStorage.setItem('authToken', token);
}

export function setUserType(userType) {
  userType = userType;
  window.localStorage.setItem('userType', userType);
}

export function reset() {
  token = null;
  userType = null;
  window.localStorage.removeItem('authToken');
  window.localStorage.removeItem('userType');
}

export function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export const loading = {
  type: `${ActionTypes.TOGGLE_LOADING}`,
  payload: {
    loading: true,
  }
};

export const loaded = {
  type: `${ActionTypes.TOGGLE_LOADING}`,
  payload: {
    loading: false,
  }
};
