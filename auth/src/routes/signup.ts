import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';
import { User } from '../models/user';
import { BadRequestError, validateRequest } from '@thticket/common';

const router = express.Router();
router.post(
  ' ',
  [
    body('email').isEmail().withMessage('Email must be valid!'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters!'),
    body('name').not().isEmpty().withMessage('Name must be defined!'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new BadRequestError('Email is use!');
    }
    const user = User.build({ name, email, password });
    await user.save();

    //create jwt
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_KEY!
    );
    //store jwt in cookie session
    req.session = {
      jwt: token,
    };
    res.status(201).send(user);
  }
);

export { router as signupRouter };
