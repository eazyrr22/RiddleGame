import rl, { question } from "readline-sync";
import Player from "../models/player.js";
import Round from "./round.js";
import { getAllRiddles } from "../CTRL/riddles_CTRL.js";

export default function playGame(){
const answer = rl.question("welcome! what's your name?")
const currentPlayer = new Player(answer)
const riddelsArray = JSON.parse(getAllRiddles());

for (let rdl of riddelsArray) {
    Round(rdl, currentPlayer);
}

const { totalTime, average } = currentPlayer.showStats()
console.log(`great job  ${answer}! \n total time: ${totalTime} seconds \n average time: ${average} seconds`);

}




