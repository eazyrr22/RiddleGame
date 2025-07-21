import fetch from 'node-fetch';
import {config} from 'dotenv';

config()

const url = "http://localhost:".concat(process.env.SERVER_PORT);

// ------- a. handle routes not finished ------
// --------b. manage response(return/log to console)
export async function getRiddles() {
    const fullRoute = url.concat('/riddles');
    let retrivedData;
    try {
         await fetch(fullRoute)
        .then(response => response.json())
        .then(data=>{retrivedData = JSON.parse(data)})
        return retrivedData;
    } catch (error) {
       console.log('get equest(fetch) rejected:\n',error)
    }
    
}

export async function postRiddle(riddle) {

    if (typeof riddle === "string") {
       const ContentParsed = JSON.parse(riddle);
    }
    const fullRoute = url.concat('/addRiddle')
    return await fetch(fullRoute, {
        method: "POST",
        headers: {
        'Content-Type': 'application/json' 
    },body: ContentParsed
    })
    .then(response => {if(response.ok) return true;})
    .catch(err=>console.log('post request(fetch) rejected',err));

}

export async function updateRiddle(data) {

    if (typeof data === "string") {
       const ContentParsed = JSON.parse(data);
    }
    const fullRoute = url.concat('/updateRiddle')
    return await fetch(fullRoute, {
        method: "PUT",
        headers: {
        'Content-Type': 'application/json' 
    },body: ContentParsed
    })
    .then(response => {if(response.ok) return true;})
    .catch(err=>console.log('post request rejected',err));

}


export async function deleteRiddle(id) {
    const fullRoute = url.concat('/deleteRiddle')
      return await fetch(fullRoute,{
            method:"DELETE",
            headers:{'Content-Type': 'application/json' },
            body: JSON.parse({"id":id})
            })
            .then(response => { if(response.ok) return true;} )
            .catch(err=>console.log('delete request(fetch) rejected: \n',err));
        
}






