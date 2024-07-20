import { User } from './user.model';

export type CreateUserBody = Pick<User, 'email' | 'name'>;
export type UpdateUserBody = Pick<User, 'name'>;
