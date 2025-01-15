import {FC} from "react";
import {Link} from "react-router-dom";
import {CarsList} from "../../components/cars-list/CarsList.tsx";

export const CarsPage: FC = () => {
    return (
        <>
            <Link to={'/cars/add-new-car'} className='bg-yellow-300 inline-block p-2 border-yellow-800 border-2 my-2'>
                Add new car
            </Link>
            <CarsList />
        </>
    );
};