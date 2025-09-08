import {getUser} from "../utils/auth.js";

export async function restrictToLoggedinUserOnly(req,res,next){

    console.log(req.cookies);
    const userUid = req.cookies.uid;
    // console.log(userUid);
    // console.log(sessionIdToUserMap);

    if(!userUid){ console.log(400); return res.redirect("/login");}

    const user = getUser(userUid);

    console.log(user);

    if(!user){
        return res.redirect("/login");
    }

    req.user = user;
    next();
 }

 function restrictTo(roles){
    return fucntion
 }