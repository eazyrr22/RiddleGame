import rl, { question } from "readline-sync";

class Riddle {
    constructor(id, name, taskDescription, correctAnswer) {
        this.id = id
        this.name = name
        this.taskDescription = taskDescription
        this.correctAnswer = correctAnswer
    }

    // 
    ask() {
        let answer = 0;
        console.log(this.taskDescription);
        while (answer != this.correctAnswer) {
            answer = rl.question("your answer:");            // should get a readline.question func
        }
        console.log("congradulation! riddle was solved");
    }
}

export default Riddle