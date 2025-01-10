import {FC} from "react";
import {CartsList} from "../../components/carts-list/CartsList.tsx";

export const CartsPage: FC = () => {
    return (
        <div className='w-full bg-green-200'>
            <CartsList />
        </div>
    );
};