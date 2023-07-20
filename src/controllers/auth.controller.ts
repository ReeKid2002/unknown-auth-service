import { Request, Response } from 'express';
import { authService } from '../services';
import { jwtUtil, passwordUtil } from '../utils';

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
        console.log(error);
    }
};

export default {
    signUp,
};