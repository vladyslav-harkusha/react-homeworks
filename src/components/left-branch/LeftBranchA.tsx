import {FC, useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";


export const LeftBranchA: FC = () => {
    const { counterValue, increment } = useContext(MyContext);

    return (
        <div>
            Left Branch A
            <button onClick={() => increment(counterValue)} className='block border-2 border-yellow-800'>
                increment
            </button>
        </div>
    );
};