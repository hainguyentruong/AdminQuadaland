import axios from 'axios';
import queryString from 'query-string';
import { useHistory } from "react-router-dom";

const axiosadmin = axios.create({
    baseURL: `http://123.19.51.38:3000/api/v1`,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});

axiosadmin.interceptors.request.use(async (config) => {
    // Handle token here ...
    return config;
});

axiosadmin.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    // Handle errors
    if (error.response && error.response.data && error.response.data.message == 'Unauthorized') {
        localStorage.removeItem('token');
        delete axiosadmin.defaults.headers.common["Authorization"];
        window.location.href = "/";
    }
    // throw error.response.data.message;
    throw error.message
    // return Promise.reject(error);

});

export default axiosadmin;