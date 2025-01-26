import {FC, useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";

export const RightBranchB:FC = () => {
    const { counterValue } = useContext(MyContext);

    return (
        <div>
            Right Branch B
            <p>value is {counterValue}</p>
        </div>
    );
};