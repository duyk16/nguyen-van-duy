import Joi from 'joi';
import { objectId } from '../validate';
import { CreateUserBody } from './user.interfaces';

const createUserBody: Record<keyof CreateUserBody, any> = {
  email: Joi.string().required().email(),
  name: Joi.string().required().max(50),
};

export const createUser = {
  body: Joi.object().keys(createUserBody),
};

export const getUsers = {
  query: Joi.object().keys({
    email: Joi.string().email(),
    name: Joi.string(),
    sortBy: Joi.string(),
    projectBy: Joi.string(),
    limit: Joi.number().integer().max(50),
    page: Joi.number().integer(),
  }),
};

export const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

export const updateUser = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
    })
    .min(1),
};

export const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};
