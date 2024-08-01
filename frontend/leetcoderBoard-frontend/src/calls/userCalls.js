// const {axiosInstance} = require('./index')
import { axiosInstance } from './index';

export const registerUser = async (user) => {
    try {
        const response = await axiosInstance.post('api/users/register', user);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export const loginUser = async (user) => {
    try {
        const response = await axiosInstance.post('api/users/login', user);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}