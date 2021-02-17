import axios from 'axios';

import { API_URL } from './config'

export const addURLGetStub = async (url) => {
  const {data: {id}} = await axios.post(
    `${API_URL}`,
    {
      url
    }
  );
  return id;
}

export const getLongURL = async (stub) => {
  const {data: {url}} = await axios.get(
    `${API_URL}`,
    {
      params: {
        id: stub
      }
    }
  );
  return url;
}