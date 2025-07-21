import rl, { question } from 'readline-sync';
import Riddle from '../models/riddels.js';

 export function createRiddle(){

    const id = parseInt(question("riddle id:\n"));
    const name = question("Riddle name:\n");
    const description = question("describe the riddle:\n");
    const answer = question("Riddle answer:\n");
    return new Riddle(id,name,description,answer);

}