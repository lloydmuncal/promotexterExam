import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
const port = process.env.PORT ;

app.use(express.json());

import Controller from '../Routes/controller';

app.use('/controller', Controller);



app.get('/', (req: Request, res: Response) => {
    res.send('Server is up and running!');
});


app.get("*", (req: Request, res: Response) => {
    res.status(404).json({ message: "404 NOT FOUND" });
});

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
