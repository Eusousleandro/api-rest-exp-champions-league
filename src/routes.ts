import { Router } from 'express';
import * as playersControllers from './controllers/players-controller'

const router = Router()

router.get('/players',        playersControllers.getListPlayer);
router.get('/players/:id',    playersControllers.getListById);
router.post('/players',        playersControllers.createPlayer);
router.put('/players/:id',    playersControllers.updatePlayers);
router.delete('/players/:id', playersControllers.deletePlayers);
export default router;