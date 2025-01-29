import {FC} from "react";
import './Loader.css';

export const Loader: FC = () => {
    return (
        <div className='cssload-loader'>
            <div className='cssload-inner cssload-one'></div>
            <div className='cssload-inner cssload-two'></div>
            <div className='cssload-inner cssload-three'></div>
        </div>
    );
};