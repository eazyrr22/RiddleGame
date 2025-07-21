
function Round(riddle, player) {
    const start = Date.now();
    riddle.ask();
    const end = Date.now();
    player.recordTime(start, end);

}

export default Round;