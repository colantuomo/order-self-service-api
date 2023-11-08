import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


export function authWithJWT(req: Request, res: Response, next: NextFunction) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  jwt.verify(token, process.env.JWT_PRIVATE_KEY!, (err: any, decodedToken: any) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    req.headers['user-document'] = decodedToken?.cpf;

    return next();
  });
}
