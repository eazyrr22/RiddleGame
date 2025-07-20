import {Router} from 'express';
import getAllRiddles from './services/riddle_db_services.js';
const router = Router();

router.get('/getAllRiddles',getAllRiddles);

