import express from 'express';
import { addToWatchlist } from '../controllers/watchlistController.js';
import { authMiddleeare } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleeare);

router.post('/', addToWatchlist);

export default router;
