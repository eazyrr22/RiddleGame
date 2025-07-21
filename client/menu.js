import { getAllRiddles,createAndAddRiddle } from "./CTRL/riddles_CTRL"
import rl, { question } from 'readline-sync';
import playGame from "./game";

export default function Menu(){
    console.log('What do you want to do?')
    console.log('1. Play the game')
    console.log('2. Create a new riddle')
    console.log('3. Read all riddles')
    console.log('4. Update an existing riddle')
    console.log('5. Delete a riddle')
    console.log('6. View leaderboard')
    const input = question('');
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


    }

}