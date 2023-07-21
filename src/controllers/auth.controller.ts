import { Request, Response } from 'express';
import { authService } from '../services';
import { jwtUtil, passwordUtil } from '../utils';
import { User } from '@prisma/client';

const signUp = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await passwordUtil.generateHash(password);
    const newUser = await authService.signUp(name, email, hashedPassword);
    const payload = await jwtUtil.signToken({ id: newUser.id, email, name });
    res.status(201).json({
      message: 'User created successfully',
      payload,
    });
  } catch (error) {
    if(error instanceof Error) 
      res.status(500).json({ error: error.message });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await authService.login(email);

    if(!user) {
      res.status(401).json({ message: 'User not found' });
      return;
    }

    const isPasswordValid = await passwordUtil.compareHash(password, user.password);
    if(!isPasswordValid) {
      res.status(401).json({ message: 'Invalid password' });
      return;
    }

    const payload = await jwtUtil.signToken({ id: user.id, email, name: user.name });
    res.status(200).json({
      message: 'User logged in successfully',
      payload,
    });
  } catch (error) {
    if(error instanceof Error) 
      res.status(500).json({ error: error.message });
  }
};

const validateToken = async (req: Request, res: Response) => {
  try {
    const { token } = req.body;

    const payload = await jwtUtil.decodeToken(token) as User;
    if(!payload) {
      res.status(401).json({ message: 'Invalid token' });
      return;
    }

    const user = await authService.validate(payload.id, payload.email);
    if(!user) {
      res.status(401).json({ message: 'Invalid token' });
      return;
    }

    const newToken = await jwtUtil.signToken({ id: user.id, email: user.email, name: user.name });
    res.status(200).json({
      message: 'Token validated successfully',
      payload: newToken,
    });
  } catch (error) {
    if(error instanceof Error) 
      res.status(500).json({ error: error.message });
  }
};

const getUserData = async (req: Request, res: Response) => {
  try {
    const { token } = req.params;
    console.log(token);
    const decodedToken = jwtUtil.decodeToken(token) as User;
    if(!decodedToken) {
      res.status(401).json({ message: 'Invalid token' });
      return;
    }

    const user = await authService.getUserData(decodedToken.id, decodedToken.email);
    if(!user) {
      res.status(401).json({ message: 'Invalid token' });
      return;
    }

    res.status(200).json({
      message: 'User data retrieved successfully',
      payload: user,
    });
  } catch (error) {
    if(error instanceof Error)
      res.status(500).json({ error: error.message });
  }
};

export default {
  signUp,
  login,
  validateToken,
  getUserData,
};