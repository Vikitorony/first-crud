import { User } from "../models/user";
import { database } from "../../lib/database";
import { Request, Response } from "express";
import * as loginSerializer from '../serializers/login';
import * as jwt from 'jsonwebtoken';
import * as jwtConfig from '../../../config/jwt.json';

// show action
export const create = async (req: Request, res: Response) => {
  try {
    const user: User = await database('users').select().where({
      email: req.body.email
    }).first();
    if (user) {
      const info = { userId: user.id }
      const token = jwt.sign({ userId: user.id }, jwtConfig.secret);
      res.json(loginSerializer.create(token, user));
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}