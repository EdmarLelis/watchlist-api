import express from 'express';
import {
  addToWatchlist,
  removeFromWatchlist,
  updateWatchlist,
} from '../controllers/watchlistController.js';
import { authMiddleeare } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleeare);

router.post('/', addToWatchlist);
router.delete('/:id', removeFromWatchlist);
router.put('/:id', updateWatchlist);

export default router;
