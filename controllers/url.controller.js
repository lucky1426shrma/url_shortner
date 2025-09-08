import { nanoid } from "nanoid";
import {URL} from "../models/url.model.js";

export async function handelGenerateNewShortUrl(req,res){
    const shortID = nanoid(8);
    const body = req.body;

    if(!body){
        return res.status(400).json({error:'url is required'});
    }

    await URL.create({
        shortId: shortID,
        redirectedURL: body.url,
        visitHistory: [],
    });

    // return res.json({id : shortID});

    return res.render('home',{id: shortID});
}

export async function handleRedirectedPage(req,res){
    const reqId = req.params.id;
    const resURL = await URL.findOne({shortId:reqId});

    if(resURL){ 
        // directly using the js operations 
        resURL.visitHistory.push({time : Date.now()});
        return res.redirect(resURL.redirectedURL);
    }
    else return res.json({err: "invlaid shortID"})
}

