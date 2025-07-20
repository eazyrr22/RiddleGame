import getData from 'riddles_DAL.js';
const URL = "http://localhost:5007";

function getAllRiddles(){
    const fullRoute = URL.concat('/getAllRiddles');
    const riddlesArray = getData(fullRoute);

}