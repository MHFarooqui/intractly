const router = require('express').Router();

router.post('/handle-keypress', async (req, res) => {
    try {
        const digitPressed = req.body.Digits;
        res.set('Content-Type', 'text/xml');
        if (digitPressed === '1') {
            res.send(`
                <Response>
                    <Sms to="Add recievers number" from= "add twilio number">Thanks for the response</Sms>
                    
                </Response>
                `)
        }else{
            res.send(`
                <Response>
                    <Say>Wrong key pressed</Say>                    
                </Response>
                `)
        };
    } catch (error) {
        console.log(error);
        res.send(error);

    }
});

module.exports = router;