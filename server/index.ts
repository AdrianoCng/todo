import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';

import logger from './middlewares/logger';
import todosRouter from './routes/todos';

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use('/todos', todosRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`);
});
