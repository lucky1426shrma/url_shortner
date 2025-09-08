import {User} from '../models/user.model.js';
import {v4 as uuidv4} from 'uuid';
import { getUser , setUser } from '../utils/auth.js';

export async function handleUserSignUp(req,res){

    const body = req.body;

    await User.create({
        name: body.name,
        email: body.email,
        password: body.password,
    }).then(()=>{
        return res.render("home",{check : true});
    }).catch((err)=>{
        return res.json({msg:`the error ${err} occured`});
    });

}

export async function handleUserLogin(req,res){
    const body = req.body;
    
    console.log("body",body);

    const user = await User.findOne({email: body.email, password: body.password});

    if(user){

        // const sessionId = uuidv4();
        // setUser(id,user);
        const token = setUser(user);
        res.cookie("uid", token);
        return res.redirect('/');

    }
    else{
        return res.json({msg:"invalid data"});
    }

}