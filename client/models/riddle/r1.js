import { json } from "stream/consumers";
import Riddle from "../riddels.js";

const firstRiddle = new Riddle ( 
                    id = 1,
                    name = "multiply",
                    taskDescription = "what is 8 * 8?",
                    correctAnswer = 64
)   

console.log(JSON.stringify(firstRiddle))
export default firstRiddle

