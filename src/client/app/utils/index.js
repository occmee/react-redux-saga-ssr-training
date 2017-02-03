import {ActionTypes} from '../constants';

let token = _getItem('authToken');
let userType = _getItem('userType');

export function getToken() {
  token = token || _getItem('authToken');
  return token;
}

export function setToken(token) {
  token = token;
  _setItem('authToken', token);
}

export function setUserType(userType) {
  userType = userType;
  _setItem('userType', userType);
}

export function reset() {
  token = null;
  userType = null;
  _removeItem('authToken');
  _removeItem('userType');
}

export function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

function _getItem(key) {
  if (typeof(window.localStorage) !== 'undefined') {
    return window.localStorage.getItem(key);
  } else {
    return '';
  }
}

function _setItem(key, val) {
  if (typeof(window.localStorage) !== 'undefined') {
    window.localStorage.setItem(key, val);
  }
}

function _removeItem(key) {
  if (typeof(window.localStorage) !== 'undefined') {
    return window.localStorage.removeItem(key);
  }
}