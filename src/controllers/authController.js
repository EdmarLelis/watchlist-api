import { prisma } from '../config/db.js';
import bcrypt from 'bcryptjs';

import { generateToken } from '../utils/generateToken.js';

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await prisma.user.findUnique({
    where: { email: email },
  });

  if (userExists) {
    res.status(400).json({ error: 'A user with this email already exists' });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const token = generateToken(user.id, res);

  res.status(201).json({
    status: 'Success',
    data: {
      user: {
        id: user.id,
        name: name,
        email: email,
      },
      token,
    },
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password!' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({ error: 'Invalid email or password!' });
  }

  const token = generateToken(user.id, res);

  res.status(200).json({
    status: 'Success',
    data: {
      user: {
        id: user.id,
        name: user.name,
        email: email,
      },
      token,
    },
  });
};

const logout = async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({
    status: 'Seccess',
    message: 'Logged out successfully',
  });
};

export { register, login, logout };
