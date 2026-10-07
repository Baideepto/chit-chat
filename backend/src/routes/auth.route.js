import express from "express";
import {signup,login,logout,updateProfile} from "../controllers/auth.controller.js";
const router = express.Router();
import {protectRoute} from "../middleware/auth.middleware.js";
import { arcjectProtection } from "../middleware/arcjet.middleware.js";

router.use(arcjectProtection);


router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.put("/update-profile",protectRoute, updateProfile);

router.get("/check-auth",protectRoute,(req,res)=>{
    res.status(200).json({message:"User is authenticated",user:req.user});
});

export default router;