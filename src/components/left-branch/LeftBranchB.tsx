import {FC} from "react";
import {LeftBranchB1} from "./LeftBranchB1.tsx";
import {LeftBranchB2} from "./LeftBranchB2.tsx";


export const LeftBranchB: FC = () => {
    return (
        <div>
            <p className='text-center mb-10 bg-green-300 p-3 px-10'>Left Branch B</p>
            <div className='flex gap-10'>
                <LeftBranchB1/>
                <LeftBranchB2/>
            </div>
        </div>
    );
};