import express from "express";
const router = express.Router();
import UserController from "../controllers/UserController.js";

// Test API || GET
router.get('/test', (req,res)=>{
    res.status(200).json({status:true,message:"Testing API"})
});

// Display All User || GET
router.get('/display', UserController.UserDisplay);

// Search All User || GET
router.get('/search/:id', UserController.UserSearch);

// Search All User || GET
router.delete('/delete/:id', UserController.UserDelete);
// Search All User || GET
router.put('/update/:id', UserController.UserUpdate);

// Create User || POST
router.post('/register', UserController.UserRegister);


//Login User || POST
 router.post('/login', UserController.UserLogin);


export default router;