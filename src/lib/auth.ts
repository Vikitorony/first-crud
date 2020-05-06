import { Request, Response, NextFunction } from 'express';
import { User } from "../app/models/user";
import { database } from "./database";
import * as jwt from "jsonwebtoken";
import * as jwtConfig from "../../config/jwt.json"

enum Method {
  get = 'GET',
  post = 'POST',
  put = 'PUT',
  destroy = 'DELETE'
}

interface AnonymousEndpoint {
  path: string;
  method: Method;
}

const anonymousEndpoints: Array<AnonymousEndpoint> = [
  {
    path: '/user',
    method: Method.post
  },
  {
    path: '/login',
    method: Method.post
  }
]

// sophisticated auth
const isAnonymousEndpoint = (req: Request): boolean => {
  const path = req.path;
  const method = req.method;
  for (let anonymousEndpoint of anonymousEndpoints) {
    if (anonymousEndpoint.path === path && anonymousEndpoint.method === method) {
      return true;
    }
  }
  return false;
}

// more sophisticated auth
/* 
const isAnonymousEndpoint = (req: Request): boolean => {
  return !!(anonymousEndpoints.find(anonymousEndpoint => (anonymousEndpoint.path === req.path && anonymousEndpoint.method === req.method)))
}
 */

export const authentication = async (req: Request, res: Response, next: NextFunction) => {
  if (isAnonymousEndpoint(req)) {
    return next();
  }
  try {
    const token: string = req.headers.authorization.split(' ')[1];
    const info = jwt.verify(token, jwtConfig.secret);
    const userId: number = info.userId;
    const user: User = await database('users').where({ id: userId }).first();
    res.locals.user = user;
    next();
  } catch (error) {
    res.sendStatus(401);
  }
};