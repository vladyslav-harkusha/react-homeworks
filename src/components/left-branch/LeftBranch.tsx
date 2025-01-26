import {FC} from "react";
import {LeftBranchA} from "./LeftBranchA.tsx";
import {LeftBranchB} from "./LeftBranchB.tsx";


export const LeftBranch: FC = () => {
    return (
        <div>
            <p className='text-center mb-10 bg-yellow-300 p-3 px-10'>Left Branch</p>
            <div className='flex gap-36'>
                <LeftBranchA/>
                <LeftBranchB/>
            </div>
        </div>
    );
};