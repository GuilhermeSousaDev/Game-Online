import { ObjectID } from "typeorm"

declare global {
    namespace Express {
        interface Request{
            user: { 
                id: ObjectID;
                name: string;
                avatar: string;
            }
        }
    }
}