import 'babel-polyfill';
import fetch from 'isomorphic-fetch';
import {getToken} from '../utils';
import {filterError, handleError} from './errors';

function headers(withAuth) {
  if (withAuth) {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-AUTH-TOKEN': getToken()
    };
  }
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };
}

function process(method) {
  return method
    .then(filterError)
    .then(res => {
      if (!res.ok) {
        return res.json().then(err => {
          throw err;
        });
      }
      return res.json();
    })
    .catch(handleError)
  ;
}

export function get(url, withAuth = true) {
  const method = fetch(url, {
    method: 'GET',
    headers: headers(withAuth)
  });
  return process(method);
}

export function post(url, body, withAuth = true) {
  const method = fetch(url, {
    method: 'POST',
    headers: headers(withAuth),
    body: JSON.stringify(body),
  });
  return process(method);
}

export function put(url, body, withAuth = true) {
  const method = fetch(url, {
    method: 'PUT',
    headers: headers(withAuth),
    body: JSON.stringify(body)
  });
  return process(method);
}

export function patch(url) {
  const method = fetch(url, {
    method: 'PATCH',
    headers: {'X-AUTH-TOKEN': getToken()}
  });
  return process(method);
}
