import {ITodo} from "./ITodo.ts";

export interface IResponseTodos {
    todos: ITodo[];
    total: string;
    skip: number;
    limit: number;
}