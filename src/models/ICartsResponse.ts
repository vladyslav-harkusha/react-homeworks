import {ICart} from "./ICart.ts";

export interface ICartsResponse {
    carts: ICart[];
    total: number;
    skip: number;
    limit: number;
}