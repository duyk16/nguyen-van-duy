import { buildSchema, modelOptions, plugin, prop } from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import mongoose, { Document, Model } from 'mongoose';
import { paginate } from '../paginate';
import { QueryResult } from '../paginate/paginate';

@modelOptions({
  schemaOptions: { collection: 'users', timestamps: true },
})
@plugin(paginate)
export class User extends TimeStamps {
  @prop({ type: String, required: true, trim: true })
  name: string;

  @prop({ type: String, required: true, trim: true, unique: true, lowercase: true })
  email: string;
}

export const UserSchema = buildSchema(User);

export interface IUserModel extends Model<IUserDoc> {
  paginate(
    filter: Record<string, any>,
    options: Record<string, any>,
  ): Promise<QueryResult>;
}
export interface IUserDoc extends User, Document {}

export const UserModel = mongoose.model<IUserDoc, IUserModel>('User', UserSchema as any);
