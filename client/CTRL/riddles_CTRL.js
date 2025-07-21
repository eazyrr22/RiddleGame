import {getRiddles,postRiddle,deleteRiddles,updateRiddle} from '../DAL/riddles_DAL.js';
import {createRiddle} from '../utils/createRiddles.js';


// const URL = "http://localhost:5007";  ---- neccessary here?

export async function getAllRiddles(){
     return await getRiddles()
     .then(value=>JSON.parse(value))
     .catch(err=>{console.log('getAllRiddles failed: \n',err)});
    } 
   
export async function createAndAddRiddle(){
    const riddle = createRiddle();
    try{
        postRiddle(riddle)
        .then(value=>{if(value)console.log('riddle was added successfuly')})
    }
    catch(err){
        console.log('adding riddle failed:\n',err)
    }

}
