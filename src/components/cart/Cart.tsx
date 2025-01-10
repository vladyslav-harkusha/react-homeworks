import {FC} from "react";
import {ICart} from "../../models/ICart.ts";

type PropsType = {
    cart: ICart;
}

export const Cart: FC<PropsType> = ({ cart }) => {
    const { products, id } = cart;

    return (
        <li className='p-10'>
            <h2 className='text-3xl mb-10'>Cart ID - {id}</h2>
            <p className='text-2xl mb-5'>Products:</p>
            <ul className='flex gap-5 flex-wrap'>
                {products.map(({ title, price, thumbnail, id }) => (
                    <li className='mb-10 bg-amber-50 w-max p-5' key={id}>
                        <h3 className='font-bold'>{title}</h3>
                        <p className='text-3xl font-bold'>{price}</p>
                        <img src={thumbnail} alt={title}/>
                    </li>
                ))}
            </ul>
        </li>
    );
};