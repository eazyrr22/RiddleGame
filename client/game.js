import rl, { question } from "readline-sync";
import Player from "./models/player.js";
import riddelsArray from "./models/riddles_entities/arrayOfRiddles.js";
import Round from "./services/round.js";

export default function playGame(){
const answer = rl.question("welcome! what's your name?")
const currentPlayer = new Player(answer)

for (let rdl of riddelsArray) {
    Round(rdl, currentPlayer);
}

const { totalTime, average } = currentPlayer.showStats()
console.log(`great job  ${answer}! \n total time: ${totalTime} seconds \n average time: ${average} seconds`);

}




