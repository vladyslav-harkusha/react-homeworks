import {FC, useState} from "react";
import './App.css';
import {LeftBranch} from "./components/left-branch/LeftBranch.tsx";
import {RightBranch} from "./components/right-branch/RightBranch.tsx";
import {themes} from "./context/themesConstant.ts";
import {ThemeContext} from "./context/ThemeContext.tsx";

export const App: FC = () => {
    const [currentTheme, setCurrentTheme] = useState<string>(themes.light)

    console.log(currentTheme)
    return (
        <ThemeContext.Provider value={{
            theme: currentTheme,
            changeTheme: (newTheme: string) => {
                setCurrentTheme(newTheme);
            }
        }}>
            <div className={currentTheme}>
                <div className='text-center mb-10 bg-red-300 p-3 px-40 w-min m-auto'>App</div>
                <div className='flex justify-around'>
                    <LeftBranch/>
                    <RightBranch/>
                </div>
            </div>
        </ThemeContext.Provider>
    );
};
