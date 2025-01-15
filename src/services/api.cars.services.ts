import axios from 'axios';
import {ICar} from "../models/ICar.ts";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: { 'Content-Type': 'application/json' },
});

export const carsService = {
    getAllCars: async (): Promise<ICar[]> => {
        const response = await axiosInstance.get<ICar[]>('/cars');
        return response.data;
    },
};