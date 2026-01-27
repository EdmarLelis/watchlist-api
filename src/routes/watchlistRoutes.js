import express from 'express';
import {
  addToWatchlist,
  removeFromWatchlist,
  updateWatchlist,
} from '../controllers/watchlistController.js';
import { authMiddleeare } from '../middleware/authMiddleware.js';
import { validateRequest } from '../middleware/validateRequest.js';
import {
  addToWatchlistSchema,
  updateWatchlistSchema,
} from '../validators/watchlistValidators.js';

const router = express.Router();

router.use(authMiddleeare);

router.post('/', validateRequest(addToWatchlistSchema), addToWatchlist);

router.delete('/:id', removeFromWatchlist);

router.put('/:id', validateRequest(updateWatchlistSchema), updateWatchlist);

export default router;
