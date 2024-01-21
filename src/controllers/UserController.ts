import express from "express";

export const loginUser = async (
    req: express.Request,
    res: express.Response
  ) => {
    console.log(req.body.userData);
    res.send('POST request to the login');
  }