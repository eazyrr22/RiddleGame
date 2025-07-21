
function Round(riddle, ply) {
    const start = Date.now();
    riddle.ask();
    const end = Date.now();
    ply.recordTime(start, end);

}

export default Round;