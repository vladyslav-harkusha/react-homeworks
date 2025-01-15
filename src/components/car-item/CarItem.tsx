import {FC} from "react";
import {ICar} from "../../models/ICar.ts";

type Props = {
  car: ICar;
};

export const CarItem: FC<Props> = ({ car }) => {
    const { id, price, year, brand } = car;

    return (
        <li className='text-center bg-green-100'>
            <h2 className='text-2xl'>{id}: {brand} - {year} year</h2>
            <p className='font-bold mb-4'> Price: {price} $</p>
        </li>
    );
};