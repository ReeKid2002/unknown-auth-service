import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import { authRoute } from './src/routes';

dotenv.config();
const app: Express = express();

app.use(express.json());

app.use('/api/auth', authRoute);

const PORT = process.env.PORT || 5050;

app.get('/ping', (req: Request, res: Response) => {
  res.status(200).json({ message: 'pong' });
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});