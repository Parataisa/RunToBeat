import express from 'express';
import { generatePlaylist } from '../controllers/playlistController.js';

const router = express.Router();

router.post('/generate', generatePlaylist);

export default router;