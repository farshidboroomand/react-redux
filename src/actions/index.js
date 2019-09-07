import axios from 'axios';

export function getBooks () {
  const request = axios.get('api/books')
    .then(response => response.data);

    return {
    type: 'GET_BOOKS',
    payload: request
  }
}
