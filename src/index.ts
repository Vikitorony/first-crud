import * as express from 'express';
import { Request, Response, Application } from 'express';
import { database } from './lib/database';
import { User } from './app/models/user';
import { Group } from './app/models/group';
import * as userController from './app/controllers/user';
import * as groupController from './app/controllers/group';


const app: Application = express();
app.use(express.json());
const { PORT = 3000 } = process.env;

app.get('/', async (req: Request, res: Response) => {
  res.json({
    message: 'hello world',
  });
});

// USER
app.get('/user', userController.index);             // index
app.get('/user/:id', userController.show);          // show
app.post('/user', userController.create);           // create
app.put('/user/:id', userController.update);        // update
app.delete('/user/:id', userController.destroy);    // delete

//GROUP
app.get('/group', groupController.index);           // index
app.get('/group/:id', groupController.show);        // show
app.post('/group', groupController.create);         // create
app.put('/group/:id', groupController.update);      // update
app.delete('/group/:id', groupController.destroy);  // delete


app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});