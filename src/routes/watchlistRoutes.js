import express from 'express';
import {
  addToWatchlist,
  removeFromWatchlist,
  updateWatchlist,
} from '../controllers/watchlistController.js';
import { authMiddleare } from '../middlewares/authMiddleware.js';
import { validateRequest } from '../middlewares/validateRequest.js';
import {
  addToWatchlistSchema,
  updateWatchlistSchema,
} from '../validators/watchlistValidators.js';

const router = express.Router();

router.use(authMiddleare);

router.post('/', validateRequest(addToWatchlistSchema), addToWatchlist);

router.delete('/:id', removeFromWatchlist);

router.put('/:id', validateRequest(updateWatchlistSchema), updateWatchlist);

export default router;
