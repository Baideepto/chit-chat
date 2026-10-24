import {Server} from "socket.io";
import http from "http";
import express from "express";
import { env } from "./env.js";
import { socketAuthMiddleware } from "../middleware/socket.auth.middleware.js";

const app = express()

const server = http.createServer(app)

const io = new Server(server,{
    cors: {
        origin: [env.CLIENT_URL],
        credentials: true
    },
});

// Applying authentication middleware to all socket connections 
io.use(socketAuthMiddleware);



export function getReceiverSocketId(userId){
    return userSocketMap[userId];
}

//This is for storing online users
const userSocketMap = {};

io.on("connection",(socket)=>{
    console.log("A user connected",socket.user.username);

    const userId = socket.userId
    userSocketMap[userId] = socket.id

    //io.emit() is used to send events to all conneceted clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect",()=>{
        console.log("A user disconnected",socket.user.username);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers",Object.keys(userSocketMap))
    })
})

export {io,app,server};