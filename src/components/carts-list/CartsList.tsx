import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {cartService} from "../../services/api.service.ts";
import {ICart} from "../../models/ICart.ts";
import {Cart} from "../cart/Cart.tsx";

export const CartsList: FC = () => {
    const [carts, setCarts] = useState<ICart[]>([]);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const getUserCartsFromServer = async (userId: number) => {
                    const userCartsFromServer  = await cartService.getCartsByUserId(userId);
                    setCarts(userCartsFromServer.carts);
            }
            getUserCartsFromServer(Number(id));
        }
    }, [id]);

    if (carts.length < 1) {
        return <h2 className='text-3xl flex justify-center mt-10'>User {id} has no carts</h2>
    }

    return (
        <ul>
            {carts.map(cart => (
                <Cart key={cart.id} cart={cart} />
            ))}
        </ul>
    );
};