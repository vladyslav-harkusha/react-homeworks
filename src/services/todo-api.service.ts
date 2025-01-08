import {IResponseTodos} from "../models/IResponseTodos.ts";

const baseUrl = 'https://dummyjson.com/todos';

export const getTodos = async (): Promise<IResponseTodos> => {
    const response = await fetch(baseUrl);

    return response.json();
}