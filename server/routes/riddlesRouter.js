import {Router} from 'express';
import {getAllRiddles} from '../CTRL/RiddleCtrl.js';
import { config } from 'dotenv';
import { addRiddle,updateRiddle,getAllRiddles,deleteRiddle } from '../DAL/MNGDB_Crud.js';
config()

const router = Router();

router.get('/',getAllRiddles)
router.post('/addRiddle',addRiddle)
router.put('/updateRiddle',updateRiddle)
router.delete('/deleteRiddle',deleteRiddle)

export default router;
