
import express from 'express'
import { postRoleController , getRoleController,getRoleDeleteController} from '../controllers/roleController';


//route object
const router = express.Router();

//route 
router.post("/roles", postRoleController)
router.get("/roles", getRoleController)
router.delete("/role-delete/:id", getRoleDeleteController)

module.exports = router;