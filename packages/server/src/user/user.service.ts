import { omit } from 'lodash';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { nanoid } from 'nanoid';
import Ctx from 'src/types/context.type';
import {
  User,
  UserDocument,
  CreateUserInput,
  ConfirmUserInput,
  LoginInput,
} from './user.schema';
import { signJwt } from '../utils/jwt.utils';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(input: CreateUserInput) {
    const confirmToken = nanoid(32);
    const user = await this.userModel.create({ ...input, confirmToken });
    user.active = true;
    user.save();

    return user;
  }

  async confirmUser({ email, confirmToken }: ConfirmUserInput) {
    // find our user
    const user = await this.userModel.findOne({ email });
    // Check if the user exists
    // Check if the confirmation tokens === confirmToken
    if (!user || confirmToken !== user.confirmToken) {
      throw new Error('Email or confirm token are incorrect');
    }
    console.log('user', user);
    // change active to true
    user.active = true;
    // save the user
    await user.save();

    // return user
    return user;
  }

  async login({ email, password }: LoginInput, context: Ctx) {
    // Find our user
    const user = await this.userModel
      .findOne({ email })
      .select('-__v -confirmToken');
    // Check that user exists
    // Compare input password with the user's hashed password
    if (!user || !(await user.comparePassword(password))) {
      throw new Error('Invalid email or password');
    }

    // Check that the user is active
    if (!user.active) {
      throw new Error('Please confirm your email address');
    }

    // Create a JWT
    const jwt = signJwt(omit(user.toJSON(), ['password', 'active']));
    // Set the JWT in a cookie
    const cookie = `token=${jwt}; HttpOnly; Path=/; Max-Age=${
      1000 * 60 * 60 * 24 * 7
    }`;
    context.res.setHeader('Set-Cookie', cookie);

    // return the user
    return user;
  }

  async logout(context) {
    const cookie = `token="; HttpOnly; Path=/; Max-Age=0`;

    context.res.setHeader('Set-Cookie', cookie);
    return null;
  }
}
