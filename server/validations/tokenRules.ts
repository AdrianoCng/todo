import { body } from 'express-validator';

export default {
  body: [body('refreshToken').not().isEmpty().isString()],
};
