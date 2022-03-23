import { auth } from "@config/auth";
import { IUserPayload } from "@modules/user/domain/models/IUserPayload";
import AppError from "@shared/errors/AppError";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export default function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;

    if (!token) {
        throw new AppError('Token not found');
    }

    try {
        const { id, name, avatar } = verify(token, auth.secret) as IUserPayload;

        req.user = {
            id,
            name,
            avatar,
        };
        
        next();
    } catch (error) {
        throw new AppError('Invalid Token');
    }
}