const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors({origin:"*"}));

const accountSid = process.env.ACCOUNT_ID;
const authToken = process.env.AUTH_TOKEN;
const twilio = require('twilio');

const client = new twilio(accountSid, authToken);

app.post('/make-call', (req, res) => {
    const toNumber = req.body.toNumber; // The phone number to call
    const fromNumber = process.env.FAKE_NUMBER;
    const MyNumber=process.env.MY_NUMBER

    client.calls
        .create({
            from: fromNumber,
            to: MyNumber,
            url: process.env.REDIRECT_URI+`?phoneNumber=${toNumber}`   // this is your {backend url}/twiml?phoneNumber=toNumber
        })
        .then(call => {
            console.log(`Call will be  made to ${toNumber}`);
            res.send(`Call will be made to ${toNumber}`);
        });
});


app.post('/twiml', (req, res) => {
    const {phoneNumber} = req.query;
    // console.log(phoneNumber,req);
    const twiml = new twilio.twiml.VoiceResponse();

    // Answer the call
    twiml.say('Hello, you are now connected and the call will be made to another Number. Please wait!');

    // Enable two-way communication
    twiml.dial(phoneNumber);

    res.type('text/xml');
    res.send(twiml.toString());
});

app.listen(4000, () => {
    console.log('Server listening on port 4000');
});