import { ObjectID } from "typeorm"

declare global {
    namespace Express {
        interface Request{
            user: { 
                id: string;
                name: string;
                avatar: string;
            }
        }
    }
}