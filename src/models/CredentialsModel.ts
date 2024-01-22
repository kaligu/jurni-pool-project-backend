import { Document, Schema, model } from "mongoose";
import * as SchemaType from "../types/SchemaTypes";

const credentialsSchema = new Schema<SchemaType.ICredentials>({
    id: { type: String, required: true },
    email: { type: String, required: true },
    name: { type: String, required: true },
    picture: { type: String, required: true }
})

const CredentialsModel = model("credentials", credentialsSchema); //table name User
export default CredentialsModel;