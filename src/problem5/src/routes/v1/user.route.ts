import express from 'express';
import { userController, userValidation } from '../../modules/user';
import { validate } from '../../modules/validate';

const router = express.Router();

router.post('/', validate(userValidation.createUser), userController.createUser);
router.get('/', validate(userValidation.getUsers), userController.getUsers);
router.get('/:userId', validate(userValidation.getUser), userController.getUser);
router.put('/:userId', validate(userValidation.updateUser), userController.updateUser);
router.delete('/:userId', validate(userValidation.deleteUser), userController.deleteUser);

export default router;
