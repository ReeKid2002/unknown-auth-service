import express, { Express, Request, Response } from 'express';
import { authRoute } from './src/routes';

const app: Express = express();

app.use(express.json());

app.use('/api/auth', authRoute);

const PORT = 5050;

app.get('/', (req: Request, res: Response) => {
  res.send('HELLO');
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});