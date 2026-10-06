import express from "express";
import {protectRoute} from "../middleware/auth.middleware.js";
import {getAllContacts} from "../controllers/message.controller.js";
import {sendMessage} from "../controllers/message.controller.js";
import {getMessageByUserId} from "../controllers/message.controller.js";
import {getChatPartners} from "../controllers/message.controller.js";
import { arcjectProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();
router.use(arcjectProtection,protectRoute);

router.get("/contacts",getAllContacts);
router.get("/chats",getChatPartners);
router.get("/:id",getMessageByUserId);
router.post("/send/:id",sendMessage);

router.get("/send",(req,res)=>{
    res.send("Send message endpoint");
})
export default router;