import jwt from 'jsonwebtoken';
import { convertDaysToMilliseconds } from './time.js';

const TOKEN_EXPIRATION_DAYS = Number(process.env.JWT_EXPIRES_IN) || 7;

const generateToken = (userId, res) => {
  const payload = { id: userId };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: `${TOKEN_EXPIRATION_DAYS}d`,
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: convertDaysToMilliseconds(TOKEN_EXPIRATION_DAYS),
  });
  return token;
};

export { generateToken };
