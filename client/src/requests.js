import axios from 'axios';

const API_URL = 'http://localhost:4000/urls'

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