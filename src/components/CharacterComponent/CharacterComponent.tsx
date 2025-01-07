import { FC } from "react";
import {ISimpson} from "../../models/ISimpson.ts";

type PropsType = {
    simpson: ISimpson;
}

export const CharacterComponent: FC<PropsType> = ({ simpson }) => {
    const { name, surname, age, info, photo } = simpson;

    return (
        <li className='flex gap-2 flex-col content-center text-center bg-amber-100 p-3'>
            <h2 className='text-3xl font-semibold'>{name + ' ' + surname}</h2>
            <h3 className='text-2xl'>{age} years old</h3>
            <img className='h-80 mt-10 mb-5' src={photo} alt={name}/>
            <p className='max-w-60'>{info}</p>
        </li>
    );
};