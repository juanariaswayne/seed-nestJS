import { Document } from 'mongoose';

export interface UserDocument extends Document {
    readonly name: string;
    readonly username: string;
    readonly email: string;
}
