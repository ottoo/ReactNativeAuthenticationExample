import fetchival from 'fetchival';

import apiConfig from './config';

const fetchApi = (endPoint, payload = {}, method = 'get', headers = {}) =>
  fetchival(`${apiConfig.url}${endPoint}`, {
    headers
  })[method.toLowerCase()](payload);

export default fetchApi;
