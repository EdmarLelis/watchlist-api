import express from 'express';
import { authMiddleare } from '../middlewares/authMiddleware.js';
import { validateRequest } from '../middlewares/validateRequest.js';
import {
  createMovieSchema,
  updateMovieSchema,
} from '../validators/movieValidators.js';
import {
  createMovie,
  deleteMovie,
  updateMovie,
} from '../controllers/movieController.js';

const router = express.Router();

router.use(authMiddleare);

router.post('/', validateRequest(createMovieSchema), createMovie);
router.put('/:id', validateRequest(updateMovieSchema), updateMovie);
router.delete('/:id', deleteMovie);

export default router;
