import {FC, useEffect, useState} from "react";
import {CarItem} from "../car-item/CarItem.tsx";
import {ICar} from "../../models/ICar.ts";
import {carsService} from "../../services/api.cars.services.ts";

export const CarsList: FC = () => {
    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {
        carsService.getAllCars().then(carsFromServer => setCars(carsFromServer));
    }, [])

    return (
        <ul>
            {cars.map(car => (
                <CarItem key={car.id} car={car} />
            ))}
        </ul>
    );
};