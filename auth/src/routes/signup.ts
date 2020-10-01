import express, { Response, Request, NextFunction } from 'express';
import { body } from 'express-validator';
import { validateRequest, BadRequestError } from '@thticket/common';
import jwt from 'jsonwebtoken';

import { User } from '../models/user';

const router = express.Router();

router.post(
  '/api/users/signup',
  [
    body('name').not().isEmpty().withMessage('Name must be defined!'),
    body('email').isEmail().withMessage('Email must be valid!'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters!'),
  ],
  validateRequest,
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body;
    const exsistingUser = await User.findOne({ email });
    if (exsistingUser) {
      throw new BadRequestError('Email is use!');
    }
    const userCreated = User.build({ name, email, password });
    await userCreated.save();

    //Create jwt
    const token = jwt.sign(
      {
        id: userCreated.id,
        email: userCreated.email,
      },
      'sdsdds'
    );

    //store jwt in cookie session
    req.session = {
      jwt: token,
    };
    res.status(201).send(userCreated);
  }
);

export { router as signupRouter };
