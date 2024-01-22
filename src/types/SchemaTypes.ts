import {Document} from "mongoose";

export interface ICredentials extends Document {
    id: string,
    email: string,
    name: string,
    picture: string
}