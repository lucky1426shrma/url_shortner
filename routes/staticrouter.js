import express from 'express';
import {URL} from '../models/url.model.js'
import {restrictToLoggedinUserOnly} from "../middlewares/auth.middleware.js"

export const router = express.Router();

// to render the page

// sign up 
router.get("/signup",(req,res)=>{
    return res.render("signup");
})

// login route
router.get("/login",(req,res)=>{
    return res.render("login");
})

// home page
router.use(restrictToLoggedinUserOnly);

router.get("/",async (req,res)=>{
    const allUrls = await URL.find({})

    return res.render("home",{
        allurl : allUrls,
    });

})

