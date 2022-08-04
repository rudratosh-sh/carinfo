import axios from 'axios';
import config from './config';
const data = [];

const Communication = {
  getMethod(endpoint) {
    return axios.get(config.baseUrl + endpoint).then(response => {
      return response.data;
    })
    },
    postMethod(endpoint) {
        return axios.post(config.baseUrl + endpoint, data, {
            headers: config.headers
        }).then(response => { return response.data; })
    }

};
export default Communication;
