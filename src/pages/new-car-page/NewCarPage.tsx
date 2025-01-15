import {FC} from "react";
import {Link} from "react-router-dom";
import {NewCarForm} from "../../components/new-car-form/NewCarForm.tsx";

export const NewCarPage: FC = () => {
    return (
        <>
            <Link to={'/cars'} className='bg-red-300 inline-block p-1 border-red-800 border-2 my-2'>
                {'<-- Back to cars list'}
            </Link>
            <NewCarForm />
        </>
    );
};