import axios from 'axios';
import {ICar} from "../models/ICar.ts";
import {INewCarFormProps} from "../components/new-car-form/NewCarForm.tsx";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: { 'Content-Type': 'application/json' },
});

export const carsService = {
    getAllCars: async (): Promise<ICar[]> => {
        const response = await axiosInstance.get<ICar[]>('/cars');
        return response.data;
    },
    postCar: async (newCar: INewCarFormProps): Promise<ICar> => {
        const response = await axiosInstance.post('/cars', newCar);
        return response.data;
    }
};