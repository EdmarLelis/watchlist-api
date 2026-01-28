import express from 'express';
import { authMiddleare } from '../middlewares/authMiddleware.js';
import { validateRequest } from '../middlewares/validateRequest.js';
import { createMovieSchema } from '../validators/movieValidators.js';
import { createMovie } from '../controllers/movieController.js';

const router = express.Router();

router.use(authMiddleare);

router.post('/', validateRequest(createMovieSchema), createMovie);

export default router;
