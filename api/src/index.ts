import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config({ path: __dirname + "/.env" })

import routes from './routes';

const app = express();
const PORT = process.env.SERVER_PORT;

mongoose.connect(`mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`, {
  useNewUrlParser: true
});

app.use(cors({
  origin: ['http://localhost']
}));

app.use(routes);

app.listen(PORT, () => {
  console.log(` * Server listening port ${PORT}`);
});

