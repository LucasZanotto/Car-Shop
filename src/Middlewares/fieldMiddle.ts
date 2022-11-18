import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';

export default function loginMiddle(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  if (!isValidObjectId(id as string)) {
    return res.status(402).json({ message: 'Invalid mongo id' });
  }
  next();
}