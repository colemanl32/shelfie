require(`dotenv`).config()
const express = require('express')
const massive = require('massive')
const app = express()

const { SERVER_PORT = 4000, CONNECTION_STRING } = process.env

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false,
    },
}).then((dbInstance) => {
    app.set('db', dbInstance)
    console.log('DB Ready')
    app.listen(SERVER_PORT, () => 
    console.log(`Listening on port ${SERVER_PORT}`)
)
})

