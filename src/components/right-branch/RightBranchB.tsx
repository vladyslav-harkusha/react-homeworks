import {FC, useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext.tsx";
import {themes} from "../../context/themesConstant.ts";

export const RightBranchB:FC = () => {
    const { changeTheme } = useContext(ThemeContext);

    return (
        <div>
            <div className='bg-green-300 p-3 px-10'>Right Branch B</div>
            <button onClick={() => changeTheme(themes.yellow)} className='bg-yellow-200 font-bold border-red-600 border-4 block m-auto p-3'>
                Set yellow theme
            </button>
        </div>
    );
};