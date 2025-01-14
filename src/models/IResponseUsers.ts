import {IUser} from "./IUser.ts";

export interface IResponseUsers {
    users: IUser[];
    total: number;
    skip: number;
    limit: number;
}