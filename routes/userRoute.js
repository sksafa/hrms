
import express from 'express'
import { postUserController, getUserController } from '../controllers/userController';

//route object
const router = express.Router();

//route 
router.post("/users", postUserController)
router.get("/users", getUserController)


module.exports = router;