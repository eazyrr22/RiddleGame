import {addItem,deleteItem,getAllData,getItemById,updateItem,updateItem} from '../DAL/MNGDB_Crud.js';
import {config} from 'dotenv';

config()

const url = process.env.DB_URL;

 export async function addRiddle(req,res){
    try{
        const riddle = JSON.parse(req.body)
        await addItem(riddle)                                             // ?? should catch the response
        res.status(200).json({"msg":"riddle added successfuly"});      
    }
    catch(err){
        res.status(500).json({"err":`post request to db failed: \n ${err}`});
    }
}

export async function getRiddles(req,res){
    try{
        const retrivedData =  await getAllData()
        .then(data=>data)
        res.status(200).json({"riddles":retrivedData});      
    }
    catch(err){
        res.status(500).json({"err":`get request failed \n${err}`});
    }
}

export async function updateRiddle(req,res){
    try{
        const itemId = req.body.id
        const setData = req.body.data 
        await updateItem(itemId,setData)                                 // ?? should catch the response
        res.status(200).json({"riddles":retrivedData});      
    }
    catch(err){
        res.status(500).json({"err":`update request failed \n${err}`});
    }
}


export async function deleteRiddle(req,res){
    try{
        const itemId = req.body.id
        await deleteItem(itemId)                                 // ?? should catch the response
        res.status(200).json({"msg":"riddle deleted"});      
    }
    catch(err){
        res.status(500).json({"err":`delete request failed \n${err}`});
    }
}







