import {getData,postData,deleteData} from 'Riddle_DAL.js';

const URL = "http://localhost:5007";

function getAllRiddles(URL,route){
    const fullRoute = URL.concat(route); 
    getData(fullRoute)
}
export default getAllRiddles;