import express from "express";
import mongoose from "mongoose";
import { config } from "./config/config";

const server = express();

mongoose
    .connect(config.db.url, { retryWrites: true, w: 'majority'})
    .then(() => {
        console.log('Connected to MongoDB.');
    })
    .catch((error) => {
        console.log('Unable to connect: ')
        console.log(error);
    });
