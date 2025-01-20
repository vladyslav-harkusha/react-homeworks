import {FC, useState} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {newCarValidator} from "../../validators/newCar.validator.ts";
import {carsService} from "../../services/api.cars.services.ts";

export interface INewCarFormProps {
    brand: string;
    price: number;
    year: number;
}

export const NewCarForm: FC = () => {
    const [isNewCarPosted, setIsNewCarPosted] = useState<boolean>(false);

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isValid },
    } = useForm<INewCarFormProps>({
        mode: "all",
        resolver: joiResolver(newCarValidator),
    });

    const handleSubmitCallback = async (formData: INewCarFormProps) => {
        if (!isValid) return;

        await carsService.postCar(formData);
        reset();
        setIsNewCarPosted(true);
    };

    if (isNewCarPosted) {
        return (
            <div className='mt-10 ml-10'>
                <h2 className='text-3xl font-bold text-green-700 bg-green-100'>Your car was posted</h2>
                <button onClick={() => setIsNewCarPosted(false)} className='border-2 w-24 p-2 bg-amber-500 font-bold text-amber-50 border-yellow-800'>
                    Create one more car
                </button>
            </div>

        );
    }

    return (
        <div className='mt-10 ml-10'>
            <h2 className='text-2xl mb-2'>Add new car:</h2>
            <form onSubmit={handleSubmit(handleSubmitCallback)} className='flex flex-col gap-5 p-5 bg-yellow-200 border-2 border-yellow-800 w-max'>
                <label>
                    <p className='inline-block'>Add brand:</p>
                    {errors.brand && <span className='text-red-600 font-bold'>{errors.brand.message}</span>}
                    <input type="text" {...register('brand')} className='border-2 border-black w-96 block'/>
                </label>

                <label>
                    <p className='inline-block'>Add price:</p>
                    {errors.price && <span className='text-red-600 font-bold'>{errors.price.message}</span>}
                    <input type="number" {...register('price')} className='border-2 border-black w-96 block'/>
                </label>

                <label>
                    <p className='inline-block'>Add year:</p>
                    {errors.year && <span className='text-red-600 font-bold'>{errors.year.message}</span>}
                    <input type="number" {...register('year')} className='border-2 border-black w-96 block'/>
                </label>

                <button disabled={!isValid} className='border-2 w-24 p-2 bg-amber-500 font-bold text-amber-50 border-yellow-800'>Save car</button>
            </form>
        </div>
    );
};