import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { db } from "./db.js";
import bodyParser from 'body-parser';
import { ErrorHandler } from './erroTracker/login.error.js';
import { sessionMiddleware } from './services/login.services.js';

import { AuthRouter } from './middleware/login.middleware.js';
import { newUserRouter } from './middleware/newuser.middleware.js';
import { newProductRouter } from './middleware/newproduct.middleware.js';
import { AllUsersRouter } from './middleware/getallusers.middleware.js';

dotenv.config();
const app = express();
app.use(sessionMiddleware);
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    methods: ["POST", "GET"],
    credentials: true
}));


app.use(AuthRouter);
app.use(newUserRouter);
app.use(newProductRouter);
app.use(AllUsersRouter);

app.use(ErrorHandler);

const port = process.env.PORT_NUMBER
db.query(`
SELECT 1
`)
    .then(data => {
        app.listen(port, () => {
            console.log(`server listening at http://localhost:${port}`);
        })
    })
    .catch(err => console.log('db connection error\n' + err));

