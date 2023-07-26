import axios from 'axios';

export default axios.create({
    baseURL: 'https://searchapi.samsung.com/v6/front/b2c'
});