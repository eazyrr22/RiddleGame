import fs from "fs/promises";
import { resolve } from "path";


async function readData(path){
    try {
        const fileData =  await fs.readFile(path,'utf-8');
        return JSON.parse(fileData)
    } catch (error) {
         console.log('error reading from file',err)
    }      
          
}


async function addData(path,data){
    const readData = "";
    fs.readFile(path,(err,value)){   // waiting for response
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

export {
    readData
}
