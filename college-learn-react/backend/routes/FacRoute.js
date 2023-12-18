import express from "express";
const router = express.Router();
import FacController from "../controllers/FacController.js";

// Display All Fac || GET
 router.get('/fdisplay', FacController.FacDisplay);

// Create User || POST
router.post('/fregister', FacController.FacRegister);

//Login User || POST
 router.post('/flogin', FacController.FacLogin);


export default router;