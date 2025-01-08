import {FC, useEffect, useState} from "react";
import {ITodo} from "../../models/ITodo.ts";
import {TodoComponent} from "../todo-component/TodoComponent.tsx";
import {getTodos} from "../../services/todo-api.service.ts";
import styles from './TodosComponent.module.css';

export const TodosComponent: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const getTodosFromServer = async () => {
            const todosFromServer = await getTodos();
            setTodos(todosFromServer);
        }

        getTodosFromServer();
    }, []);

    return (
        <ul className={styles.todos_list}>
            {todos.map(todo => (
                <TodoComponent key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};