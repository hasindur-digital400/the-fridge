import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://thefridge-api.karapincha.io/fridge/',
});

export default instance;
