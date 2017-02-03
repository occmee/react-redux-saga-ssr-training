import 'babel-polyfill';
import * as _ from 'lodash';
import * as moment from 'moment';
import {get, post, put, patch} from './http';

const API_HOST = process.env.API_HOST;

function today() {
  return moment().format('YYYY-MM-DD');
}
function queryString(params) {
  const queries = _.map(params, (val, key) => {
    return `${key}=${val}`;
  });
  return queries.join('&');
}

export default {
  fetchLogin: (params) => {
    return post(`${API_HOST}/login`, {
      email: params.email,
      password: params.password
    }, false);
  },

  fetchLogout: (params) => {
    return get(`${API_HOST}/logout`);
  },
};
