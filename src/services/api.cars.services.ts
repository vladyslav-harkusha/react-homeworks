import axios from 'axios';
import {IUser} from "../models/IUser.ts";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: { 'Content-Type': 'application/json' },
});

export const carsService = {
    getAllCars: async (): Promise<IUser[]> => {
        const response = await axiosInstance.get<IUser[]>('/cars');
        return response.data;
    },
};