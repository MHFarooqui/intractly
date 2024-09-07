const router = require('express').Router();
var authSid = process.env.Auth_Sid;
var authToken = process.env.Auth_Token;

var client = require('twilio')(authSid, authToken);

router.use('/contacts', require('./contacts'));
router.use('/callService', require('./CallService'));

async function createCall() {
    const call = await client.calls.create({
        from: process.env.Twilio_No,
        to: process.env.My_No,
        twiml: `<Response>
                    <Gather action="https://10d2-2401-4900-1c9a-aa7f-c021-f5a8-166-d5fc.ngrok-free.app/callService/handle-keypress" method="POST">
                        <Play>https://blue-pug-9721.twil.io/assets/Fara%20interview%20audio%20(1).mp3</Play>
                    </Gather>
                </Response>`
    });

    console.log(call.sid);
}

createCall();

module.exports = router;