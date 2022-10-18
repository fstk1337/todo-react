import express from "express";
import http from 'http';
import mongoose from "mongoose";
import { config } from "./config/config";
import todoRoutes from './routes/Todo';

const server = express();

mongoose
    .connect(config.db.url, { retryWrites: true, w: 'majority'})
    .then(() => {
        console.log('Connected to MongoDB.');
        startServer();
    })
    .catch((error) => {
        console.log('Unable to connect: ')
        console.log(error);
    });

const startServer = () => {
    server.use((request, response, next) => {
        console.log(`Request, method: ${request.method}, URL: ${request.url}`);
        response.on('finish', () => {
            console.log(`Response, status: ${response.statusCode}: ${response.statusMessage}`);
        });
        next();
    });

    server.use((request, response, next) => {
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS, PATCH');
        response.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
        next();
    });

    server.use(express.urlencoded({ extended: true }));
    server.use(express.json());

    server.use('/api/todos', todoRoutes);

    server.get('/health', (request, response, next) => {
        return response.status(200).json({ status: 'alive' });
    });

    server.use((request, response, next) => {
        const error = new Error('Endpoint not found');
        console.log(error);
        return response.status(404).json({ message: error.message });
    });

    http.createServer(server).listen(config.server.port, () => {
        console.log(`Server is running on port ${config.server.port}`);
    });
};