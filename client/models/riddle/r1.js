import { json } from "stream/consumers";
import Riddle from "../riddels.js";

const firstRiddle = new Riddle ( 
                    1,
                    "multiply",
                    "what is 8 * 8?",
                    64
)   

console.log(JSON.stringify(firstRiddle))
export default firstRiddle

