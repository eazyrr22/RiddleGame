class Player {
    constructor(name) {
        this.name = name;
        this.times = new Array();
    }

    recordTime(start, end) {
        const totalTime = (end - start) / 1000;
        this.times.push(totalTime);
    }
    
    showStats() {
        let sum = 0;
        for (let i = 0; i < this.times.length; i++) {
            sum += this.times[i];
        }
        const average = sum / this.times.length;
        const totalTime = sum;
        return { totalTime, average }
    }


}

export default Player;