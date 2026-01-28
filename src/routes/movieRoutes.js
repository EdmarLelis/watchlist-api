import express from 'express';
import { authMiddleare } from '../middlewares/authMiddleware.js';
import { validateRequest } from '../middlewares/validateRequest.js';
import {
  createMovieSchema,
  updateMovieSchema,
} from '../validators/movieValidators.js';
import { createMovie, updateMovie } from '../controllers/movieController.js';

const router = express.Router();

router.use(authMiddleare);

router.post('/', validateRequest(createMovieSchema), createMovie);
router.put('/:id', validateRequest(updateMovieSchema), updateMovie);

export default router;
