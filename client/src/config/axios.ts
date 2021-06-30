import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://kreditkortskollapi.ew.r.appspot.com/',

})


export default instance;
