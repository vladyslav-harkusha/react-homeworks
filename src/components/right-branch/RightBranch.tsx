import {FC} from "react";
import {RightBranchA} from "./RightBranchA.tsx";
import {RightBranchB} from "./RightBranchB.tsx";

export const RightBranch:FC = () => {
    return (
        <div>
            <p className='text-center mb-5'>Right Branch</p>
            <div className='flex gap-5'>
                <RightBranchA/>
                <RightBranchB/>
            </div>
        </div>
    );
};