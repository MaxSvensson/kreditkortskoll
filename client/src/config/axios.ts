import axios from 'axios';

// https://kreditkortskollapi.ew.r.appspot.com/

const instance = axios.create({
    baseURL: 'http://localhost:8080/',

})


export default instance;
