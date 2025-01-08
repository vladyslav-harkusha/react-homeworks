import {ITodo} from "../models/ITodo.ts";

const baseUrl = 'https://jsonplaceholder.typicode.com/todos';

export const getTodos = async (): Promise<ITodo[]> => {
    const response = await fetch(baseUrl);

    return response.json();
}