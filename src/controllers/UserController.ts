import express from "express";
import { OAuth2Client } from 'google-auth-library';
require("dotenv").config();
import { mongooseInstance } from "../db/DBConnection";
import CredentialsModel from '../models/CredentialsModel';
import * as SchemaTypes from "../types/SchemaTypes";
import RespondDTO from "../dtos/RespondDTO";

export const loginUser = async (
  req: express.Request,
  res: express.Response
) => {
    const session = await mongooseInstance.startSession();  // Update the function call

  try {
    await session.withTransaction(async () => {
      const token = req.body.userData.credential;
      const clientId = process.env.GOOGLE_AUTH_CLIENT_ID;
      const client = new OAuth2Client(clientId);

      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: clientId,
      });

      const payload = ticket.getPayload();

      if (payload && payload.email_verified) {
        // Token is valid, do something with the payload
        const credentialsModel = new CredentialsModel({
          id: payload.sub,
          email: payload.email,
          name: payload.name,
          picture: payload.picture,
        });

        // Use `create` instead of `save` to insert a new document
        let user: SchemaTypes.ICredentials | null = await credentialsModel.save({ session });
        
        res.status(200).send(new RespondDTO(200, "User created successfully.",user));
      } else {
        console.error('Token is not valid');
        res.status(401).send('Unauthorized');
      }
    });
  } catch (error) {
    console.error(error);

    // Handle errors and rollback the transaction if necessary
    await session.abortTransaction();

    res.status(500).send(new RespondDTO(500, "Internal Server Error"));
  } finally {
    session.endSession(); // Close the session
  }
};
