import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';

import logger from './middlewares/logger';

import todosRouter from './routes/todos';
import signupRouter from './routes/signup';
import loginRouter from './routes/login';
import tokenRouter from './routes/token';
import logoutRouter from './routes/logout';

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use('/api/v1/todos', todosRouter);

app.use('/api/v1/signup', signupRouter);

app.use('/api/v1/login', loginRouter);

app.use('/api/v1/token', tokenRouter);

app.use('/api/v1/logout', logoutRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`);
});
