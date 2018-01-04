const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

const parrisAccount = require('./accounts/parris@bedrockdata.json')

app.use(bodyParser.json({ type: 'application/json' }));

app.get('/', (req, res) => {
    res.send('hello bedrock')
})

app.post('/account', (req, res) => {
    res.send({
        success: "true",
        message: `Successfully created account for ${req.body.email}`
    })
}) 

app.get('/account/', (req, res) => {

    if (req.query.password === parrisAccount.password) {
        res.send({
            "success": "true",
            "message": "Authenticated."
        })
    }

    if (req.query.password !== parrisAccount.password) {
        res.send({
            "success": "false",
            "message": "Could not authenticate."
        })
    }
})

app.listen(8080, () => {
    console.log('server running on localhost:8080');
})

