import {createContext} from "react";

type MyContextType = {
    counterValue: number;
    increment: (num: number) => void;
}

export const initContextValue = {
    counterValue: 0,
    increment: (num: number) =>  {
        console.log(num);
    }
};

export const MyContext = createContext<MyContextType>(initContextValue);