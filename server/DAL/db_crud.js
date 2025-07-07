import fs from "fs";
import { resolve } from "path";

async function addData(path,data){
    const readData = "";
fs.readFile(path,data,(err,value)){   // waiting for response
    if(err){
        console.log('err_while_reading:', err)
    }
    readData = value;    // parse from json
}
const updateData = readData + data;          // append
fs.appendFile(path,updateData,(err)){
    if(err){
        console.log('err_while_writing:',err)
    }
}

}



 function ReadDataAsPromise(path){
    const readData = "";
return new Promise(fs.readFile(path,(err,value)=>{   // waiting for response
    if(err){
        console.log('err_while_reading:', err)
    }
    resolve(value);    // parse from json
    }))
 }


 async function ReadDataAndAwait(path){
    try{
        const data = await ReadDataAsPromise(path,'utf-8')
        return data;
        }
        catch(err){
            console.log('err_while_waiting_for_read:',err)
        }
 }


async function Data(path,data){
    const readData = "";
fs.readFile(path,data,(err,value)){   // waiting for response
    if(err){
        console.log('err_while_reading:', err)
    }
    readData = value;    // parse from json
}
const updateData = readData + data;          // append
fs.appendFile(path,updateData,(err)){
    if(err){
        console.log('err_while_writing:',err)
    }
}

}


