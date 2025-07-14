import Router from "Router";

router = Router();

router.get('/riddles', (req, res) => {
    // Logic to handle GET request for riddles
    res.send("Get all riddles");
});

router.post('/riddles', (req, res) => {
    // Logic to handle POST request for riddles
    res.send("Create a new riddle");
});
router.get('/riddles/getAllRiddles', (req, res) => {
    // Logic to handle GET request for all riddles
    res.send("Get all riddles");
});
router.delete('/riddles/:id', (req, res) => {
    const riddleId = req.params.id;
    // Logic to handle DELETE request for a specific riddle
    res.send(`Delete riddle with ID: ${riddleId}`);
}); 
router.put('/riddles/:id', (req, res) => {
    const riddleId = req.params.id;
    // Logic to handle PUT request for updating a specific riddle
    res.send(`Update riddle with ID: ${riddleId}`);
});         
export default router;