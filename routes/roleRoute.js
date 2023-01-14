
import express from 'express'
import { postRoleController , getRoleController} from '../controllers/roleController';


//route object
const router = express.Router();

//route 
router.post("/roles", postRoleController)
router.get("/roles", getRoleController)

module.exports = router;