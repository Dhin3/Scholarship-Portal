import express, { response } from "express";
import {PORT,MOGODBURL} from "./config.js"
import mongoose from "mongoose";
import { person } from "./models/person-model.js";

const app = express();
app.use(express.json());
app.get('/',(req,res)=>{
    console.log(req);
    return res.status(243).send("Welcome");
})

app.post('/persons', (req,res) => {
    try {
        if(req.body.name && req.body.year){
            console.log("im here");
            const newPerson = {
                name : req.body.name,
                year : req.body.year
            };
            console.log("im here");
            const per =  person.create(newPerson);
            console.log(per);
            return res.status(201).send(newPerson);
        }
    } catch (error) {
        console.log("here"+error);
        res.status(243).send("error: "+error);
    }
})

mongoose.connect(MOGODBURL)
        .then(()=>{
            console.log("connected")
            app.listen(PORT,()=>{
                console.log('Listening to '+PORT)
            })
        })
        .catch((error)=>{
            console.log("got"+error)
        })
