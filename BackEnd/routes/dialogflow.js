const express = require('express');
const router = express.Router();
//const structjson = require('./structjson.js');
const dialogflow = require('dialogflow');
const uuid = require('uuid');

const config = require('../config/dev');

const projectId = config.googleProjectID
const sessionId = config.dialogFlowSessionID
const languageCode = config.dialogFlowSessionLanguageCode

// Create a new session
const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(projectId, sessionId);

// We will make two routes 

// Text Query Route

router.post('/textQuery', async (req, res) => {
    //We need to send some information that comes from the client to Dialogflow API 
    // The text query request.
    console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS);
    console.log(sessionClient);
    console.log('This is session path............');
    console.log(sessionPath);
    console.log('Separated...............................................');
    console.log(projectId);
    console.log(sessionId);

    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                // The query to send to the dialogflow agent
                text: req.body.text,
                // The language used by the client (en-US)
                languageCode: languageCode,
            },
        },
    };

    console.log(request);
    console.log('Before go to log result');

     // Send request and log result
     const responses = await sessionClient.detectIntent(request);
     console.log(responses);
     console.log('Detected intent');
    const result = responses[0].queryResult;
     console.log(`  Query: ${result.queryText}`);
     console.log(`  Response: ${result.fulfillmentText}`);
 
     res.send(result)
 })


//Event Query Route

router.post('/eventQuery', async (req, res) => {
    //We need to send some information that comes from the client to Dialogflow API 
    // The text query request.
    const request = {
        session: sessionPath,
        queryInput: {
            event: {
                // The query to send to the dialogflow agent
                name: req.body.event,
                // The language used by the client (en-US)
                languageCode: languageCode,
            },
        },
    };

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);

    res.send(result)
})

 module.exports = router;


 // set GOOGLE_APPLICATION_CREDENTIALS=/Users/HARITHA/DOWNLOADS/chatBotKey/slarchhub-chat-bot.json
 // "F:\chatBotKey\slarchhub-chat-bot.json"
 // "F:\chatBotKey\slarchhub-chat-bot-2.json"