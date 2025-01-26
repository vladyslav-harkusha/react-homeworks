import {FC} from "react";
import {LeftBranchA} from "./LeftBranchA.tsx";
import {LeftBranchB} from "./LeftBranchB.tsx";


export const LeftBranch: FC = () => {
    return (
        <div>
            <p className='text-center mb-5'>Left Branch</p>
            <div className='flex gap-5'>
                <LeftBranchA/>
                <LeftBranchB/>
            </div>
        </div>
    );
};