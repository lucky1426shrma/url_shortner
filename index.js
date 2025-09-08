import express from "express";
import {router} from './routes/url.route.js'
import {router as userRouter} from "./routes/user.route.js";
import {connectToMongoDb} from './connnect.js';
import {URL} from './models/url.model.js';
import path from "path";
import {router as staticRouter} from "./routes/staticrouter.js";
import cookieParser from "cookie-parser";


const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

connectToMongoDb('mongodb://127.0.0.1:27017/urlshortner').then(()=>{
    console.log("mongoDB connected");
})

app.use(express.urlencoded({ extended: false })); // for forms
app.use(cookieParser());

app.use('/url',router);

app.use('/user',userRouter);

app.use('/',staticRouter);

app.post("/test",(req,res)=>{
    console.log("body",req.body);
    return res.json(req.body);
})

app.listen(PORT,()=>{
    console.log(`server started on ${PORT}`)
}) 