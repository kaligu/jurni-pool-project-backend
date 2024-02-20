import express from 'express';
import http from 'http';
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression';
import cors from 'cors';
require("dotenv").config();
import UserRoutes from './src/routes/UserRoutes';

//invoke express
const app = express();

//config cors
const allowedOrigins = [
  'https://jur-ni.web.app',
  'http://localhost:5173',
];
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

//initialise compression ,cookieParser ,bodyParser
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

//--------------------Set Routes-----------------------------------------------

app.use('/api/user', UserRoutes);

//-----------------------------------------------------------------------------

//create server
const server= http.createServer(app);

//listen server
server.listen(parseInt(process.env.SERVER_PORT as string,10), () => {
    console.log(`Server running on http://localhost:${process.env.SERVER_PORT}/`);
})