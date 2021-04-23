import dotenv from 'dotenv';
import express, { Express } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config({ path: __dirname + "/.env" })

import routes from './routes';

const app = express();
const port = process.env.SERVER_PORT;

if (!port) {
  throw new Error(" -> Server port not specified!");
}

app.use(cors({
  origin: ['http://localhost']
}));

app.use(routes);

const connectToDatabase = (app: Express, port: string) => {
  console.log(" -> Trying to connect to database...");

  mongoose.connect(`mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`, {
    useNewUrlParser: true
  }).then(() => {
    app.listen(port, () => {
      console.log(` -> Server listening port ${port}`);
    });
  }).catch(() => {
    setTimeout(() => connectToDatabase(app, port), 5000);
  });
}

connectToDatabase(app, port);

