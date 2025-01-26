import {FC, useContext} from "react";
import {themes} from "../../context/themesConstant.ts";
import {ThemeContext} from "../../context/ThemeContext.tsx";



export const LeftBranchA1: FC = () => {
    const { changeTheme } = useContext(ThemeContext);

    return (
        <div>
            <div className='bg-blue-300 p-3 px-10'>Left-A1</div>
            <button onClick={() => changeTheme(themes.blue)} className='bg-blue-500 font-bold border-red-600 border-4 block m-auto p-3'>
                Set blue theme
            </button>
        </div>
    );
};