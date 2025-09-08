// export const sessionIdToUserMap = new Map(); // state
// it deletes as the server rerstarts

import jwt from "jsonwebtoken";
const secret = "your_jwt_secret_key"; // use env variable in real apps

export function setUser(user){
    // sessionIdToUserMap.set(id,user);
    return jwt.sign({id: user.name,
        email: user.email,
    },secret,{expiresIn: "1h"}); // 1hr
}

export function getUser(token){
    // return sessionIdToUserMap.get(id);
    
    if(!token){
        return null; // null check
    }

    try{
        return jwt.verify(token,secret); // returns user 
    }catch(error){
        return null;
    }
}