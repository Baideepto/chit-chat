import express from "express";
import {env} from "./lib/env.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import path from "path";
import {connectDB} from "./lib/db.js";

const app = express();
const __dirname = path.resolve();
const PORT = env.PORT || 3000;
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
if(env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));

    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend/dist/index.html"));
    });
}




app.listen(PORT,()=> {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});