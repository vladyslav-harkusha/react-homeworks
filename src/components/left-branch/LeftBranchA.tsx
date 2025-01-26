import {FC} from "react";
import {LeftBranchA1} from "./LeftBranchA1.tsx";
import {LeftBranchA2} from "./LeftBranchA2.tsx";

export const LeftBranchA: FC = () => {
    return (
        <div>
            <p className='text-center mb-10 bg-green-300 p-3 px-10'>Left Branch A</p>
            <div className='flex gap-10'>
                <LeftBranchA1/>
                <LeftBranchA2/>
            </div>
        </div>
    );
};