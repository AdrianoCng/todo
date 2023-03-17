import { body, param } from 'express-validator';

export default {
  body: [
    body('title')
      .isString()
      .notEmpty()
      .customSanitizer((value) => value?.replace(/\s+/g, ' ').trim()),
    body('completed').optional().isBoolean(),
  ],

  id: [param('id').isInt()],
};
