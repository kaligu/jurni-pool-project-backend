import express from "express";
import { OAuth2Client } from 'google-auth-library';
require("dotenv").config();

export const loginUser = async (
    req: express.Request,
    res: express.Response
) => {
    const token = req.body.userData.credential; // Assuming the JWT token is in req.body.userData.credential
    const clientId = process.env.GOOGLE_AUTH_CLIENT_ID; // Your Google Client ID

    const client = new OAuth2Client(clientId);

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: clientId,
        });


        const payload = ticket.getPayload();

        // Verify additional details if needed
        if (payload && payload.email_verified) {
            // Token is valid, do something with the payload
            console.log('Token is valid');
            console.log('User Email:', payload.email);
            console.log('User Name:', payload.name);
            console.log('User ID:', payload.sub);

            // Here you can handle the login logic, e.g., create a user session or return a JWT for your application
            res.send('Login successful');
        } else {
            console.error('Token is not valid');
            res.status(401).send('Unauthorized');
        }
    } catch (error) {
        console.error('Error verifying token:', error.message);
        res.status(500).send('Internal Server Error');
    }
}
