/**
 * Server setup for the backend application.
 */

// Import required modules
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Request, Response, NextFunction } from 'express';
import sesamienRoutes from "./routes/sesamienRoutes";
import userRoutes from './routes/userRoutes';
import morgan from "morgan";
import { SESAMIENS } from "./mock-sesamien-list";


export const app = express(); // Create an instance of the Express application

app.use(morgan('dev'));

// Configuration CORS pour autoriser la communication avec le frontend
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));

// Middleware configurations
/**
 * Body parser middleware to handle JSON requests.
 * This will parse incoming request bodies in a middleware before your handlers,
 * available under the req.body property.
 */
app.use(bodyParser.json());

// Route pour obtenir tous les "sesamiens"
app.use("/api/sesamiens", sesamienRoutes);
console.log('Routes Sesamien attachées à /api');

app.use('/api/users', userRoutes);
 
/**
 * Middleware to handle errors and return appropriate response.
 * 
 * @param {Error} err - The error thrown.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The Express next middleware function.
 * @returns {void}
 */
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log("Middleware d'erreur, SESAMIENS:", SESAMIENS);
    console.error(err.stack);
    res.status(500).send('Quelque chose s\'est mal passé !');
});


const port = 5000; // Define the port on which the server will run
/**
 * Start the server and log the URL.
 */
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})