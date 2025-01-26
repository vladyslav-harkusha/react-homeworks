import {FC, useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext.tsx";
import {themes} from "../../context/themesConstant.ts";

export const LeftBranchB2: FC = () => {
    const { changeTheme } = useContext(ThemeContext);

    return (
        <div>
            <div className='bg-blue-300 p-3 px-10'>Left-B2</div>
            <button onClick={() => changeTheme(themes.pink)} className='bg-pink-300 font-bold border-red-600 border-4 block m-auto p-3'>
                Set pink theme
            </button>
        </div>

    );
};