import {FC, useState} from "react";
import './App.css';
import {LeftBranch} from "./components/left-branch/LeftBranch.tsx";
import {RightBranch} from "./components/right-branch/RightBranch.tsx";
import {initContextValue, MyContext} from "./context/MyContext.tsx";

export const App: FC = () => {
    const [counter, setCounter] = useState<number>(initContextValue.counterValue)

    return (
        <>
            <MyContext.Provider value={{
                counterValue: counter,
                increment: (num) => {
                    setCounter(++num);
                }
            }}>
                <div className='text-center mb-5'>App</div>
                <div className='flex justify-around'>
                    <LeftBranch/>
                    <RightBranch/>
                </div>
            </MyContext.Provider>
        </>
    );
};
