import express from 'express';
import {handleUserLogin,handleUserSignUp} from '../controllers/user.controller.js';

export const router  = express.Router();

router.post('/signup',handleUserSignUp);

router.get('/hello',(req,res)=>{
    return res.send("hell0");
})

router.post('/login', handleUserLogin);