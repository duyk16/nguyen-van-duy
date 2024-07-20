import httpStatus from 'http-status';
import { Types } from 'mongoose';
import ApiError from '../errors/ApiError';
import { IOptions, QueryResult } from '../paginate/paginate';
import { CreateUserBody, UpdateUserBody } from './user.interfaces';
import { IUserDoc, UserModel } from './user.model';

/**
 * Create a new user
 * @param {CreateUserBody} userBody
 * @returns {Promise<IUserDoc>}
 */
export const createUser = async (userBody: CreateUserBody): Promise<IUserDoc> => {
  const found = await UserModel.findOne({ email: userBody.email });

  if (found) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }

  return UserModel.create(userBody);
};

/**
 * Get user by id
 * @param {Types.ObjectId} id
 * @returns {Promise<IUserDoc | null>}
 */
export const getUserById = async (id: Types.ObjectId): Promise<IUserDoc | null> =>
  UserModel.findById(id);

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @returns {Promise<QueryResult>}
 */
export const queryUsers = async (
  filter: Record<string, any>,
  options: IOptions,
): Promise<QueryResult> => {
  const users = await UserModel.paginate(filter, options);
  return users;
};

/**
 * Update user by id
 * @param {mongoose.Types.ObjectId} userId
 * @param {UpdateUserBody} updateBody
 * @returns {Promise<IUserDoc | null>}
 */
export const updateUserById = async (
  userId: Types.ObjectId,
  updateBody: UpdateUserBody,
): Promise<IUserDoc | null> => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  Object.assign(user, updateBody);
  await user.save();
  return user;
};

/**
 * Delete user by id
 * @param {mongoose.Types.ObjectId} userId
 * @returns {Promise<IUserDoc | null>}
 */
export const deleteUserById = async (
  userId: Types.ObjectId,
): Promise<IUserDoc | null> => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await user.deleteOne();
  return user;
};
