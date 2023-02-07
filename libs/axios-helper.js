import axios from 'axios';

const baseURL= "";
const axiosInstance = axios.create({
    baseURL,
    headers: {
        "Content-Type" : "application/json",
        Accept : "application/json, */*"
    },
});

const onRequest = (request) => {
    request.headers.Authorization = process.env.API_KEY;
    return request;
}

const onRequestError = (error) => {
    return Promise.reject(error);
}

const onResponse = (response) => {
    return response;
}

const onResponseError = (error) => {
    return Promise.reject(error);
}

axiosInstance.interceptors.request.use(onRequest, onRequestError);
axiosInstance.interceptors.response.use(onResponse, onResponseError);

export default axiosInstance;
