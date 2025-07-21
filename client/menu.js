import { getAllRiddles,createAndAddRiddle } from "./CTRL/riddles_CTRL.js"
import rl, { question } from 'readline-sync';
import playGame from "./GameManagement/game.js";


export default function Menu(){
    console.log('What do you want to do?')
    console.log('1. Play the game')
    console.log('2. Create a new riddle')
    console.log('3. Read all riddles')
    console.log('4. Update an existing riddle')
    console.log('5. Delete a riddle')
    console.log('6. View leaderboard')
    const input = question('your choice:   ');
   
    switch(input){
        case 1:
            playGame();
            break;
        case 2:
            createAndAddRiddle();
            break;
        case 3:
            getAllRiddles();
            break;
        case 4:
            console.log('hello')
            break;
    }  

}
