import {FC} from "react";
import {RightBranchA} from "./RightBranchA.tsx";
import {RightBranchB} from "./RightBranchB.tsx";

export const RightBranch:FC = () => {
    return (
        <div>
            <p className='text-center mb-10 bg-yellow-300 p-3 px-10'>Right Branch</p>
            <div className='flex gap-36'>
                <RightBranchA/>
                <RightBranchB/>
            </div>
        </div>
    );
};