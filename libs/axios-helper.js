const axios = require('axios');

const baseURL= process.env.BASE_URL;
const axiosInstance = axios.create({
    baseURL,
    headers: {
        "Content-Type" : "application/json",
        Accept : "application/json, */*"
    },
});

const onRequest = (request) => {
    request.headers.Authorization = `Token token=${process.env.API_KEY}`;
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

module.exports = axiosInstance;
