import dotenv from 'dotenv';

dotenv.config();

const DB_USERNAME = process.env.DB_USERNAME || '';
const DB_PASSWORD = process.env.DB_PASSWORD || '';

const DB_URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@main.ivjilqa.mongodb.net/`;

const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 1337;

export const config = {
    db: {
        url: DB_URL
    },
    server: {
        port: SERVER_PORT
    }
};
