import * as express from 'express';
import { Application } from 'express';
import { router as userRouter } from './app/routers/user';
import { router as groupRouter } from './app/routers/group';

const app: Application = express();
app.use(express.json());
const { PORT = 3000 } = process.env;

// root '/' is missing
/*
app.get('/', async (req: Request, res: Response) => {
  res.json({
    message: 'hello world',
  });
});
*/

app.use(userRouter);  // USER
app.use(groupRouter); //GROUP

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});