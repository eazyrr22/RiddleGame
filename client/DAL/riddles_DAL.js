import fetch from 'node-fetch';

// const path = "http://localhost:5007";

async function getData(path) {
    return await fetch(path, { encoding: "utf-8" })
    .then(response => response.json())
    .then(value=>console.log(value))
    .catch(err=>console.log('get_request_rejected',err));

}

async function postData(url, data) {

    if (typeof data !== "string") {
       const ContentParsed = JSON.stringify(data);
    }
    return await fetch(url, {
        method: "POST",
        headers: {
        'Content-Type': 'application/json' 
    },body: ContentParsed
    })
    .then(response => {if(response.ok)console.log('post succeed')})
    .catch(err=>console.log('post request rejected',err));

}


async function deleteData(url, id) {

      return await fetch(url,{
            method:"DELET",
            headers:{'Content-Type': 'application/json' },
            body: JSON.stringify({"id":id})
            })
            .then(response => { if(response.ok) console.log('delete succeed') } )
            .catch(err=>console.log('delete request rejected',err));
        
}







export {
    getData,
    postData,
    deleteData
}




