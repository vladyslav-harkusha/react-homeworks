import {FC} from "react";
import {ITodo} from "../../models/ITodo.ts";
import styles from './TodoComponent.module.css';

type PropsType = {
  todo: ITodo;
};

export const TodoComponent: FC<PropsType> = ({ todo }) => {
    const { title, completed } = todo;

    return (
        <li className={styles.todo}>
            <h2 className={styles.todo__title}>{title}</h2>
            <p className={completed ? styles.todo__status : styles.todo__status + ' ' + styles.todo__statusUncompleted}>
                {completed ? 'Completed' : 'Not completed'}
            </p>
        </li>
    );
};